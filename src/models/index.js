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

const { Ticket } = initSchema(schema);

export {
  Ticket,
  SourceType,
  Severity
};