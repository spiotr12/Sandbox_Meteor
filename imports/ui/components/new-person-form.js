import { Template } from 'meteor/templating';
import { Peoples } from '../../api/peoples/peoples'	// imports collection ?

import './new-person-form.html';

Template.newPersonForm.events({
	'submit .new-Person'(event) {

		console.log("CLIENT LOG: Adding new person");

		event.preventDefault();

		console.log(event);

		// get values
		const target = event.target;
		const firstname = target.firstname.value;
		const lastname = target.lastname.value;
		const age = parseInt(target.age.value);

		const person = {
			firstname: firstname,
			lastname: lastname,
			age: age
		};

		// insert person
		Meteor.call('peoples.insert', person);

		// clear form
		// target.firstname.value = "";
		// target.lastname.value = "";
		// target.age.value = "";
	}
});