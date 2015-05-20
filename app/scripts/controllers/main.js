'use strict';

/**
 * @ngdoc function
 * @name sportstoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sportstoreApp
 */
angular.module('sportstoreApp')
  .constant('dataUrl', 'http://localhost:5500/products')
  .controller('MainCtrl', function ($scope, $http, dataUrl) {

    console.log('MainCtrl loaded');

    $scope.topLinks = [
        { name: 'Home', ref: '#/' },
        { name: 'Contact', ref: '#/Contact' },
    ];

    $scope.data = {};
    // API call to retrieve products data
    $http.get(dataUrl)
    .success(function (data) {
        $scope.data.products = data;
    })
    .error(function (error) {
        $scope.data.error = error;
    });
  });
