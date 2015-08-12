angular.module( 'taemon', [
  'templates-app',
  'templates-common',
  'taemon.landingpage',
  'taemon.home',
  'ui.router',
  'js-data'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, DSFirebaseAdapterProvider ) {
  $urlRouterProvider.otherwise( '/' );
  var basePath = 'https://taemon.firebaseio.com';
  DSFirebaseAdapterProvider.defaults.basePath = basePath;
  
})

.run( function run ( DS, DSFirebaseAdapter ) {
//  DS.registerAdapter('http',DSHttpAdapter, {});
  DS.registerAdapter('firebase', DSFirebaseAdapter, { 'default': true });
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | taemon' ;
    }
  });
})

;

