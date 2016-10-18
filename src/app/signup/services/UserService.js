'use strict';

module.exports = UserService;

/**
 * @ngInject
 */
function UserService($cookies, $q) {
    var UserService = {
        create: create,
        login: login,
        logout: logout
    };

    return UserService;

    //////////

    /**
     * Create a new user
     *
     * @param  {Object}		user		- user info
     * @param  {Function}	callback	- optional, function(error, user)
     * @return {Promise}
     */
    function create(user, callback) {
    	// TODO: Should call actual API
    	console.debug('Creating a user');
    	// Save token
    	$cookies.put('token', 'ok');
    	safeCb(callback)(null, {});
    	return $q.resolve();
    }

    /**
     * Authenticate user and save token
     *
     * @param  {Object}		user		- login info
     * @param  {Function}	callback	- optional, function(error, user)
     * @return {Promise}
     */
    function login(user, callback) {
    	// TODO: Should call actual API
    	console.debug('Authenticating a user');

    	// Check user credentials
    	if (user.username === 'bookbottles' && user.password === 'showcase') {
    		$cookies.put('token', 'ok');
    		safeCb(callback)(null, {});
    		return $q.resolve();
    	} else {
    		// Mocked error message
    		var err = { message: 'Invalid Username/Password.' };

    		logout();
			safeCb(callback)(err);
    		return $q.reject(err);
    	}
    }

    /**
     * Delete access token and log user out
     */
    function logout() {
    	$cookies.remove('token');
    }

    /**
     * Make sure valid callback function is called
     *
     * @param  {Function|*}	cb - function
     * @return {Function}
     */
    function safeCb(cb) {
    	return angular.isFunction(cb) ? cb : angular.noop;
    }
}

