angular.module('coachApp', [])
.controller('coachCtrl', ['$scope', function ($scope) {
console.log('i am inside');
    $scope.newtabs = [{
            title: 'One',
            id: 'one'
        }, {
            title: 'Two',
            id: 'two'
        }, {
            title: 'Three',
            id: 'three'
    }];

    $scope.currentTab = 'one';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.id;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}]);