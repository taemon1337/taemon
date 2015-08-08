angular.module( 'taemon.todos', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'taemon.TodoFactory'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'todos', {
      parent: 'home',
      url: '/todos',
      views: {
        "main@": {
          controller: 'TodosCtrl',
          templateUrl: 'todos/todos.tpl.html'
        }
      },
      data:{ pageTitle: 'Tasks' }
    })
  ;
})

.controller( 'TodosCtrl', function TodosCtrl( $scope, TodoFactory ) {

  $scope.newTodo = TodoFactory.add();
  
  $scope.todos = TodoFactory.load();
  
  $scope.update = function(todo) {
    TodoFactory.update(todo);
    this.editing = false;
  };
  
  $scope.hoverIn = function() {
    this.hovering = true;
  };
  
  $scope.hoverOut = function() {
    this.hovering = false;
  };
  
})

;