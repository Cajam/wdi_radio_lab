"use strict";

(function(){
  angular
  .module("songs")
  .directive("songForm", [
    "$state",
    "SongFactory",
    SongFormDirectiveFunction
  ]);

   function SongFormDirectiveFunction(SongFactory, $state){
    return {
      templateUrl: 'js/_song_form.html',
      // replace: true,
      scope: {
        song: '=',
        formType: '@'
      },
      link: function(scope){
        scope.create = function(){
          scope.song.$save(scope.song, function(song){
            $state.go("songIndex", {}, {reload: true});
          });
        }
        scope.update = function(){
          scope.song.$update({id: scope.song.id})
        };
      scope.delete = function(){
        scope.song.$delete({id: scope.song.id}, function(){
          $state.go("songIndex", {}, {reload: true});
        });
      }
    }
  }
}
}());
