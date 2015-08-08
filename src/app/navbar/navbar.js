angular.module( 'taemon.navbar', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ui.navbar'
])

.config(function config( $stateProvider ) {
})

.controller( 'NavbarCtrl', function NavbarCtrl( $scope ) {
  
  $scope.isCollapsed = false;
  $scope.brandImage = "assets/img/mgs-fox.png";
  
  $scope.blogTree = [
    { name: 'All Blogs',      link: 'blogs', title: 'View all blogs' },
    { name: 'Cyber Security', link: 'blogs.security', title: 'Cyber Cyber Cyber' },
    { name: 'Truth',          link: 'blogs.truth', title: 'Truth, Science, and Religion' },
    { name: 'Current Events', link: 'blogs.current', title: 'Things in the news' }
  ];
  
  $scope.appTree = [
    { name: 'Iternut', link: 'iternut' },
    { name: 'Feats of Strength', link: 'feats' },
    { name: 'Tasks', link: 'todos' },
    { name: 'Plex Upload', link: 'plexup' },
    { name: 'Plex Media', link: 'plexer' },
    { name: 'Croudea', link: 'croudea' },
    { name: 'Leet', link: 'leet' }
  ];
  
  $scope.cogTree = [
    { name: 'Settings', link: 'settings' },
    { name: 'Docker Manager', link: 'docker' },
    { name: 'Module Manager', link: 'modman' },
    { name: 'Module Builder', link: 'modular' },
    { name: 'OAuth', link: 'oauth' }
  ];
  
})

;
