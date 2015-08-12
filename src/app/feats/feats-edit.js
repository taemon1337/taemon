angular.module( 'taemon.feats.edit', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'formly',
  'formlyBootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'feats.edit', {
      url: '/:id',
      onEnter: function($modal, $state){
        $modal.open({
          animation: true,
          controller: 'FeatsEditCtrl',
          templateUrl: 'feats/feats-edit.tpl.html'
        }).result.then(function() {
          $state.go('^');
        });
      }
    })
  ;
})

.run(function run( $modal ) {
})

.controller( 'FeatsEditCtrl', function FeatsEditCtrl( $scope, $stateParams, $modalInstance ) {
  var featId = $stateParams.id;

  $scope.close = function() {
    $modalInstance.close();
  };
    
  $scope.save = function() {
    $modalInstance.close($scope.feat);
  };

})
;