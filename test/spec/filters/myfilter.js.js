'use strict';

describe('Filter: myFilter.js', function () {

  // load the filter's module
  beforeEach(module('sportstoreApp'));

  // initialize a new instance of the filter before each test
  var myFilter.js;
  beforeEach(inject(function ($filter) {
    myFilter.js = $filter('myFilter.js');
  }));

  it('should return the input prefixed with "myFilter.js filter:"', function () {
    var text = 'angularjs';
    expect(myFilter.js(text)).toBe('myFilter.js filter: ' + text);
  });

});
