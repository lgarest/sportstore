'use strict';

/**
 * @ngdoc overview
 * @name sportstoreApp
 * @description
 * # sportstoreApp
 *
 * Main module of the application.
 */
angular
  .module('sportstoreApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
