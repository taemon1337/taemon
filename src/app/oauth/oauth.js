angular.module( 'taemon.oauth', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ngStorage',
  'oauth'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state('oauth', {
      views: {
        "oauth@navbar": {
          controller: "OauthCtrl",
          templateUrl: "oauth/oauth.tpl.html"
        }
      }
    })
  ;
})

.controller( 'OauthCtrl', function OauthCtrl( $scope ) {

})

;