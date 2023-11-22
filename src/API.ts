/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTicketInput = {
  title: string,
  content: string,
  url: string,
  sourceType: SourceType,
  timestamp: string,
  severity?: Severity | null,
  category?: Category | null,
  id?: string | null,
  _version?: number | null,
};

export enum SourceType {
  REDDIT = "REDDIT",
}


export enum Severity {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}


export enum Category {
  MODEL_S = "MODEL_S",
  MODEL_3 = "MODEL_3",
  MODEL_X = "MODEL_X",
  MODEL_Y = "MODEL_Y",
  STORE = "STORE",
  SERVICE_CENTER = "SERVICE_CENTER",
  APP = "APP",
  WEBSITE = "WEBSITE",
  SUPERCHARGER = "SUPERCHARGER",
  NOT_AN_ISSUE = "NOT_AN_ISSUE",
}


export type ModelTicketConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  url?: ModelStringInput | null,
  sourceType?: ModelSourceTypeInput | null,
  timestamp?: ModelStringInput | null,
  severity?: ModelSeverityInput | null,
  category?: ModelCategoryInput | null,
  and?: Array< ModelTicketConditionInput | null > | null,
  or?: Array< ModelTicketConditionInput | null > | null,
  not?: ModelTicketConditionInput | null,
  _deleted?: ModelBooleanInput | null,
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

export type ModelSourceTypeInput = {
  eq?: SourceType | null,
  ne?: SourceType | null,
};

export type ModelSeverityInput = {
  eq?: Severity | null,
  ne?: Severity | null,
};

export type ModelCategoryInput = {
  eq?: Category | null,
  ne?: Category | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Ticket = {
  __typename: "Ticket",
  title: string,
  content: string,
  url: string,
  sourceType: SourceType,
  timestamp: string,
  severity?: Severity | null,
  category?: Category | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTicketInput = {
  title?: string | null,
  content?: string | null,
  url?: string | null,
  sourceType?: SourceType | null,
  timestamp?: string | null,
  severity?: Severity | null,
  category?: Category | null,
  id: string,
  _version?: number | null,
};

export type DeleteTicketInput = {
  id: string,
  _version?: number | null,
};

export type ModelTicketFilterInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  url?: ModelStringInput | null,
  sourceType?: ModelSourceTypeInput | null,
  timestamp?: ModelStringInput | null,
  severity?: ModelSeverityInput | null,
  category?: ModelCategoryInput | null,
  and?: Array< ModelTicketFilterInput | null > | null,
  or?: Array< ModelTicketFilterInput | null > | null,
  not?: ModelTicketFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelTicketConnection = {
  __typename: "ModelTicketConnection",
  items:  Array<Ticket | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionTicketFilterInput = {
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  sourceType?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  severity?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTicketFilterInput | null > | null,
  or?: Array< ModelSubscriptionTicketFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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

export type CreateTicketMutationVariables = {
  input: CreateTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type CreateTicketMutation = {
  createTicket?:  {
    __typename: "Ticket",
    title: string,
    content: string,
    url: string,
    sourceType: SourceType,
    timestamp: string,
    severity?: Severity | null,
    category?: Category | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    content: string,
    url: string,
    sourceType: SourceType,
    timestamp: string,
    severity?: Severity | null,
    category?: Category | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    content: string,
    url: string,
    sourceType: SourceType,
    timestamp: string,
    severity?: Severity | null,
    category?: Category | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetTicketQueryVariables = {
  id: string,
};

export type GetTicketQuery = {
  getTicket?:  {
    __typename: "Ticket",
    title: string,
    content: string,
    url: string,
    sourceType: SourceType,
    timestamp: string,
    severity?: Severity | null,
    category?: Category | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      content: string,
      url: string,
      sourceType: SourceType,
      timestamp: string,
      severity?: Severity | null,
      category?: Category | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTicketsQueryVariables = {
  filter?: ModelTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTicketsQuery = {
  syncTickets?:  {
    __typename: "ModelTicketConnection",
    items:  Array< {
      __typename: "Ticket",
      title: string,
      content: string,
      url: string,
      sourceType: SourceType,
      timestamp: string,
      severity?: Severity | null,
      category?: Category | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type TicketsByUrlQueryVariables = {
  url: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TicketsByUrlQuery = {
  ticketsByUrl?:  {
    __typename: "ModelTicketConnection",
    items:  Array< {
      __typename: "Ticket",
      title: string,
      content: string,
      url: string,
      sourceType: SourceType,
      timestamp: string,
      severity?: Severity | null,
      category?: Category | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null,
};

export type OnCreateTicketSubscription = {
  onCreateTicket?:  {
    __typename: "Ticket",
    title: string,
    content: string,
    url: string,
    sourceType: SourceType,
    timestamp: string,
    severity?: Severity | null,
    category?: Category | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null,
};

export type OnUpdateTicketSubscription = {
  onUpdateTicket?:  {
    __typename: "Ticket",
    title: string,
    content: string,
    url: string,
    sourceType: SourceType,
    timestamp: string,
    severity?: Severity | null,
    category?: Category | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null,
};

export type OnDeleteTicketSubscription = {
  onDeleteTicket?:  {
    __typename: "Ticket",
    title: string,
    content: string,
    url: string,
    sourceType: SourceType,
    timestamp: string,
    severity?: Severity | null,
    category?: Category | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
