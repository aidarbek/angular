var App = angular.module('App', []);
App.controller('User', ['$scope', function ($scope) {
	$scope.Users = [
		{
			name: "Aidarbek",
			surname: "Suleimenov",
			mail: "aidarbek98@gmail.com",
			editing: false,

		}
	];
	$scope.userCreation = {};
	$scope.err = false;
	$scope.Add = function()
	{
		$('#userField').modal('show');
		//$scope.Users.push({name: "Vasya", surname: "Pupkin", mail: "trololo@mail.ru", editing: false});
	}
	$scope.AddToArray = function()
	{
		if($scope.userCreation.name && $scope.userCreation.surname && $scope.userCreation.mail)
		{	
			$scope.err = false;
			tmp = angular.copy($scope.userCreation);
			$scope.Users.push(tmp);
			$scope.userCreation = {};
			$('#userField').modal('hide');
		}
		else
		{
			$scope.err = true;
		}
	}
	$scope.Delete = function(index)
	{
		$("#id-"+index).fadeOut('slow', function(){
			$scope.Users.splice(index, 1);
		});
	}
	$scope.Edit = function(index)
	{
		$scope.Users[index].editing = true;
	}
	$scope.Save = function(index)
	{
		$scope.Users[index].editing = false;
	}
}]);