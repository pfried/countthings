(function () {
  'use strict';

  angular
    .module('countthings')
    .directive('thingsCounter', thingsCounter);

  /** @ngInject */
  function thingsCounter() {

    var directive = {
      restrict : 'E',
      template : '<div class="thingscounter"></div>',
      scope : {
        things : '=',
        currentCategory : '=',
        image : '='
      },
      link : link
    };

    return directive;

    function link(scope, elem) {

      var el = elem[0].querySelector('.thingscounter');

      var width = el.offsetWidth, height = el.offsetHeight;

      var svg = d3.select(el)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

      var container = svg.append("g");

      var node = svg.append("g")
        .attr("class", "node")
        .selectAll("circle");

      function updateGraph() {
        node = node.data(scope.currentCategory.points).enter().append("circle")
          .attr("r", 10)
          .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; })
      }

      scope.$watch('image', function(image) {
        if(image) {

          d3.selectAll('image').remove();

          container.append('image')
            .attr('width', width)
            .attr('height', height)
            .attr('xlink:href', image.data);
        }
      }, true);

      function addCount(x, y) {
        scope.$apply(function() {
          scope.currentCategory.points.push({
            x : x,
            y : y
          });
        });
      }

      svg.on('click', function() {
        var coord = d3.mouse(this);
        addCount(coord[0], coord[1]);
        updateGraph()
      });

      //var color = d3.scale.category10();

    }
  }

})();
