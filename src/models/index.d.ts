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
  CHARGING = "CHARGING",
  NOT_AN_ISSUE = "NOT_AN_ISSUE"
}



type EagerTicket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ticket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly url: string;
  readonly sourceType: SourceType | keyof typeof SourceType;
  readonly timestamp: string;
  readonly severity?: Severity | keyof typeof Severity | null;
  readonly category?: Category | keyof typeof Category | null;
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
  readonly content: string;
  readonly url: string;
  readonly sourceType: SourceType | keyof typeof SourceType;
  readonly timestamp: string;
  readonly severity?: Severity | keyof typeof Severity | null;
  readonly category?: Category | keyof typeof Category | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ticket = LazyLoading extends LazyLoadingDisabled ? EagerTicket : LazyTicket

export declare const Ticket: (new (init: ModelInit<Ticket>) => Ticket) & {
  copyOf(source: Ticket, mutator: (draft: MutableModel<Ticket>) => MutableModel<Ticket> | void): Ticket;
}