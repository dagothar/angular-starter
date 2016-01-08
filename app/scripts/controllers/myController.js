define(['angular'], function(angular) {
	return angular.module('MyController', [])
		.controller('MyController', ['$scope', function($scope) {
			$scope.hello = 'Hi!';
		}]);
});
