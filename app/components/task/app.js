(function(){
  'use strict';

  angular.module('myApp.task', [
    'ngRoute',
    'myApp.task.config',
    'myApp.task.controllers']);


  // Mudar para o config.js
  angular.module('myApp.task.config', []);

  angular.module('myApp.task.config')
  .config(['$routeProvider', TaskConfig]);

  TaskConfig.$inject = ['$routeProviderx'];

  function TaskConfig ($routeProvider) {
    $routeProvider.when('/tasks', {
      templateUrl: 'components/task/views/list.html',
      controller: 'TaskListController'
    });
  }


}());


