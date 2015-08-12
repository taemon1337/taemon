angular.module( 'Feat', ['js-data'])

.service('Feat', function( DS ) {
  
  return DS.defineResource({
    name: 'feats',
    relations: {},
    computed: {}
  });
})
;