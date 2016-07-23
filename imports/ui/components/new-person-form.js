import { Template } from 'meteor/templating';
import { Peoples } from '../../api/peoples/peoples'	// imports collection ?

import './new-person-form.html';

Template.newPersonForm.events({
	'submit .new-Person'(event) {

		console.log("LOG: Adding new person");

		event.preventDefault();

		// get values
		const target = event.target;
		const firstname = target.firstname.value;
		const lastname = target.lastname.value;
		const age = target.age.value;

		console.log(event);

		// insert person
		Peoples.insert({
			firstname,
			lastname,
			age
		});

		// clear form
		target.firstname.value = "";
		target.lastname.value = "";
		target.age.value = "";
	}
});