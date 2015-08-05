'use strict';

/**
 * @ngdoc overview
 * @name sportsStoreAdmin
 * @description
 * # sportsStoreAdmin
 *
 * Main module of the admin application.
 */
angular
  .module('sportsStoreAdmin', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: '/views/adminLogin.html'
    });

    $routeProvider.when('/main', {
        templateUrl: '/views/adminMain.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/login'
    });
  });
