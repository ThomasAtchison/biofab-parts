var request = new XMLHttpRequest();

// A synchronous request is depecrated
request.open("GET", "./data/libraries.json", false);
request.send();
var libraries = angular.fromJson(request.responseText);

angular
  .module('BiofabParts', ['ngMaterial'])

  .controller('AppController', AppController);
  function AppController ($scope, $sce, $log) {
    var tabs = [];
    selected = null;
    previous = null;
    
    $scope.libraries = libraries;
    $scope.tabs = tabs;
    $scope.selectedIndex = 0;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
      selected = tabs[current];
    });
    $scope.addTab = function (library) {
      tabs.push({ library: library });
    };
    // $scope.removeTab = function (tab) {
    //   var index = tabs.indexOf(tab);
    //   tabs.splice(index, 1);
    // };
  }