'use strict';

module.exports = DashboardCtrl;

/**
 * @ngInject
 */
function DashboardCtrl($scope, $state, $cookies, GroupService) {
	var vm = this;

	function init() {
		// TODO: Should implement proper solution, such as interceptor
		if ($cookies.get('token') !== 'ok') {
			$state.go('home');
		}

		// Read group data from Firebase
		GroupService.getAll()
			.then(function(groups) {
				// Display data
				$scope.$apply(function() {
					vm.groupData = groups;
				});
			});
	}

	init();
}

