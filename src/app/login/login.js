angular.module( 'taemon.login', [
  'js-data',
  'ui.bootstrap',
  'taemon.navbar',
  'ModMan',
  'UserProfile'
])

.config(function config( $stateProvider, DSFirebaseAdapterProvider ) {

  $stateProvider
    .state('profile', {
      parent: 'home',
      //url: '/profile',
      onEnter: function( $modal, $state, $stateParams){
        $modal.open({
          animation: true,
          controller: 'ProfileCtrl',
          templateUrl: 'login/profile.tpl.html'
        }).result.then(function() {
          //$state.go('home');
        });
      },
      data: { pageTitle: 'Profile' }
    })
  ;

})

.factory('Login', function Login( $rootScope, $state, DSFirebaseAdapter, ModMan, UserProfile ) {
  
  var ref = DSFirebaseAdapter.ref.child("/web/uauth");
  var loginFactory = {};

  loginFactory.getAuthFromLocalStorage = function() {
    var tmp = localStorage.getItem('firebase:session::taemon');
    if(tmp) {
      return JSON.parse(tmp);
    }
  };

  loginFactory.loadUser = function(provider, cb) {
    var uid = null;
    if(localStorage) {
      uid = loginFactory.getAuthFromLocalStorage();
    }
    
    if(uid) {
      UserProfile.find(uid).then(function(user) {
        
      });
    }
    
  };
  
  loginFactory.login = function( provider, cb ) {
    
    ref.authWithOAuthPopup(provider, function (err, auth) {
      if (err) {
        console.log("ERROR: ", err);
        event.preventDefault();
      }

      if (auth) {
        var attrs = auth[auth.provider];
        attrs.uid = auth.uid;
        attrs.role = { user: true, admin: true };
        
        UserProfile.update(auth.uid, attrs).then(function(user) {
          $rootScope.current_user = user;
          window.current_user = user;
          
          cb(user);
        });
      }
    });
  };
  
  loginFactory.logout = function( cb ) {
    ref.unauth();
    $rootScope.current_user = null;
    window.current_user = null;
    
    if(cb) { cb(true); }
  };
  
  loginFactory.authorizeStateChange = function( toState, cb ) {
    ModMan.findAll({}).then(function(modules) {
      modules.forEach(function(mod) {
        var requires_authentication = false;
        
        if(mod.link == toState.name) {
          console.log('authorizing state change to ', mod);
          if(mod.requires_authentication) {
            if(mod.requires_role) {
              if( $rootScope.current_user ) {
                cb( $rootScope.current_user.role[mod.requires_role] );
              } else {
                loginFactory.login('google', function( user ) {
                  cb( user.role[mod.requires_role] );
                });
              }
            } else {
              if( $rootScope.current_user ) {
                cb($rootScope.current_user);
              } else {
                loginFactory.login( 'google', cb );
              }
            }
          } else {
            cb(true);
          }
        }
      });
    });
  };
  
  loginFactory.logged_in = function() {
    return $rootScope.current_user != null;
  };
  
  return loginFactory;
})

.run(function run( $rootScope, Login ) {
  
  // listen for state changes and if not signed in when a state change which requires login, then prompt for login
  $rootScope.$on("$stateChangeStart", function(event, toState, stateParams, fromState ) {
    //console.log('checking authorization for state change', toState );
    Login.authorizeStateChange( toState, function(valid) {
      if(!valid) {
        console.log("Not authorized to visit ", toState);
        event.preventDefault();
      }
    });
  });
})


.controller('LoginCtrl', function LoginCtrl( $scope, $rootScope, Login, UserProfile ) {
  
  $scope.user = $rootScope.current_user;
  
  $scope.logout = function() {
    Login.logout();
    $scope.user = null;
  };
  
  $scope.providerTree = [
    { name: 'google', link: 'login({ provider: "google" })' }
  ];
  
  $scope.loginWith = function(provider) {
    Login.login(provider, function(user) {
      $scope.user = user;
    });
  };
  
    // load from local storage initially
  if(localStorage) {
    var auth = Login.getAuthFromLocalStorage();
    if(auth && auth.uid) {
      UserProfile.find(auth.uid).then(function(user) {
        $rootScope.current_user = user;
        window.current_user = user;
        $scope.user = user;
      });
    }
  }
  
})

.controller('ProfileCtrl', function ProfileCtrl( $rootScope, $scope, $modalInstance, Login, UserProfile ) {
  if(!$rootScope.current_user) {
    console.log('Not logged in!');
    $modalInstance.close();
  }
  
  $scope.user = $rootScope.current_user;
  
  $scope.close = function() {
    $modalInstance.close();
  };
  
})

;
