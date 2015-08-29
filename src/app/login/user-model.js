angular.module( 'UserProfile', ['js-data'])

.service('UserProfile', function( DS ) {
  
  return DS.defineResource({
    name: 'users/profiles',
    relations: {},
    computed: {}
  });
})
;