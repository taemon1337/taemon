angular.module( 'taemon.navbar', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ui.navbar',
  'taemon.oauth',
  'taemon.themepicker'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'home.root', {
      url: '/home',
      views: {
        "nav@": {
          controller: "NavbarCtrl",
          templateUrl: "navbar/navbar.tpl.html"
        },
        "oauth@home.root": {
          controller: "OauthCtrl",
          templateUrl: "oauth/oauth.tpl.html"
        },
        "theme-picker@home.root": {
          controller: "ThemePickerCtrl",
          templateUrl: "theme-picker/theme-picker.tpl.html"
        }
      },
      data: {}
    })
  ;
})

.controller( 'NavbarCtrl', function NavbarCtrl( $scope ) {
  
  $scope.isCollapsed = false;
  $scope.brandImage = "assets/img/mgs-fox.png";
  
  $scope.blogTree = [
    { name: 'Cyber Security', link: 'security', title: 'Cyber Cyber Cyber' },
    { name: 'Truth',          link: 'truth', title: 'Truth, Science, and Religion' },
    { name: 'Current Events', link: 'current-events', title: 'Things in the news' }
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
  
  $scope.themeTree = [
    { name: 'cerulean', link: 'home.navbar' },
    { name: 'cosmo', link: 'theme.cosmo' },
    { name: 'cyborg', link: 'theme.cyborg' },
    { name: 'darkly', link: 'theme.darkly' },
    { name: 'flatly', link: 'theme.flatly' },
    { name: 'journal', link: 'theme.journal' },
    { name: 'lumen', link: 'theme.lumen' },
    { name: 'paper', link: 'theme.paper' },
    { name: 'readable', link: 'theme.readable' },
    { name: 'sandstone', link: 'theme.sandstone' },
    { name: 'simplex', link: 'theme.simplex' },
    { name: 'slate', link: 'theme.slate' },
    { name: 'spacelab', link: 'theme.spacelab' },
    { name: 'superhero', link: 'theme.superhero' },
    { name: 'united', link: 'theme.united' },
    { name: 'yeti', link: 'theme.yeti' }
  ];
  
})

;
