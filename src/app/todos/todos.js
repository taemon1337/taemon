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
  $scope.Todo = Todo;
  
  Todo.findAll();
  Todo.bindAll({}, $scope, 'todos');
  
  $scope.submit = function(todo) {
    if(Todo.lastSaved(todo.id)) {
      Todo.update(todo.id, { name: todo.name, complete: todo.complete });
    } else {
      Todo.create(todo).then(function() { $scope.newTodo = {}; });
    }
  };
  
  $scope.add = function (todo) {
    return Todo.create(todo).then(function() {
      $scope.newTodo = {};
    });
  };

  $scope.remove = function (todo) {
    return Todo.destroy(todo.id);
  };
  
  $scope.hoverIn = function() {
    this.hovering = true;
  };
  
  $scope.hoverOut = function() {
    this.hovering = false;
  };
  
})

;