angular.module( 'taemon.modular', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ui.ace'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'modular', {
      parent: 'home',
      url: '/modular',
      views: {
        "main@": {
          controller: 'ModularCtrl',
          templateUrl: 'modular/modular.tpl.html'
        }
      },
      data:{ pageTitle: 'Modular' }
    })
  ;
})

.controller( 'ModularCtrl', function ModularCtrl( $scope ) {

  $scope.modules = [
    { 
      name: 'modular', 
      files: [
        { filename: 'modular.js', synax: 'javascript', content: 'angular.module("taemon.modular", []);' },
        { filename: 'modular.tpl.html', syntax: 'html', content: '' },
        { filename: 'modular.less', syntax: 'less', content: '' }
      ]
    }
  ];

})

;