angular.module( 'TodoManager', ['Rest'])

.factory('TodoManager', function( Rest ) {
  var TodoManager = Rest.all('todos');
  
  return TodoManager;
})
;