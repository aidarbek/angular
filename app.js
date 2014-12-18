/*
	Comment reference:
		BE - BackEnd
*/

var App = angular.module('App', ['ui.select']);
function AddUser($scope, roles)
{
	//console.log(roles);
	var url = ""; // we send POST request to
					  // register new users to this URL
					  // response should be in JSON
					  //  and also contain a user ID in addition
					  // to general user information(except password)
		if($scope.userCreation.login && $scope.userCreation.full && $scope.userCreation.mail
			&& $scope.userCreation.password && $scope.userCreation.passwordConfirm && $scope.userCreation.role
			|| $scope.isAdmin == true)
		{
			// If fields are not empty	
			if($scope.userCreation.password == $scope.userCreation.passwordConfirm)
			{
				//$scope.userCreation.role = [];
				//console.log($scope.userCreation);
				//If password is confirmed
				$scope.err = false;//There is no error
				//tmp = angular.copy($scope.userCreation);
				//tmp.editing = false;
				//Next line should be commented, till the BE is available 
				/*
					$http.post(url, tmp).success(function(data){
						$scope.Users.push(tmp);
						$scope.userCreation = {};
						$('#userField').modal('hide');
					}).error(function(data, status){
						err = status + " error";
					});
				*/
				//Delete next 3 lines, when BE available
				//tmp.user_id = 1;
				//console.log("HUI!");
				//console.log($scope.userCreation);
				for(var i = 0; i < roles.length; i++)
				{
					$scope.roles.push(roles[i]);
				}
				$scope.Users.push($scope.userCreation);
				//console.log($scope.Users[$scope.Users.length - 1]);
				$scope.Users[$scope.Users.length - 1].role = angular.copy($scope.userCreation.role);
				//$scope.userCreation = {role: []};
				//console.log($scope.Users);
				$scope.userCreation = {role: []};
				//$('#role_input .ng-binding').html("");
				$('#role_input input').val("");//Clear the role input field
			}
			else
			{
				$scope.err = "Passwords are not equal!";
			}
		}
		else
		{
			$scope.err = "You should fill all fields!";
		}
}
App.factory('Users', function () {
	return [{login: "aidarbek", full: "aidarbek", mail: "a@mail.com", role:['admin', 'mentor'],editing: false}];// Binds Users list between Controllers
});

App.controller('User', ['$scope','Users' , '$http', function ($scope, Users, $http) {
	$scope.Users = Users;
	$scope.userCreation = {};
	$scope.err = false;
	$scope.isAdmin = true;
	$scope.registring = false;
	$scope.roles = ['student', 'mentor', 'admin'];
	$scope.Add = function()
	{
		$scope.registring = true;
	}
	$scope.AddToArray = function()
	{
		AddUser($scope, $scope.userCreation.role);
		$scope.registring = false;
	}
	$scope.Delete = function(index)
	{
		var url = "";
		//We send a GET request on this URL, in which we say that 
		//we want to delete a user with specific ID
		// Should be commented till BE is not available
		/*
			$http.get(url).success(function(data){	
				$("#id-"+index).fadeOut('slow', function(){
					$scope.Users.splice(index, 1);
				});
			});
		*/
		// Delete next lines when BE is available
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
		var url = "";
		//We send a POST request here, which contain new information about 
		// user with specific ID, which is described in $scopeUsers[index]
		//Should be commented till BE is not available
		/*
			$http.post(url, $scope.Users[index]).success(function(data){
				$scope.Users[index].editing = false;
			});
		*/
		for(var i = 0; i < Users[index].role.length; i++)
		{
			if($scope.roles.indexOf($scope.Users[index].role[i]) == -1)
			{
				$scope.roles.push($scope.Users[index].role[i]);
			}
		}
		$scope.Users[index].editing = false;
		$('#role-'+index + ' input').val("");//Clear the fole input field 
	}
}]);