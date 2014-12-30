'use strict';

angular.module('Authentication')

.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
	$scope.$errorMessage="true";
	$scope.msgtxt='';
	$scope.flag=false;
	$scope.user={};
        // reset login status
        AuthenticationService.ClearCredentials();
        $scope.login = function (user) {
            AuthenticationService.Login(user.mail, user.pass, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(user.mail,user.pass);
                   $location.path('/');
                } else {
                    $scope.error = response.message;
					$scope.flag=true;
                }
            });
        };
    }]);