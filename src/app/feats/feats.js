angular.module( 'taemon.feats', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'flow',
  'Feat',
  'taemon.feats.edit'
])

.config(function config( $stateProvider ) {
  $stateProvider
    .state( 'feats', {
      parent: 'home',
      url: '/feats',
      views: {
        "main@": {
          controller: 'FeatsCtrl',
          templateUrl: 'feats/feats.tpl.html'
        }
      },
      data:{ pageTitle: 'feats' }
    })
  ;
})

.controller( 'FeatsCtrl', function FeatsCtrl( $scope, $state, Feat ) {

  $scope.addFeat = function() {
    $scope.feats.push({ name: '', description: '', rules: [], votes: 0 });
  };

  $scope.feats = [
    { 
      id: 1,
      name: 'Jump High',
      description: 'See who can jump the highest',
      rules: [
        'Standing jump, no run-up.'
      ],
      votes: 10
    },
    { 
      id: 2,
      name: 'Push-Ups',
      description: 'Who can do the most push-ups',
      rules: [
        'Back must be straight.',
        'Head up, not looking down or rounding shoulders.',
        'All the way down and up.'
      ],
      votes: 6
    },
    { 
      id: 3,
      name: 'Hay Bale Toss',
      description: 'Toss hay bales over the bar',
      rules: [
        'Must go over the bar.',
        'Bar cannot be knocked off.'
      ],
      votes: 18
    }
  ];

})

;