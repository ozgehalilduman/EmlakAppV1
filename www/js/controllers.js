angular.module('starter.controllers', [])
//BENİM EKLEDİKLERİ
.controller('satilikCtrl', function($scope, $stateParams) {
  $scope.sayfabaslik="SATILIKLAR";
  $scope.turler = [
    {baslik:"MUSTAKİL EV",id:1,arkaplan:"ev_bg.jpg",resim:"mustakil.png"},
    {baslik:"APARTMAN",id:2,arkaplan:"apartman_bg.jpg",resim:"apartman.png"},
    {baslik:"REZİDANS",id:3,arkaplan:"rezidans_bg.jpg",resim:"rezidans.png"},
    {baslik:"ARSA",id:4,arkaplan:"arsa_bg.jpg",resim:"tarla2.png"}
  ];
})
//ORJİNALLER
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggaexx', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
