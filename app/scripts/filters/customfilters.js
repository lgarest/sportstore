'use strict';

/**
 * @ngdoc filter
 * @name sportstoreApp.filter:customFilters
 * @function
 * @description
 * # customFilters
 * Filter in the sportstoreApp.
 */
angular.module('customFilters', [])
  .filter('unique', function () {
    return function (data, propertyName) {
        console.log('customFilters - unique');
        if (angular.isArray(data) && angular.isString(propertyName)) {
            console.log(data);
            console.log(propertyName);
            var results = [];
            var keys = {};
            for (var i = 0; i < data.length; i++) {
                var val = data[i][propertyName];
                if (angular.isUndefined(keys[val])) {
                    keys[val] = true;
                    results.push(val);
                }
            }
            return results;
        } else{
            return data;
        }
    };
  });
