"use strict";

(function(){
  angular
  .module("radio",[
    "ui.router",
    "ng-token-auth",
    "songs"
  ])
  .config([
    "$authProvider",
    AuthConfigFunction
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function AuthConfigFunction($authProvider) {
    $authProvider.configure({
      apiUrl: "http://localhost.3000"
    });
  }

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songIndex", {
      url:"/index",
      templateUrl: "./js/index.html",
      controller: "SongIndexController",
      controllerAs: "SongIndexViewModel"
    })
    .state("songNew", {
      url:"/songs/new",
      templateUrl: "./js/new.html",
      controller: "SongNewController",
      controllerAs: "SongNewViewModel"
    })
    .state("songEdit", {
      url:"/songs/edit/:id",
      templateUrl: "./js/edit.html",
      controller: "SongEditController",
      controllerAs: "SongEditViewModel"
    })
    .state("songShow", {
      url:"/songs/:id",
      templateUrl: "./js/show.html",
      controller: "SongShowController",
      controllerAs: "SongShowViewModel"
    })
    .state("signin", {
      url: "/signin",
      templateUrl: "js/signin.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state("signout", {
      url: "/signout",
      templateUrl: "js/signout.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    })
    .state("signup", {
      url: "/signup",
      templateUrl: "js/signup.html",
      controller: "SessionsController",
      controllerAs: "SessionsViewModel"
    });
  }
}());
