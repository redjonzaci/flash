package dto

import "lambda/models/domain"

type TicketsByUrlResponse struct {
	TicketsByUrl TicketsByUrl `json:"ticketsByUrl"`
}

type TicketsByUrl struct {
	Items     []domain.Ticket `json:"items"`
	NextToken string          `json:"nextToken"`
	StartedAt string          `json:"startedAt"`
}
