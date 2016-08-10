import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidationError } from 'meteor/mdg:validation-error';

import { Log, Converter } from '../muf';
import { Schemas } from '../schemas';

export const Peoples = new Mongo.Collection('peoples', { idGeneration: 'MONGO' });

if (Meteor.isServer) {
	Meteor.publish('peoples', function peoplePublication() {
		return Peoples.find();
	})
}

Meteor.methods({
	'peoples.insert'(person){
		Log.forServer('Attempt to add person', 'info');

		const context = Schemas.People.namedContext("peopleInsert");

		context.validate(person);

		if (!context.isValid()) {
			Log.forServer("Some fields are invalid:", 'warning');
			Log.forServer(context.invalidKeys());
		} else {
			Log.forServer(Converter.objectToString(person, {withType: true}));
			Log.forClient(Converter.objectToString(person));
			// Peoples.insert(person);
			Log.out('Person added succesfully! :)');
		}

	}
});
