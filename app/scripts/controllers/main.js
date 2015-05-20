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
  .constant('orderUrl', 'http://localhost:5500/orders')
  .controller('MainCtrl', function ($scope, $http, dataUrl, orderUrl, cart, $location) {

    console.log('MainCtrl loaded');

    $scope.data = {};

    // API call to retrieve products data
    $http.get(dataUrl)
        .success(function (data) {
            $scope.data.products = data;
        })
        .error(function (error) {
            $scope.data.error = error;
        });

    // API call to proceed with the purchase
    $scope.sendOrder = function (shippingDetails) {
        var order = angular.copy(shippingDetails);
        order.products = cart.getProducts();
        $http.post(orderUrl, order)
            .success(function (data) {
                $scope.data.orderId = data.id;
                cart.getProducts().length = 0;
            })
            .error(function (error) {
                $scope.data.orderError = error;
            })
            .finally(function () {
                $location.path('/complete');
            });
    };

  });
