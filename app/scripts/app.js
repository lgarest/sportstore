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
    'cart',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider.when('/checkout', {
        templateUrl: 'views/checkoutSummary.html'
      });
    $routeProvider.when('/products', {
        templateUrl: 'views/productList.html'
      });
    $routeProvider.when('/complete', {
        templateUrl: 'views/thankYou.html'
      });
    $routeProvider.when('/placeorder', {
        templateUrl: 'views/placeOrder.html'
      });
    $routeProvider.otherwise({
        redirectTo: '/products'
      });
  });
