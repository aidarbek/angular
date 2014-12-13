App.controller('Register', ['$scope', 'Users', function ($scope, Users) {
	$scope.userCreation = {};
	$scope.err = false;
	$scope.Users = Users;
	$scope.Register = function(){
		$scope.userCreation.role = "newuser";
		AddUser($scope);
	}
}]);