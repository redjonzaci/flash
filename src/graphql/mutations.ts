/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIssue = /* GraphQL */ `
  mutation CreateIssue(
    $input: CreateIssueInput!
    $condition: ModelIssueConditionInput
  ) {
    createIssue(input: $input, condition: $condition) {
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
export const updateIssue = /* GraphQL */ `
  mutation UpdateIssue(
    $input: UpdateIssueInput!
    $condition: ModelIssueConditionInput
  ) {
    updateIssue(input: $input, condition: $condition) {
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
export const deleteIssue = /* GraphQL */ `
  mutation DeleteIssue(
    $input: DeleteIssueInput!
    $condition: ModelIssueConditionInput
  ) {
    deleteIssue(input: $input, condition: $condition) {
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
export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
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
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
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
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
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
