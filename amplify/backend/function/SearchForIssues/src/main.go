package main

import (
	"context"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"

	"lambda/models/domain"
	"lambda/models/dto"
	"lambda/requests"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/ssm"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/machinebox/graphql"
)

func HandleRequest(ctx context.Context, event events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	sessionWithOptions, _ := session.NewSessionWithOptions(session.Options{
		Config:            aws.Config{Region: aws.String("us-east-1")},
		SharedConfigState: session.SharedConfigEnable,
	})
	ssmClient := ssm.New(sessionWithOptions, aws.NewConfig().WithRegion("us-east-1"))
	redditUsernameParam, err := ssmClient.GetParameter(&ssm.GetParameterInput{
		Name:           aws.String("/amplify/d39kyvoqepxydg/staging/AMPLIFY_SearchForIssues_REDDIT_USERNAME"),
		WithDecryption: aws.Bool(true),
	})
	if err != nil {
		return events.APIGatewayProxyResponse{Body: err.Error(), StatusCode: 500}, nil
	}

	redditPasswordParam, err := ssmClient.GetParameter(&ssm.GetParameterInput{
		Name:           aws.String("/amplify/d39kyvoqepxydg/staging/AMPLIFY_SearchForIssues_REDDIT_PASSWORD"),
		WithDecryption: aws.Bool(true),
	})
	if err != nil {
		return events.APIGatewayProxyResponse{Body: err.Error(), StatusCode: 500}, nil
	}

	reqBody := fmt.Sprintf("grant_type=password&username=%s&password=%s", *redditUsernameParam.Parameter.Value, *redditPasswordParam.Parameter.Value)
	req, err := http.NewRequest("POST", "https://www.reddit.com/api/v1/access_token", strings.NewReader(reqBody))
	if err != nil {
		return events.APIGatewayProxyResponse{Body: err.Error(), StatusCode: 500}, nil
	}

	// Headers
	req.Header.Set("User-Agent", "Flash app by /u/redjonzaci")
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	base64Encoded := base64.StdEncoding.EncodeToString([]byte("4woaH4T8DTk_0Lt3aD7F-Q:yalgC_ebUZD8ASDAMCQmPjvXkj06ug"))
	req.Header.Set("Authorization", "Basic "+base64Encoded)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return events.APIGatewayProxyResponse{Body: err.Error(), StatusCode: 500}, nil
	}

	bodyBytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return events.APIGatewayProxyResponse{Body: err.Error(), StatusCode: 500}, nil
	}

	var accessTokenResp dto.AccessTokenResponse
	err = json.Unmarshal(bodyBytes, &accessTokenResp)
	if err != nil {
		return events.APIGatewayProxyResponse{Body: err.Error(), StatusCode: 500}, nil
	}

	tickets := searchReddit(accessTokenResp.AccessToken)
	ticketsJson, err := json.Marshal(tickets)
	if err != nil {
		return events.APIGatewayProxyResponse{Body: err.Error(), StatusCode: 500}, nil
	}

	return events.APIGatewayProxyResponse{Body: string(ticketsJson), StatusCode: 200}, nil
}

func main() {
	lambda.Start(HandleRequest)
}

func searchReddit(accessToken string) []domain.Ticket {
	subreddits := []string{"teslamotors", "TeslaModel3", "TeslaModelY", "TeslaModelS", "TeslaModelX", "TeslaLounge", "electricvehicles", "RealTesla"}
	wg := sync.WaitGroup{}
	dataChan := make(chan []dto.SearchResponse, len(subreddits))

	for _, subreddit := range subreddits {
		wg.Add(1)
		go func(subreddit string) {
			defer wg.Done()

			req, err := http.NewRequest("GET", fmt.Sprintf("https://oauth.reddit.com/r/%s/search?q=tesla%%20issue&restrict_sr=true&t=day", subreddit), nil)
			if err != nil {
				fmt.Printf("Error creating request: %s", err)
				return
			}

			// Headers
			req.Header.Set("User-Agent", "Flash app by /u/redjonzaci")
			req.Header.Set("Authorization", "Bearer "+accessToken)

			client := &http.Client{}
			resp, err := client.Do(req)
			if err != nil {
				fmt.Printf("Error sending request: %s", err)
				return
			}

			bodyBytes, err := ioutil.ReadAll(resp.Body)
			if err != nil {
				fmt.Printf("Error reading response body: %s", err)
				return
			}

			var searchResp dto.SearchResponse
			err = json.Unmarshal(bodyBytes, &searchResp)
			if err != nil {
				fmt.Printf("Error unmarshalling response body: %s", err)
				return
			}

			dataChan <- []dto.SearchResponse{searchResp}
		}(subreddit)
	}

	wg.Wait()
	close(dataChan)

	var tickets []domain.Ticket
	for data := range dataChan {
		for _, result := range data {
			if len(result.Data.Children) == 0 {
				continue
			}

			for _, child := range result.Data.Children {
				url := fmt.Sprintf("https://reddit.com%s", child.Data.Permalink)
				if checkIfUrlExists(url) {
					continue
				}

				timestamp := time.Unix(int64(child.Data.CreatedUtc), 0).Format("2006-01-02T15:04:05Z")

				err := createTicket(domain.Ticket{
					Title:      child.Data.Title,
					Content:    child.Data.Selftext,
					Timestamp:  timestamp,
					SourceType: domain.REDDIT,
					Url:        url,
				})
				if err != nil {
					fmt.Printf("Error creating ticket: %s", err)
					return nil
				}
			}
		}
	}

	return tickets
}

func checkIfUrlExists(url string) bool {
	appsyncClient := graphql.NewClient(os.Getenv("API_FLASH_GRAPHQLAPIENDPOINTOUTPUT"))
	req := requests.TicketsByUrlRequest

	req.Var("url", url)

	req.Header.Set("x-api-key", os.Getenv("API_FLASH_GRAPHQLAPIKEYOUTPUT"))

	ctx := context.Background()

	var respData dto.TicketsByUrlResponse
	if err := appsyncClient.Run(ctx, req, &respData); err != nil {
		fmt.Println(err)
	}

	if len(respData.TicketsByUrl.Items) > 0 {
		return true
	}

	return false
}

func createTicket(ticket domain.Ticket) error {
	appsyncClient := graphql.NewClient(os.Getenv("API_FLASH_GRAPHQLAPIENDPOINTOUTPUT"))
	req := requests.CreateTicketRequest

	req.Var("input", ticket)

	req.Header.Set("x-api-key", os.Getenv("API_FLASH_GRAPHQLAPIKEYOUTPUT"))

	ctx := context.Background()

	var respData dto.CreateTicketResponse
	if err := appsyncClient.Run(ctx, req, &respData); err != nil {
		return err
	}

	return nil
}
