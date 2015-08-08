angular.module( 'taemon.themepicker', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ui.navbar'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state('/themes/:theme', {
      onEnter: function() {
        console.log(' set theme to ', arguments);
      }
    })
  ;
})

.controller( 'ThemePickerCtrl', function ThemePickerCtrl( $scope ) {
  
  $scope.themeTree = [
    { name: 'default',    link: '' },
    { name: 'cerulean',   link: 'assets/bootswatch/cerulean.min.css' },
    { name: 'cosmo',      link: 'assets/bootswatch/cosmo.min.css' },
    { name: 'cyborg',     link: 'assets/bootswatch/cyborg.min.css' },
    { name: 'darkly',     link: 'assets/bootswatch/darkly.min.css' },
    { name: 'flatly',     link: 'assets/bootswatch/flatly.min.css' },
    { name: 'journal',    link: 'assets/bootswatch/journal.min.css' },
    { name: 'lumen',      link: 'assets/bootswatch/lumen.min.css' },
    { name: 'paper',      link: 'assets/bootswatch/paper.min.css' },
    { name: 'readable',   link: 'assets/bootswatch/readable.min.css' },
    { name: 'sandstone',  link: 'assets/bootswatch/sandstone.min.css' },
    { name: 'simplex',    link: 'assets/bootswatch/simplex.min.css' },
    { name: 'slate',      link: 'assets/bootswatch/slate.min.css' },
    { name: 'spacelab',   link: 'assets/bootswatch/spacelab.min.css' },
    { name: 'superhero',  link: 'assets/bootswatch/superhero.min.css' },
    { name: 'united',     link: 'assets/bootswatch/united.min.css' },
    { name: 'yeti',       link: 'assets/bootswatch/yeti.min.css' }
  ];
  
  $scope.theme = $scope.themeTree[0];
  
  $scope.setTheme = function(theme) {
    $scope.theme = theme;
    $(".bootswatch-theme-link").remove();
    $('<link rel="stylesheet" type="text/css" class="bootswatch-theme-link" />')
      .attr('href', theme.link)
      .appendTo("head")
    ;
  };
  
})

;