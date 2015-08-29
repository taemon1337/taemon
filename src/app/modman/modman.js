angular.module( 'taemon.modman', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ModMan',
  'taemon.modman.edit'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'modman', {
    parent: 'admin',
    url: '/modman',
    views: {
      "admin-main": {
        controller: 'ModManCtrl',
        templateUrl: 'modman/modman.tpl.html'
      }
    },
    data:{ pageTitle: 'ModMan' }
  });
})

.run( function run() {
  
})

.controller( 'ModManCtrl', function ModManCtrl( $scope, ModMan ) {
  
  window.ModMan = ModMan;

  ModMan.findAll();
  ModMan.bindAll({}, $scope, 'modules');

})

;