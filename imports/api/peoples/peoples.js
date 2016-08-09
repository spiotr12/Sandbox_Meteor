import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Schemas } from '../schemas';

export const Peoples = new Mongo.Collection('peoples', { idGeneration: 'MONGO' });

Meteor.methods({
	'peoples.insert'(person){
		console.log("SERVER LOG: Adding new person");	// shows up on client and server ????

		const context = Schemas.People.namedContext("peopleInsert");
		let isValid = Schemas.People.validate(person);

		console.log(isValid);

		if (!isValid) {
			console.log("Some values are invalid:");
			console.log(context.invalidKeys());
			// throw new Meteor.Error("invalid-fields", context.invalidKeys());
		} else {
			Peoples.insert(person);
		}

	}
});
