(function () {
  'use strict';

  angular
    .module('countthings')
    .directive('imageDrop', imageDrop);

  /** @ngInject */
  function imageDrop() {

    var directive = {
      restrict : 'A',
      scope : {
        'onFile' : '&'
      },
      link : link
    };

    function link(scope, element) {

      // Access the original html element, since the ng-element will somehow filter the events and remove props
      var el = element[0];
      var file;

      // Callback when the file is read
      function onFileRead(event) {
        var data = event.target.result;

        scope.onFile({
          'file' : {
            'filename' : file.name,
            'data' : data
          }
        });
      }

      var reader = new FileReader();
      reader.onload = onFileRead;

      function handleDrop(evt) {
        evt.stopPropagation();
        evt.preventDefault();

        var files = evt.dataTransfer.files;

        // Grab only the first file in the list
        file = files[0];
        reader.readAsDataURL(file);
      }

      // We need to cancel the dragover event, otherwise there will be no drop event
      el.addEventListener('dragover', function handleDragOver(event) {

        if (event != null) {
          event.stopPropagation();
          event.preventDefault();
          event.dataTransfer.dropEffect = 'copy';
        }

      });

      el.addEventListener('drop', handleDrop);

    }

    return directive;

  }

})();
