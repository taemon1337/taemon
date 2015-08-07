angular.module( 'taemon.about', [
  'ui.router',
  'placeholders',
  'taemon.navbar',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home.about', {
    url: '/about',
    views: {
      "main@": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      },
      "nav@": {
        controller: "NavbarCtrl",
        templateUrl: "navbar/navbar.tpl.html"
      }
    },
    data:{ pageTitle: 'About' }
  });
})

.controller( 'AboutCtrl', function AboutCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
