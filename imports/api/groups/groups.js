/**
 * Created by Piotrek on 09/07/2016.
 */
import { Mongo } from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

import { Schemas } from '../schemas';

export const Groups = new Mongo.Collection('groups', { idGeneration: 'MONGO' });

