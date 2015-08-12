angular.module( 'taemon.blogs', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ui.ace',
  'Blog',
  'formly',
  'formlyBootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'blogs', {
      parent: 'home',
      url: '/blogs',
      views: {
        "main@": {
          controller: 'BlogsCtrl',
          templateUrl: 'blogs/blogs.tpl.html'
        }
      },
      data:{ pageTitle: 'Blogs' }
    })
  ;
})

.controller( 'BlogsCtrl', function BlogsCtrl( $scope, Blog ) {
  
  $scope.blogs = [];
  
  $scope.aceLoaded = function( _editor ) {
    var firebaseRef = new Firebase('https://taemon.firebaseio.com/blogs');
    var firepad = Firepad.fromACE( firebaseRef, _editor, { defaultText: 'enter here...' } );
  };
  
})
;