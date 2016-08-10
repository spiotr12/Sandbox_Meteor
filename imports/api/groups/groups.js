/**
 * Created by Piotrek on 09/07/2016.
 */
import { Mongo } from 'meteor/mongo';

export const Groups = new Mongo.Collection('groups', { idGeneration: 'MONGO' });

