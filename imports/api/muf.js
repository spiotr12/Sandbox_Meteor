/**
 * =====================
 *    MY USEFUL FUNCTIONS
 * =====================
 * This is set of useful custom build functions for app development for Meteor
 * _____________________
 *    Author:
 * ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 *    Piotr Starzec
 * _____________________
 *    Requirements:
 * ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 *    meteor packages:
 *    - nooitaf:colors
 */
import { Meteor } from 'meteor/meteor';

export const Log = {
	/**
	 * Output log for client
	 * @param {string} message
	 * @param {string} level (optional)
	 */
	forClient: function (message, level = null) {
		if (arguments.length == 1) {
			if (Meteor.isClient) {
				console.log(message);
			}
		} else {
			if (Meteor.isClient) {
				console.log('[' + level.toUpperCase() + ']\t' + message);
			}
		}
	},

	/**
	 * Output log for server
	 * @param {string} message
	 * @param {string} level (optional)
	 */
	forServer: function (message, level = null) {
		colors.setTheme({
			good: 'green',
			debug: 'blue',
			warning: 'yellow',
			err: 'red',
		});

		let str = '';

		if (arguments.length == 1) {
			if (Meteor.isServer) {
				str = message;
				// console.log(message);
			}
		} else {
			if (Meteor.isServer) {
				str = '[' + level.toUpperCase() + ']\t' + message + ' ';
				// console.log(('[' + level.toUpperCase() + ']\t' + message));
			}
		}
		switch (level) {
			case 'good' :
				console.log(str.good);
				break;
			case 'debug' :
				console.log(str.debug);
				break;
			case 'warn' :
				console.log(str.warning);
				break;
			case 'error' :
				console.log(str.err);
				break;
			default :
				console.log(str);
				break;
		}
	},

	/**
	 * Output log for server and client
	 * @param {string} message
	 * @param {string} level (optional)
	 */
	out: function (message, level = null) {
		if (arguments.length == 1) {
			this.forClient(message);
			this.forServer(message);
		} else {
			this.forClient(message, level);
			this.forServer(message, level);
		}
	}
}

export const Converter = {
	/**
	 * Produce a string with all object properties
	 * @param {object} obj Object with properties
	 * @param {boolean} withType (optional) set to true for printing property type
	 * @param {boolean} inLine (optional) set to true for printing properties in single line
	 * @returns {string}
	 */
	objectToString: function (obj, { withType = false, inLine = false } = {}) {
		let str = '';
		for (let prop in obj) {
			str += prop + ': \"' + obj[prop] + '\"';
			if (withType) {
				str += ' {' + typeof(obj[prop]) + '}';
			}
			if (inLine) {
				str += ', ';
			} else {
				str += '\n';
			}

		}
		return str;
	}
}