angular.module( 'Blog', ['js-data'])

.service('Blog', function( DS, $rootScope ) {
  
  return DS.defineResource({
    name: "users/blogs/" + $rootScope.current_user.uid,
    relations: {},
    computed: {}
  });
})
;