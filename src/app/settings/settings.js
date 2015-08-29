angular.module( 'taemon.settings', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'settings', {
    parent: 'admin',
    url: '/settings',
    views: {
      "admin-main": {
        controller: 'SettingsCtrl',
        templateUrl: 'settings/settings.tpl.html'
      }
    },
    data:{ pageTitle: 'Settings' }
  });
})

.controller( 'SettingsCtrl', function SettingsCtrl( $scope ) {

})

;
