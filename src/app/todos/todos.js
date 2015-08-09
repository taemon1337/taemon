angular.module( 'taemon.todos', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'Api'
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

.controller( 'TodosCtrl', function TodosCtrl( $scope, Api ) {

  window.scope = $scope;

  $scope.newTodo = {};
  
  $scope.todos = Api.all('todos').getList().$object;
  
  $scope.hoverIn = function() {
    this.hovering = true;
  };
  
  $scope.hoverOut = function() {
    this.hovering = false;
  };
  
})

;