'use strict';

/**
 * @ngdoc function
 * @name sportstoreApp.controller:ProductslistCtrl
 * @description
 * # ProductslistCtrl
 * Controller of the sportstoreApp
 */
angular.module('sportstoreApp')
  .constant('productListActiveClass', 'btn-primary')
  .constant('productListPageCount', 3)
  .controller('ProductslistCtrl', function ($scope, $filter, productListActiveClass, productListPageCount) {
        console.log('ProductslistCtrl loaded');
    
        var selectedCategory;

        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;

        /**
         * Sets the new category
         * @param  {String} category name of the category
         */
        $scope.selectCategory = function (category) {
            selectedCategory = category;
            $scope.selectedPage = 1;
        };

        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        };

        /**
         * Filters by selected category
         * @param  {object} product object
         * @return {boolean}         true if matches the selectedCategory
         */
        $scope.categoryFilterFn = function (product) {
            return angular.isUndefined(selectedCategory) || 
            product.category === selectedCategory;
        };

        $scope.getCategoryClass = function(category){
            // productListActiveClass if 1, otherwise returns empty string
            return selectedCategory === category ? productListActiveClass : '';
        };

        $scope.getPageClass = function (page) {
            return $scope.selectedPage === page ? productListActiveClass : '';
        };

  });
