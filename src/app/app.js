angular.module( 'taemon', [
  'templates-app',
  'templates-common',
  'taemon.landingpage',
  'taemon.home',
  'ui.router',
  'js-data'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, DSHttpAdapterProvider ) {
  DSHttpAdapterProvider.defaults.basePath = "/taemon"; // set base path for entire app
  $urlRouterProvider.otherwise( '/' );
})

.run( function run ( DS, DSHttpAdapter) {
  DS.registerAdapter('http',DSHttpAdapter, {});
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | taemon' ;
    }
  });
})

;

