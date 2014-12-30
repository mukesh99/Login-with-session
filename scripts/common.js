'use strict';

angular.module('ajaxFactory').factory('ajaxFactory',function(){
makeAjaxCall=function(url,method,data){

var responsePromise =$http(
			{
				url:'data/users.json',
				method:'get',
				data:""
			});
			
responsePromise.success=function(data, status, headers, config)
{
	 return data;
}

responsePromise.error=function(data, status, headers, config){
	alert('call failed');
}

return responsePromise;

};

});