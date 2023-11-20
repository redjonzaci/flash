/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIssue = /* GraphQL */ `
  subscription OnCreateIssue($filter: ModelSubscriptionIssueFilterInput) {
    onCreateIssue(filter: $filter) {
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
export const onUpdateIssue = /* GraphQL */ `
  subscription OnUpdateIssue($filter: ModelSubscriptionIssueFilterInput) {
    onUpdateIssue(filter: $filter) {
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
export const onDeleteIssue = /* GraphQL */ `
  subscription OnDeleteIssue($filter: ModelSubscriptionIssueFilterInput) {
    onDeleteIssue(filter: $filter) {
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
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket($filter: ModelSubscriptionTicketFilterInput) {
    onCreateTicket(filter: $filter) {
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
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket($filter: ModelSubscriptionTicketFilterInput) {
    onUpdateTicket(filter: $filter) {
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
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket($filter: ModelSubscriptionTicketFilterInput) {
    onDeleteTicket(filter: $filter) {
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
