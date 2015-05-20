'use strict';

describe('Controller: ProductslistCtrl', function () {

  // load the controller's module
  beforeEach(module('sportstoreApp'));

  var ProductslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductslistCtrl = $controller('ProductslistCtrl', {
      $scope: scope
    });
  }));

});
