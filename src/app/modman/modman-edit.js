angular.module( 'taemon.modman.edit', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ModMan',
  'formly',
  'formlyBootstrap',
  'formly.array'
])

.config(function config( $stateProvider, formlyConfigProvider ) {
  $stateProvider
    .state( 'modman.edit', {
      url: '/:id/edit',
      onEnter: function( $modal, $state, $stateParams){
        if($stateParams.id.startsWith("%2F-")) { return; }
        $modal.open({
          animation: true,
          controller: 'ModManEditCtrl',
          templateUrl: 'modman/modman-edit.tpl.html'
        }).result.then(function() {
          $state.go('^');
        });
      }
    })
    .state( 'modman.new', {
      url: '/new',
      onEnter: function($modal, $state){
        $modal.open({
          animation: true,
          controller: 'ModManEditCtrl',
          templateUrl: 'modman/modman-edit.tpl.html'
        }).result.then(function() {
          $state.go('^');
        });
      }
    })
  ;
})

.run(function run( $modal ) {
  
  
  
})

.controller( 'ModManEditCtrl', function ModManEditCtrl( $scope, $rootScope, $stateParams, $modalInstance, ModMan ) {

  $scope.saving = false;
  $scope.isNew = $stateParams.id ? false : true;

  if($scope.isNew) {
    $scope.module = { 
      name: '', 
      link: '', 
      description: '', 
      public: true, 
      enabled: false, 
      user_id: $rootScope.current_user.uid,
      requires_authentication: false
    };
  } else {
    $scope.module = ModMan.get($stateParams.id);
  }

  $scope.fields = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Name',
        placeholder: 'name this module...',
        required: true
      }
    },
    {
      key: 'link',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Link State',
        placeholder: 'the link state to route to to access this app...',
        required: true
      }
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: 'describe the module...'
      }
    },
    {
      key: 'public',
      type: 'checkbox',
      templateOptions: {
        label: 'Can other users use this module?'
      }
    },
    {
      key: 'requires_authentication',
      type: 'checkbox',
      templateOptions: {
        label: 'Does this module require a user to be signed in?'
      }
    },
    {
      key: 'enabled',
      type: 'checkbox',
      templateOptions: {
        label: 'Is this module ready to be used and should be enabled?'
      }
    }
  ];

  $scope.close = function() {
    $modalInstance.close();
  };
    
  $scope.save = function() {
    $scope.saving = true;
    if($scope.isNew) {
      ModMan.create($scope.module).then(function() { $scope.saving = false; $modalInstance.close(); });
    } else {
      ModMan.update($scope.module.id, { id: $scope.module.id, name: $scope.module.name, description: $scope.module.description }).then(function() { $scope.saving = false; $modalInstance.close(); });
    }
  };
  
  $scope.destroy = function() {
    var ans = confirm('Are you sure you want you delete the "'+$scope.module.name+'" module?');
    if(ans) {
      $scope.saving = true;
      if($scope.isNew) {
        $scope.saving = false;
        $modalInstance.close();
      } else {
        ModMan.destroy($scope.module.id).then(function() { $scope.saving = false; $modalInstance.close(); });
      }
    }
  };

})
;