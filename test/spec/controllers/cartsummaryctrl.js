'use strict';

describe('Controller: cartSummaryCtrl', function () {

  // load the controller's module
  beforeEach(module('sportstoreApp'));

  var cartSummaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    cartSummaryCtrl = $controller('cartSummaryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
