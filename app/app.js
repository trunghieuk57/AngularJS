'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home'          //newly added home module
]).
config(['$routeProvider', function($routeProvider) {
  //Set default view of our app to home

  $routeProvider.otherwise({
    redirectTo: '/home'
  });
}]);
