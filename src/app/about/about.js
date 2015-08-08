angular.module( 'taemon.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    parent: 'home',
    url: '/about',
    views: {
      "main@": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    },
    data:{ pageTitle: 'About' }
  });
})

.controller( 'AboutCtrl', function AboutCtrl( $scope ) {

})

;
