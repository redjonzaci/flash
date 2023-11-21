package requests

import "github.com/machinebox/graphql"

var CreateTicketRequest = graphql.NewRequest(`
mutation CreateTicket(
	$input: CreateTicketInput!
	$condition: ModelTicketConditionInput
) {
	createTicket(input: $input, condition: $condition) {
		title
		content
		url
		sourceType
		timestamp
		severity
		id
		createdAt
		updatedAt
		_version
		_deleted
		_lastChangedAt
		__typename
	}
}
`)
