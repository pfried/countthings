(function() {
  'use strict';

  angular
    .module('countthings')
    .config(config);

  /** @ngInject */
  function config($translateProvider) {
    // TODO Move to own translation file
    $translateProvider.translations('de', {
      'main' : {
        'title' : 'Welcome to countthings.com'
      },
      'count' : {
        'title' : 'Count your things',
        'thing' : 'Thing',
        'count' : 'count'
      }
    });

    $translateProvider.preferredLanguage('de');

    $translateProvider.useSanitizeValueStrategy('sanitize');
  }

})();

