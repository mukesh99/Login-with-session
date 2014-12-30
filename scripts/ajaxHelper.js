'use strict';

angular.module('ajaxFactory').factory('ajaxFactory',function($http) 
{
	var ajaxFactory={};
ajaxFactory.makeAjaxCall=function(url,method,data,successCallback,errorCallback){
			var responsePromise=$http({
				url:'data/users.json',
				method:'get',
				data:""
			});
			responsePromise.success(function(data)
			{
			   var response={success:'admin'===data.userName && '1234'===data.pass};
			   response.message="success";
						successCallback(response);
			}).error(function(){
				response.message = 'Username or password is incorrect';
				errorCallback(response);
			});
		return responsePromise;
};
return ajaxFactory;
	});
