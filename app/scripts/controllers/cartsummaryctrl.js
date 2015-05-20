'use strict';

/**
 * @ngdoc function
 * @name sportstoreApp.controller:CartsummarycontrollerCtrl
 * @description
 * # CartsummarycontrollerCtrl
 * Controller of the sportstoreApp
 */
angular.module('sportstoreApp')
  .controller('cartSummaryCtrl', function ($scope, cart) {
    console.log('cartSummaryCtrl loaded');

    $scope.cartData = cart.getProducts();
    console.log($scope.cartData);

    $scope.total = function () {
        var total = 0;
        for (var i = 0; i < $scope.cartData.length; i++) {
            total += ($scope.cartData[i].price * $scope.cartData[i].count);
        }
        return total;
    };

    $scope.remove = function (id) {
        cart.removeProduct(id);
    };
  });
