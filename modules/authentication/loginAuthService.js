'use strict';
angular.module('Authentication')
.factory('AuthenticationService',
    ['$http','$cookieStore','$rootScope', '$timeout','ajaxFactory','uuidFactory','baseFactory',
    function ($http,$cookieStore,$rootScope, $timeout,ajaxFactory,uuidFactory,baseFactory) {
        var service = {};
        service.Login = function (username, password, callback) {	
		//var x=ajaxFactory.makeAjaxCall('data/users.json','get','vikash',function(success){alert(success);},function(error){alert(success)});
		$http(
			{
				url:'data/users.json',
				method:'get',
				data:"",
				headers: {'login_token': uuidFactory.UUID()}
			}).success(function(data){
						var response={success:username===data.userName && password===data.pass};
						if (!response.success) {
							response.message = 'Username or password is incorrect';
						}
						$cookieStore.put('sessionUser', username);
						callback(response);
				});
			};
			service.getCurrentUser=function(){
				var sessionUser= $cookieStore.get('sessionUser');
				return sessionUser;
			}
        service.SetCredentials = function (username, password) {
		//base64Factory is used for encoding username and password
            var authdata = baseFactory.encode(username + ':' + password);
            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authdata: authdata
                }
            };
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);
        };
        service.ClearCredentials = function () {
            $rootScope.globals = {};
			$cookieStore.remove('currentUser');
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };

        return service;
    }]);