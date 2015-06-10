;
(function() {
  'use strict';

  angular.module('inputFormatters', []);
  angular.module('inputFormatters').directive('numbersOnly', function() {

    return {
      restrict : 'A',
      require : 'ngModel',
      link : function(scope, element, attr, modelCtrl) {

        modelCtrl.$parsers.push(function(inputValue) {

          if (inputValue == undefined)
            return '';

          var transformedInput = inputValue.replace(/[^0-9]/g, '');

          if (transformedInput != inputValue) {

            modelCtrl.$setViewValue(transformedInput);
            modelCtrl.$render();

          }

          return transformedInput;
        });
      }
    };
  });
})();
