import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Schemas } from '../schemas';

export const Peoples = new Mongo.Collection('peoples', { idGeneration: 'MONGO' });

var person = {
	firstname: "Karolina",
	lastname: "Wójcic",
	age: 34
};


