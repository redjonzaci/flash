package domain

type Ticket struct {
	Title      string     `json:"title"`
	Content    string     `json:"content"`
	Timestamp  string     `json:"timestamp"`
	SourceType SourceType `json:"sourceType"`
	Url        string     `json:"url"`
}

type SourceType string

const (
	REDDIT SourceType = "REDDIT"
)
