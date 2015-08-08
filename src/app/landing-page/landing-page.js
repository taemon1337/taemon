angular.module( 'taemon.landingpage', [
  'ui.router',
  'taemon.home'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'landing-page', {
      //parent: 'home',
      url: '/',
      views: {
        "main@": {
          controller: 'LandingPageCtrl',
          templateUrl: 'landing-page/landing-page.tpl.html'
        }
      },
      data:{ pageTitle: 'Welcome' }
    })
  ;
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'LandingPageCtrl', function LandingPageCtrl( $scope, $state ) {
  
})

;