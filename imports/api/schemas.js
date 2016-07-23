import { SimpleShema } from 'meteor/aldeed:simple-schema';

export const Schemas = {};

Schemas.People = new SimpleSchema({
	_id: {
		type: Meteor.Collection.ObjectID,
		label: "ID",
		optional: true
	},
	firstname: {
		type: String,
		label: "First name"
	},
	lastname: {
		type: String,
		label: "Last name"
	},
	age: {
		type: Number,
		label: "Age",
		optional: true
	}
});