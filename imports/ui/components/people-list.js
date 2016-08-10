import { Template } from 'meteor/templating';

import { Peoples } from '../../api/peoples/peoples'	// imports collection ?

import './people-list.html';    // imports html

Template.peopleList.onCreated(function peopleListOnCreated(){
	Meteor.subscribe('peoples');
})

Template.peopleList.helpers({
	peoples() {
		return Peoples.find({}, { sort: { lastname: 1 } });
	}
});

Template.peopleList.events({
	'click .delete'(){
		let confirm = confirm("Do you want to remove " + this.firstname + " " + this.lastname);
		Peoples.remove(this._id);
	}
});