angular.module( 'Todo', ['js-data'])

.service('Todo', function( DS ) {
  
  return DS.defineResource({
    name: 'todos',
    relations: {},
    computed: {}
  });
})
;