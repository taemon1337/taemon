angular.module( 'Api', ['restangular'])

.factory('Api', function( Restangular ) {

  Restangular.setBaseUrl('/taemon');

  return Restangular;
})
;