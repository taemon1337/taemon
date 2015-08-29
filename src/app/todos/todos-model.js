angular.module( 'Todo', ['js-data'])

.service('Todo', function( DS, $rootScope ) {
  
  return DS.defineResource({
    name: "users/todos/" + $rootScope.current_user.uid,
    relations: {},
    computed: {}
  });
})
;