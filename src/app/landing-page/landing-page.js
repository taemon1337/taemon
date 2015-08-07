angular.module( 'taemon.landingpage', [
  'ui.router',
  'taemon.navbar'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'landing-page', {
      url: '/',
      views: {
        "main@": {
          controller: 'LandingPageCtrl',
          templateUrl: 'landing-page/landing-page.tpl.html'
        },
        "nav@": {
          controller: "NavbarCtrl",
          templateUrl: "navbar/navbar.tpl.html"
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