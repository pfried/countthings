(function() {
  'use strict';

  angular
    .module('countthings')
    .controller('CountController', CountController);

  /** @ngInject */
  function CountController($scope) {

    var count = this;

    count.things = [];

    count.currentCategory = {
      name : 'things',
      points : []
    };

    count.things.push(count.currentCategory);

    count.onNewFile = function(image) {
      $scope.$apply(function() {
        count.image = image;
      });
    }

  }
})();
