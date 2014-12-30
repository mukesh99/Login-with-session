'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);
angular.module('uuidFactory',[]);
angular.module('ajaxFactory',[]);
angular.module('Base64Factory',[]);
angular.module('BasicHttpAuthExample', [
    'Authentication',
    'Home',
    'ngRoute',
    'ngCookies',
	'uuidFactory',
	'ajaxFactory',
	'Base64Factory'
])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/authentication/views/login.html'
        })

        .when('/', {
            controller: '',
            templateUrl: 'modules/home/views/admin-homapage.html'
        })

        .otherwise({ redirectTo: '/login' });
}])
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);