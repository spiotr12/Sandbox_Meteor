import { Meteor } from 'meteor/meteor';

import '../imports/api/peoples/peoples';
import { Log } from '../imports/api/muf';

Meteor.startup(() => {
	// code to run on server at startup
	Log.forServer('Server started', 'info');
});
