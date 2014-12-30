'use strict';

angular.module('uuidFactory').factory('uuidFactory', function() 
{
	var s4=function()
	{
		 return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
	};
		return {
			UUID:function() {
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
		}
		};
	
	});
