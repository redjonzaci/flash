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

const Category = {
  "MODEL_S": "MODEL_S",
  "MODEL_3": "MODEL_3",
  "MODEL_X": "MODEL_X",
  "MODEL_Y": "MODEL_Y",
  "STORE": "STORE",
  "SERVICE_CENTER": "SERVICE_CENTER",
  "APP": "APP",
  "WEBSITE": "WEBSITE"
};

const { Ticket } = initSchema(schema);

export {
  Ticket,
  SourceType,
  Severity,
  Category
};