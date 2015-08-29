angular.module( 'ModMan', ['js-data'])

.service('ModMan', function( DS ) {
  
  return DS.defineResource({
    name: 'modmans',
    relations: {},
    computed: {}
  });
})
;