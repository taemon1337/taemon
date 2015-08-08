angular.module( 'taemon.blogs', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
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

.controller( 'BlogsCtrl', function BlogsCtrl( $scope ) {
  
})

;