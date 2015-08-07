angular.module( 'taemon.themepicker', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ui.navbar',
  'taemon.navbar'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'ThemePicker', {
      views: {
        "theme-picker@navbar": {
          controller: "ThemePickerCtrl",
          templateUrl: "theme-picker/theme-picker.tpl.html"
        }
      }
    })
  ;
})

.controller( 'ThemePickerCtrl', function ThemePickerCtrl( $scope ) {
  
  $scope.theme = { name: 'default', css: '' };
  
  $scope.themeTree = [
    { name: 'cerulean', link: 'cerulean' },
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