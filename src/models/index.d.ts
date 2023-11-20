import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum SourceType {
  REDDIT = "REDDIT"
}

export enum Severity {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH"
}

type EagerSource = {
  readonly type: SourceType | keyof typeof SourceType;
  readonly url: string;
}

type LazySource = {
  readonly type: SourceType | keyof typeof SourceType;
  readonly url: string;
}

export declare type Source = LazyLoading extends LazyLoadingDisabled ? EagerSource : LazySource

export declare const Source: (new (init: ModelInit<Source>) => Source)

type EagerIssue = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Issue, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly timestamp: string;
  readonly source?: Source | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyIssue = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Issue, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly timestamp: string;
  readonly source?: Source | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Issue = LazyLoading extends LazyLoadingDisabled ? EagerIssue : LazyIssue

export declare const Issue: (new (init: ModelInit<Issue>) => Issue) & {
  copyOf(source: Issue, mutator: (draft: MutableModel<Issue>) => MutableModel<Issue> | void): Issue;
}

type EagerTicket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ticket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly timestamp: string;
  readonly severity: Severity | keyof typeof Severity;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTicket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ticket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly timestamp: string;
  readonly severity: Severity | keyof typeof Severity;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ticket = LazyLoading extends LazyLoadingDisabled ? EagerTicket : LazyTicket

export declare const Ticket: (new (init: ModelInit<Ticket>) => Ticket) & {
  copyOf(source: Ticket, mutator: (draft: MutableModel<Ticket>) => MutableModel<Ticket> | void): Ticket;
}