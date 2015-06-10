;
(function() {

  'use strict';

  angular.module('myapp', [ 'ui.router']);

  angular.module('myapp').run(InitApplication);

  InitApplication.$inject = [ '$rootScope', '$state', '$stateParams', '$location' ];
  function InitApplication($rootScope, $state, $stateParams, $location) {

  }
  ;

})();
