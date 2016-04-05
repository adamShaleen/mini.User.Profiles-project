// declaring the controller
angular.module('userProfiles').controller('MainController', function($scope, mainService) {

// gathers data and prepares it to be sent to the view.
$scope.getUsers = function() {
    $scope.users = mainService.getUsers();
};

// invoke function
$scope.getUsers();

});  // closing controller function tag
