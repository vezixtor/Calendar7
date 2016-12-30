angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicActionSheet, $timeout) {
  console.log('Dashboard');
  // Initialize your app
  var myApp = new Framework7();

  // Export selectors engine
  var $$ = Dom7;

  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];

  var calendarInline = myApp.calendar({
      container: '#calendar-inline-container',
      value: [new Date()],
      weekHeader: false,
      toolbarTemplate:
          '<div class="toolbar calendar-custom-toolbar">' +
              '<div class="toolbar-inner">' +
                  '<div class="left">' +
                      '<a href="#" class="link icon-only"><i class="icon icon-back"></i></a>' +
                  '</div>' +
                  '<div class="center"></div>' +
                  '<div class="right">' +
                      '<a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>' +
                  '</div>' +
              '</div>' +
          '</div>',
      onOpen: function (p) {
          $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
          $$('.calendar-custom-toolbar .left .link').on('click', function () {
              calendarInline.prevMonth();
          });
          $$('.calendar-custom-toolbar .right .link').on('click', function () {
              calendarInline.nextMonth();
          });
      },
      onMonthYearChangeStart: function (p) {
          $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
      },
      onDayClick: function (p, dayContainer, year, month, day) {
        console.log('clicked on ' + day + '-' + month + '-' + year);
        funcao();
      }
  });

  function funcao() {
    console.log('function');
    // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<b>Share</b> This' },
       { text: 'Move' }
     ],
     destructiveText: 'Delete',
     titleText: 'Modify your album',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     }
   });

  }


  $scope.items = [1, 2, 3, 4];
  $scope.moveItem = function(item, fromIndex, toIndex) {
    //Move the item in the array
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
