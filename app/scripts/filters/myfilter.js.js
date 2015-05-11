'use strict';

/**
 * @ngdoc filter
 * @name sportstoreApp.filter:myFilter.js
 * @function
 * @description
 * # myFilter.js
 * Filter in the sportstoreApp.
 */
angular.module('sportstoreApp')
  .filter('myFilter.js', function () {
    return function (input) {
      return 'myFilter.js filter: ' + input;
    };
  });
