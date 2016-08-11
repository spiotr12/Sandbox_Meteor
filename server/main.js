import { Meteor } from 'meteor/meteor';

import '../imports/api/peoples/peoples';
import { Log } from '../imports/api/muf';

// colors.enabled = true;

Meteor.startup(() => {
	// code to run on server at startup
	Log.forServer('Server started', 'info');
});
