(function(){
  angular.module('myApp.task.controllers', [])
  .controller('TaskListController', TaskListController);

  function TaskListController ($scope) {
    $scope.tasks = [
      {name: 'Task 1'},
      {name: 'Task 2'},
      {name: 'Task 3'},
    ];
  }
}());