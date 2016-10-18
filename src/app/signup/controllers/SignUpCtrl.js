'use strict';

module.exports = SignUpCtrl;

/**
 * @ngInject
 */
function SignUpCtrl($state, UserService) {
	var vm = this;

	/**
	 * User sign up
	 */
	vm.signUp = function() {
		// Validate input
		// TODO: Should implement more robust solution, probably using 3rd party libraries
		if (vm.password !== vm.passwordConfirm) {
			vm.errorMessage = 'Passwords must match.';
			return;
		} else {
			vm.errorMessage = '';
		}

		// Send sign up request
		UserService.create({username: vm.username, password: vm.password})
			.then(function() {
				console.log('User created successfully!');
				// Go to dashboard
				$state.go('dashboard');
			})
			.catch(function(err) {
				console.log('User creation failed - ', err.message);
			});
	};
}

