package dto

type AccessTokenResponse struct {
	AccessToken string `json:"access_token"`
	TokenType   string `json:"token_type"`
	ExpiresIn   int    `json:"expires_in"`
	Scope       string `json:"scope"`
}

type SearchResponse struct {
	Kind string `json:"kind"`
	Data struct {
		Children []struct {
			Kind string `json:"kind"`
			Data struct {
				CreatedUtc float64 `json:"created_utc"`
				Permalink  string  `json:"permalink"`
				Selftext   string  `json:"selftext"`
				Title      string  `json:"title"`
			} `json:"data"`
		} `json:"children"`
	} `json:"data"`
}
