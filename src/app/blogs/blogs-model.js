angular.module( 'Blog', ['js-data'])

.service('Blog', function( DS ) {
  
  return DS.defineResource({
    name: 'blogs',
    relations: {},
    computed: {}
  });
})
;