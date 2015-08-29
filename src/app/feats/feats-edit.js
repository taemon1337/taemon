angular.module( 'taemon.feats.edit', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'Feat',
  'formly',
  'formlyBootstrap',
  'formly.array'
])

.config(function config( $stateProvider, formlyConfigProvider ) {
  $stateProvider
    .state( 'feats.edit', {
      url: '/:id/edit',
      onEnter: function( $modal, $state, $stateParams){
        if($stateParams.id.startsWith("%2F-")) { return; }
        $modal.open({
          animation: true,
          controller: 'FeatsEditCtrl',
          templateUrl: 'feats/feats-edit.tpl.html'
        }).result.then(function() {
          $state.go('^');
        });
      }
    })
    .state( 'feats.new', {
      url: '/new',
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

.controller( 'FeatsEditCtrl', function FeatsEditCtrl( $scope, $rootScope, $stateParams, $modalInstance, Feat ) {

  $scope.saving = false;
  $scope.isNew = $stateParams.id ? false : true;
  $scope.feat = { name: '', description: '', rules: '', votes: 0, user_id: $rootScope.current_user.uid };

  Feat.find($stateParams.id).then(function(feat) {
    $scope.feat = feat;
  });

  $scope.fields = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Name',
        placeholder: 'name this feat...',
        required: true
      }
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: 'describe the feat...'
      }
    },
    {
      key: 'rules',
      type: 'textarea',
      templateOptions: {
        label: 'Rules / Details',
        placeholder: 'enter rules, scoring, match-ups, or any other detailed information...'
      }
    }
  ];

  $scope.close = function() {
    $modalInstance.close();
  };
    
  $scope.save = function() {
    $scope.saving = true;
    if($scope.isNew) {
      Feat.create($scope.feat).then(function() { $scope.saving = false; $modalInstance.close(); });
    } else {
      var attrs = {};
      $scope.fields.map(function(f) { attrs[f.key] = $scope.feat[f.key]; });
      Feat.update($scope.feat.id, attrs ).then(function() { $scope.saving = false; $modalInstance.close(); });
    }
  };
  
  $scope.destroy = function() {
    var ans = confirm('Are you sure you want you delete the "'+$scope.feat.name+'" Feat?');
    if(ans) {
      $scope.saving = true;
      if($scope.isNew) {
        $scope.saving = false;
        $modalInstance.close();
      } else {
        Feat.destroy($scope.feat.id).then(function() { $scope.saving = false; $modalInstance.close(); });
      }
    }
  };

})
;