angular.module( 'taemon', [
  'templates-app',
  'templates-common',
  'taemon.landingpage',
  'taemon.home',
  'taemon.login',
  'ui.router',
  'js-data'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, DSFirebaseAdapterProvider ) {
  $urlRouterProvider.otherwise( '/' );
  var basePath = 'https://taemon.firebaseio.com/';
  DSFirebaseAdapterProvider.defaults.basePath = basePath;
  
})

.run( function run ( $rootScope, $location, $state, DS, DSFirebaseAdapter ) {
//  DS.registerAdapter('http',DSHttpAdapter, {});
  DS.registerAdapter('firebase', DSFirebaseAdapter, { 'default': true });
  
  
  // Activate a mostly auto-sync with Firebase
  // The only thing missing is auto-sync TO Firebase
  // This will be easier with js-data 2.x, but right
  // now you still have to do DS.update('user', 1, { foo: 'bar' }), etc.
  angular.forEach(DS.definitions, function (Resource) {
    var ref = DSFirebaseAdapter.ref.child(Resource.endpoint);
    // Inject items into the store when they're added to Firebase
    // Update items in the store when they're modified in Firebase
    ref.on('child_changed', function (dataSnapshot) {
      console.log('child changed');
      var data = dataSnapshot.val();
      if (data[Resource.idAttribute]) {
        Resource.inject(data);
      }
    });
    // Eject items from the store when they're removed from Firebase
    ref.on('child_removed', function (dataSnapshot) {
      var data = dataSnapshot.val();
      if (data[Resource.idAttribute]) {
        Resource.eject(data[Resource.idAttribute]);
      }
    });
  });
  
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | taemon' ;
    }
  });
})

;

