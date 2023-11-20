// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SourceType = {
  "REDDIT": "REDDIT"
};

const Severity = {
  "LOW": "LOW",
  "MEDIUM": "MEDIUM",
  "HIGH": "HIGH"
};

const { Issue, Ticket, Source } = initSchema(schema);

export {
  Issue,
  Ticket,
  SourceType,
  Severity,
  Source
};