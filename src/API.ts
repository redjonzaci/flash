/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateIssueInput = {
  content: string,
  timestamp: string,
  source?: SourceInput | null,
  id?: string | null,
};

export type SourceInput = {
  type: SourceType,
  url: string,
};

export enum SourceType {
  REDDIT = "REDDIT",
}


export type ModelIssueConditionInput = {
  content?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelIssueConditionInput | null > | null,
  or?: Array< ModelIssueConditionInput | null > | null,
  not?: ModelIssueConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Issue = {
  __typename: "Issue",
  content: string,
  timestamp: string,
  source?: Source | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type Source = {
  __typename: "Source",
  type: SourceType,
  url: string,
};

export type UpdateIssueInput = {
  content?: string | null,
  timestamp?: string | null,
  source?: SourceInput | null,
  id: string,
};

export type DeleteIssueInput = {
  id: string,
};

export type CreateTicketInput = {
  title: string,
  description: string,
  timestamp: string,
  severity: Severity,
  id?: string | null,
};

export enum Severity {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}


export type ModelTicketConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  severity?: ModelSeverityInput | null,
  and?: Array< ModelTicketConditionInput | null > | null,
  or?: Array< ModelTicketConditionInput | null > | null,
  not?: ModelTicketConditionInput | null,
};

export type ModelSeverityInput = {
  eq?: Severity | null,
  ne?: Severity | null,
};

export type Ticket = {
  __typename: "Ticket",
  title: string,
  description: string,
  timestamp: string,
  severity: Severity,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTicketInput = {
  title?: string | null,
  description?: string | null,
  timestamp?: string | null,
  severity?: Severity | null,
  id: string,
};

export type DeleteTicketInput = {
  id: string,
};

export type ModelIssueFilterInput = {
  content?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelIssueFilterInput | null > | null,
  or?: Array< ModelIssueFilterInput | null > | null,
  not?: ModelIssueFilterInput | null,
};

export type ModelIssueConnection = {
  __typename: "ModelIssueConnection",
  items:  Array<Issue | null >,
  nextToken?: string | null,
};

export type ModelTicketFilterInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  severity?: ModelSeverityInput | null,
  and?: Array< ModelTicketFilterInput | null > | null,
  or?: Array< ModelTicketFilterInput | null > | null,
  not?: ModelTicketFilterInput | null,
};

export type ModelTicketConnection = {
  __typename: "ModelTicketConnection",
  items:  Array<Ticket | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionIssueFilterInput = {
  content?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionIssueFilterInput | null > | null,
  or?: Array< ModelSubscriptionIssueFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTicketFilterInput = {
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  severity?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTicketFilterInput | null > | null,
  or?: Array< ModelSubscriptionTicketFilterInput | null > | null,
};

export type CreateIssueMutationVariables = {
  input: CreateIssueInput,
  condition?: ModelIssueConditionInput | null,
};

export type CreateIssueMutation = {
  createIssue?:  {
    __typename: "Issue",
    content: string,
    timestamp: string,
    source?:  {
      __typename: "Source",
      type: SourceType,
      url: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIssueMutationVariables = {
  input: UpdateIssueInput,
  condition?: ModelIssueConditionInput | null,
};

export type UpdateIssueMutation = {
  updateIssue?:  {
    __typename: "Issue",
    content: string,
    timestamp: string,
    source?:  {
      __typename: "Source",
      type: SourceType,
      url: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIssueMutationVariables = {
  input: DeleteIssueInput,
  condition?: ModelIssueConditionInput | null,
};

export type DeleteIssueMutation = {
  deleteIssue?:  {
    __typename: "Issue",
    content: string,
    timestamp: string,
    source?:  {
      __typename: "Source",
      type: SourceType,
      url: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTicketMutationVariables = {
  input: CreateTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type CreateTicketMutation = {
  createTicket?:  {
    __typename: "Ticket",
    title: string,
    description: string,
    timestamp: string,
    severity: Severity,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTicketMutationVariables = {
  input: UpdateTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type UpdateTicketMutation = {
  updateTicket?:  {
    __typename: "Ticket",
    title: string,
    description: string,
    timestamp: string,
    severity: Severity,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTicketMutationVariables = {
  input: DeleteTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type DeleteTicketMutation = {
  deleteTicket?:  {
    __typename: "Ticket",
    title: string,
    description: string,
    timestamp: string,
    severity: Severity,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetIssueQueryVariables = {
  id: string,
};

export type GetIssueQuery = {
  getIssue?:  {
    __typename: "Issue",
    content: string,
    timestamp: string,
    source?:  {
      __typename: "Source",
      type: SourceType,
      url: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIssuesQueryVariables = {
  filter?: ModelIssueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIssuesQuery = {
  listIssues?:  {
    __typename: "ModelIssueConnection",
    items:  Array< {
      __typename: "Issue",
      content: string,
      timestamp: string,
      source?:  {
        __typename: "Source",
        type: SourceType,
        url: string,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTicketQueryVariables = {
  id: string,
};

export type GetTicketQuery = {
  getTicket?:  {
    __typename: "Ticket",
    title: string,
    description: string,
    timestamp: string,
    severity: Severity,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTicketsQueryVariables = {
  filter?: ModelTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTicketsQuery = {
  listTickets?:  {
    __typename: "ModelTicketConnection",
    items:  Array< {
      __typename: "Ticket",
      title: string,
      description: string,
      timestamp: string,
      severity: Severity,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateIssueSubscriptionVariables = {
  filter?: ModelSubscriptionIssueFilterInput | null,
};

export type OnCreateIssueSubscription = {
  onCreateIssue?:  {
    __typename: "Issue",
    content: string,
    timestamp: string,
    source?:  {
      __typename: "Source",
      type: SourceType,
      url: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIssueSubscriptionVariables = {
  filter?: ModelSubscriptionIssueFilterInput | null,
};

export type OnUpdateIssueSubscription = {
  onUpdateIssue?:  {
    __typename: "Issue",
    content: string,
    timestamp: string,
    source?:  {
      __typename: "Source",
      type: SourceType,
      url: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIssueSubscriptionVariables = {
  filter?: ModelSubscriptionIssueFilterInput | null,
};

export type OnDeleteIssueSubscription = {
  onDeleteIssue?:  {
    __typename: "Issue",
    content: string,
    timestamp: string,
    source?:  {
      __typename: "Source",
      type: SourceType,
      url: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null,
};

export type OnCreateTicketSubscription = {
  onCreateTicket?:  {
    __typename: "Ticket",
    title: string,
    description: string,
    timestamp: string,
    severity: Severity,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null,
};

export type OnUpdateTicketSubscription = {
  onUpdateTicket?:  {
    __typename: "Ticket",
    title: string,
    description: string,
    timestamp: string,
    severity: Severity,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null,
};

export type OnDeleteTicketSubscription = {
  onDeleteTicket?:  {
    __typename: "Ticket",
    title: string,
    description: string,
    timestamp: string,
    severity: Severity,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
