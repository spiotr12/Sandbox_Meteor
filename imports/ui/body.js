import { Template } from 'meteor/templating';

import './body.html';
import './components/people-list';     // import people-list.js which imports the html file what allows to use that template
import './components/new-person-form';

Template.body.helpers({

})