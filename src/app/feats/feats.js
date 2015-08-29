angular.module( 'taemon.feats', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'flow',
  'Feat',
  'taemon.feats.edit'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'feats', {
      parent: 'home',
      url: '/feats',
      views: {
        "main@": {
          controller: 'FeatsCtrl',
          templateUrl: 'feats/feats.tpl.html'
        }
      },
      data:{ pageTitle: 'feats' }
    })
  ;
})

.controller( 'FeatsCtrl', function FeatsCtrl( $scope, $state, Feat ) {

  window.Feat = Feat;

  $scope.feats = [];
  Feat.findAll();
  Feat.bindAll({}, $scope, 'feats');

})

;