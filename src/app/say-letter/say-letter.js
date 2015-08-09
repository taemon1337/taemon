angular.module( 'taemon.sayLetter', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'say-letter', {
    parent: 'home',
    url: '/say-letter',
    views: {
      "main@": {
        controller: 'SayLetterCtrl',
        templateUrl: 'say-letter/say-letter.tpl.html'
      }
    },
    data:{ pageTitle: 'Say Letter' }
  });
})

.controller( 'SayLetterCtrl', function SayLetterCtrl( $scope ) {

  $scope.current = null;
  $scope.state = "stopped";
  $scope.interval = null;
  $scope.types = ["a-z", "A-Z", "0-9", "all"];
  $scope.type = $scope.types[0];
  $scope.counter = 10;

  $scope.start = function() {
    clearInterval($scope.interval);
    $scope.state = 'waiting';
    $scope.current = $scope.getRandomType();
    
    $scope.state = 'started';
    $scope.interval = $scope.countdown();
    return true;
  };

  $scope.countdown = function() {
    return setInterval(function() {
      $scope.counter -= 1;
      if($scope.counter < 0) {
        $scope.state = 'stopped';
        $scope.counter = 10;
        clearInterval($scope.interval);
      } else {
        $scope.interval = $scope.countdown();
      }
    }, 1000);
  };

  $scope.getRandomType = function() {
    switch($scope.type) {
      case "a-z":
        return String.fromCharCode( Math.floor(Math.random()*25)+97);
      case "A-Z":
        return String.fromCharCode( Math.floor(Math.random()*25)+97).toUpperCase();
      case "0-9":
        return Math.floor(Math.random()*9);
      default:
        switch(Math.floor(Math.random()*3)) {
          case 0:
            return String.fromCharCode( Math.floor(Math.random()*25)+97);
          case 1:
            return String.fromCharCode( Math.floor(Math.random()*25)+97).toUpperCase();
          case 2:
            return Math.floor(Math.random()*9);
        }
    }
  };

})

;
