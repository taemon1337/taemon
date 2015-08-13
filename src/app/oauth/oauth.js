angular.module( 'taemon.oauth', [
  'js-data',
  'ui.bootstrap',
  'taemon.navbar'
])

.config(function config( $stateProvider, DSFirebaseAdapterProvider ) {

})

.controller('OauthCtrl', function OauthCtrl( $scope ) {
  
  $scope.providerTree = [
    { name: 'google', link: 'login({ provider: "google" })' }
  ];
  
  $scope.loginWith = function(provider) {
    var ref = new Firebase('https://taemon.firebaseio.com/web/uauth');
    var deferred = $.Deferred();
  
    ref.authWithOAuthPopup(provider, function (err, user) {
        if (err) {
            console.error("ERROR: ", err);
            deferred.reject(err);
        }
  
        if (user) {
          console.log('LOGGED IN', user);
          deferred.resolve(user);
        }
    });
  
    return deferred.promise();
  };
  
})

;
