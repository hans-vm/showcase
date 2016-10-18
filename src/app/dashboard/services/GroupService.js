'use strict';

module.exports = GroupService;

var firebase = require('firebase');

firebase.initializeApp({
	apiKey: 'AIzaSyAw8KpBraiMapZrbUNTLLAV2ISmzZBKrWE',
	authDomain: 'nomnominate-e0506.firebaseapp.com',
	databaseURL: 'https://nomnominate-e0506.firebaseio.com',
	storageBucket: 'nomnominate-e0506.appspot.com',
	messagingSenderId: '662540311918'
});

/**
 * @ngInject
 */
function GroupService() {

	var GroupService = {
		getAll: getAll
	};

	return GroupService;

	//////////

	/**
	 * Get all groups from Firebase
	 *
	 * @return {Promise}
	 */
	function getAll() {
		// Filter out invalid names
		var query = firebase.database().ref('Groups').orderByChild('Name').startAt('A');

		return query.once('value')
			.then(function(snapshot) {
				var groups = [];

				// Read Firebase Array into Javascript Array
				snapshot.forEach(function(childSnapshot) {
					groups.push(childSnapshot.val());
				});

				return groups;
			});
	}
}
