var routeApp = angular.module('routeApp', [
  'ngRoute',
  'App'
]);

routeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/register', {
        templateUrl: 'register.html',
        controller: 'Register'
      }).
      when('/user', {
        templateUrl: 'user.html',
        controller: 'User'
      }).
      otherwise({
        redirectTo: '/user'
      });
  }]);
