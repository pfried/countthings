(function() {
  'use strict';

  angular
    .module('countthings')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('count', {
        url: '/count',
        templateUrl: 'app/count/count.html',
        controller: 'CountController',
        controllerAs: 'count'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
