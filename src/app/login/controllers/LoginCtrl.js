'use strict';

module.exports = LoginCtrl;

/**
 * @ngInject
 */
function LoginCtrl($state, UserService) {
    var vm = this;

    /**
     * User login
     */
    vm.login = function () {
    	// Send sign up request
    	UserService.login({username: vm.username, password: vm.password})
    		.then(function(user) {
    			console.log('User authenticated successfully!');
    			$state.go('dashboard');
    		})
    		.catch(function(err) {
                vm.errorMessage = err.message;
    			console.log('User authentication failed - ', err.message);
    		});
    }
}

