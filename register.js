App.controller('Register', ['$scope', 'Users', function ($scope, Users) {
	$scope.userCreation = {};
	$scope.err = false;
	$scope.Users = Users;
	$scope.isAdmin = false;
	$scope.Register = function(){
		$scope.userCreation.role = "newuser";
		AddUser($scope);
	}
}]);