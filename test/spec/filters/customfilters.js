'use strict';

describe('Filter: customFilters', function () {

  // load the filter's module
  beforeEach(module('sportstoreApp'));

  // initialize a new instance of the filter before each test
  var customFilters;
  beforeEach(inject(function ($filter) {
    customFilters = $filter('customFilters');
  }));

  it('should return the input prefixed with "customFilters filter:"', function () {
    var text = 'angularjs';
    expect(customFilters(text)).toBe('customFilters filter: ' + text);
  });

});
