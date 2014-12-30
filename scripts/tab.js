//angular.module('Tabbination',['Authentication'])

function tabController($scope,AuthenticationService) {

	$scope.sessionUser=AuthenticationService.getCurrentUser();
	$scope.manage = false;
	$scope.hoverIn = function(){
	console.log('coming inside manage');
    $scope.hoverEdit = true;
    };

    $scope.hoverOut = function(){
        $scope.hoverEdit = false;
    };
	
  $scope.manage = true;
  $scope.admin = false;
  $scope.other = false;
  $scope.error =false;
  $scope.coachpart = true;
  $scope.showmanage = function(){
	  
    $scope.manage = true; 
	$scope.admin = false;
	$scope.other = false;
	$scope.mancoach = false;
	 $scope.coachpart = true;
		
  };
  $scope.showadmin = function(){
    $scope.admin = true; 
	$scope.editpart =false;
	$scope.manage = false;
	$scope.other = false;
	$scope.userpart =false;
	$scope.adpart = true;
	$scope.addadminuser = function(){
	 $scope.userpart = true;
	 $scope.adpart = false;
	};
		$scope.edituser = function(){
		 $scope.userpart = false;
		 $scope.adpart = false;
		 $scope.editpart = true;
		 
		};
			
  };
  $scope.showother = function(){
    $scope.other = true; 
	$scope.manage = false;
	$scope.admin = false;	
  };
  $scope.addmanuser = function(){
			console.log('add user');
	 $scope.mancoach = true;
	 $scope.coachpart = false;
	};
};