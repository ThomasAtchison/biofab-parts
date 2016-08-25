angular
  .module('BiofabParts', ['ngMaterial'])
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
  })

  .controller('LibrariesPanelController', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggle = function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('librariesPanel')
        .toggle()
        .then(function () {
          $log.debug("The Libraries Panel was toggled.");
        });
    };
    $scope.libraries = biofabLibraries;
    // $scope.showDatasheet = function(libraryIdentifier){
    //   TabController.addTab()
    // }
    $scope.showAlert = function(ev, $mdDialog) {
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application
      // to prevent interaction outside of dialog
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title("Work in progress...")
          .textContent('Working towards having the datasheet of the library appear as a new tab.')
          .ariaLabel('"Work in progress" Alert')
          .ok('OK')
          .targetEvent(ev)
      );
    };
  })

.controller('TabController', TabController);
  function TabController ($scope, $log) {
    var tabs = [
          { title: 'Modular Promoter Library'},
          { title: 'Random Promoter Library'},
          { title: 'Translation Initiation Element Library'},
          { title: 'Terminator Library'}
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 0;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
      selected = tabs[current];
      if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
      if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
    });
    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
      var index = tabs.indexOf(tab);
      tabs.splice(index, 1);
    };
    $scope.fetchContent = function (tab) {
      var index = tabs.indexOf(tab);
      var content = biofabLibraries[index].description;
      return content;
    };
  }