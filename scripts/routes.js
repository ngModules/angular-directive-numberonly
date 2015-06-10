;
(function() {

  'use strict';

  angular.module('myapp').config(
    [ '$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {

      $locationProvider.html5Mode(true).hashPrefix('!');

      $urlRouterProvider.otherwise("/");

      $stateProvider.state('Default', {
        url : '/',
        templateUrl : 'views/default.html',
        controller : 'DefaultController',
        controllerAs : 'DefaultCtrl'
      });
      
    } ]);

})();
