/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIssue = /* GraphQL */ `
  query GetIssue($id: ID!) {
    getIssue(id: $id) {
      content
      timestamp
      source {
        type
        url
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listIssues = /* GraphQL */ `
  query ListIssues(
    $filter: ModelIssueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIssues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        timestamp
        source {
          type
          url
          __typename
        }
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
      title
      description
      timestamp
      severity
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        description
        timestamp
        severity
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
