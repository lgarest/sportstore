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
    'customFilters',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
