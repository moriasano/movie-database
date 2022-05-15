// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Movies } = initSchema(schema);

export {
  Movies
};