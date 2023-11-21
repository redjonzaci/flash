package requests

import (
	"github.com/machinebox/graphql"
)

var TicketsByUrlRequest = graphql.NewRequest(`
query TicketsByUrl(
	$url: String!
	$sortDirection: ModelSortDirection
	$filter: ModelTicketFilterInput
	$limit: Int
	$nextToken: String
) {
	ticketsByUrl(
		url: $url
		sortDirection: $sortDirection
		filter: $filter
		limit: $limit
		nextToken: $nextToken
	) {
		items {
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
		nextToken
		startedAt
		__typename
	}
}
`)
