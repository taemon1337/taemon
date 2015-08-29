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

.controller( 'TodosCtrl', function TodosCtrl( $scope, $rootScope, Todo ) {

  $scope.getNewTodo = function(attrs) { 
    return angular.extend({
      name: '', 
      owner: $rootScope.current_user.uid, 
      complete: false, 
      created_at: Firebase.ServerValue.TIMESTAMP 
    }, attrs);
  };
  $scope.newTodo = $scope.getNewTodo({});
  //$scope.todos = [];
  
  Todo.findAll();
  Todo.bindAll({}, $scope, 'todos');
  
  $scope.submit = function(todo) {
    if(todo.id) {
      Todo.update(todo.id, { name: todo.name, complete: todo.complete });
    } else {
      Todo.create(angular.copy(todo)).then(
        function() { $scope.newTodo = $scope.getNewTodo({}); },
        function(err) { console.error('ERROR CREATING TODO: ', err); }
      );
    }
    $scope.newTodo = $scope.getNewTodo({});
  };
  
  $scope.add = function (todo) {
    return Todo.create(todo).then(function() {
      $scope.newTodo = $scope.getNewTodo({});
    });
  };
  
  $scope.complete = function(todo) {
    Todo.update(todo.id, { complete: !todo.complete });
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