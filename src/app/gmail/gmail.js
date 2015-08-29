angular.module( 'taemon.gmail', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'gmail', {
    parent: 'home',
    url: '/gmail',
    views: {
      "main@": {
        controller: 'GmailCtrl',
        templateUrl: 'gmail/gmail.tpl.html'
      }
    },
    data:{ pageTitle: 'Gmail' }
  });
})

.controller( 'GmailCtrl', function GmailCtrl( $scope ) {

})

;
