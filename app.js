"use strict";

(function(){
  angular
  .module("radio",[
    "ui.router",
    "songs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("songIndex", {
      url:"/welcome",
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
    });
  }
}());
