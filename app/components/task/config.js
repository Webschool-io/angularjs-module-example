(function() {

  angular.module('myApp.task.config', []).config(['$routeProvider', TaskConfig]);

  function TaskConfig($routeProvider) {
    $routeProvider.when('/tasks', {
      templateUrl: 'components/task/views/list.html',
      controller: 'TaskListController'
    });
  }

})();