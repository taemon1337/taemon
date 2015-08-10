angular.module( 'taemon.todos', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'Todo'
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

.controller( 'TodosCtrl', function TodosCtrl( $scope, Todo ) {

  $scope.newTodo = {};
  $scope.todos = [];
  
  Todo.findAll();
  Todo.bindAll({}, $scope, 'todos');
  
  $scope.hoverIn = function() {
    this.hovering = true;
  };
  
  $scope.hoverOut = function() {
    this.hovering = false;
  };
  
})

;