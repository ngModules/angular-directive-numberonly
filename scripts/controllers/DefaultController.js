;(function() {
  'use strict';
  
  angular.module('myapp').controller('DefaultController', DefaultController);
  
  DefaultController.$inject = [];
  function DefaultController() {
    console.log('start this');
  }
  
  
})();