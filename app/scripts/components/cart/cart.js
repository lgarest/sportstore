'use strict';

angular.module('cart', [])
    .factory('cart', function () {
        var cartData = [];
    
        return {
            // Adds the specified product to the cart or increments its #
            addProduct: function (id, name, price) {
                var addedToExistingItem = false;
                for (var i = 0; i < cartData.length; i++) {
                    if (cartData[i].id === id) {
                        cartData[i].count++;
                        addedToExistingItem = true;
                        break;
                    }
                }
                if (!addedToExistingItem) {
                    cartData.push({
                        count: 1, id: id, price: price, name: name
                    });
                }
            },

            // Removes a product with the specified ID
            removeProduct: function (id) {
                for (var i = 0; i < cartData.length; i++) {
                    if (cartData[i].id === id) {
                        cartData.splice(i, 1);
                        break;
                    }
                }
            },

            // Returns the array of objects in the cart
            getProducts: function () {
                return cartData;
            }
        };
    })
    .directive('cartSummary', function (cart) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/cart/cartSummary.html',
            controller: function ($scope){

                var cartData = cart.getProducts();
                
                $scope.total = function () {
                    var total = 0;
                    for (var i = 0; i < cartData.length; i++) {
                        total += (cartData[i].price * cartData[i].count);
                    }
                    return total;
                };

                $scope.itemCount = function () {
                    var total = 0;
                    for (var i = 0; i < cartData.length; i++) {
                        total += cartData[i].count;
                    }
                    return total;
                };
            }
        };
    });
