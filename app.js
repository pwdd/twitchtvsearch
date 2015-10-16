(function() {
  var app = angular.module('fccapp', []);

  var streammers = [
    "freecodecamp", 
    "storbeck", 
    "terakilobyte", 
    "habathcx",
    "RobotCaleb",
    "thomasballinger",
    "noobs2ninjas",
    "medrybw",
    "beohoff"/*, 
    "brunofin",
    "comster404"*/
  ];

  var url = 'https://api.twitch.tv/kraken/streams/'

  app.controller('TabController', ['$scope', '$http', function($scope, $http) {

    $scope.entries = [];
    
    streammers.forEach(function(name) {
      $http.jsonp(url + name + "?callback=JSON_CALLBACK")
      .success(function(response) {
        $scope.entries.push(angular.extend(response));
      })
      .error(function(response) {
        $scope.entries.push(angular.extend(response));
      });
    });

    $scope.tab = 1;
    
    $scope.setTab = function(selected) {
      $scope.tab = selected;
    };

    $scope.isSet = function(set) {
      return $scope.tab === set;
    };
  }]);

})();
