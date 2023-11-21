package dto

import "lambda/models/domain"

type CreateTicketResponse struct {
	CreateTicket domain.Ticket `json:"createTicket"`
}
