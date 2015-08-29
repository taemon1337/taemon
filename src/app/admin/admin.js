angular.module( 'taemon.admin', [
  'ui.router',
  'taemon.settings',
  'taemon.modular',
  'taemon.modman',
  'taemon.login'
])

.config(function config( $stateProvider, LoginProvider ) {
  $stateProvider
    .state( 'admin', {
      url: '/admin',
      parent: 'home',
      views: {
        "main@": {
          controller: 'AdminCtrl',
          templateUrl: 'admin/admin.tpl.html'
        }
      },
      /*
      onEnter: function( event, toState ) {
        if(!LoginProvider.logged_in()) {
          event.preventDefault();
        }
      },
      */
      data:{ pageTitle: 'Admin' }
    })
  ;
})

.run(function run( $rootScope ) {
  
})

.controller( 'AdminCtrl', function AdminCtrl( $scope, $rootScope, $state ) {
  
  $scope.links = [
    { name: 'Taemon Settings', link: 'settings' },
    { name: 'Docker Manager', link: 'docker' },
    { name: 'Module Manager', link: 'modman' },
    { name: 'Module Builder', link: 'modular' }
  ];
  
})

;

