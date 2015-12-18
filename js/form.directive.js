(function(){
  angular
  .module("songs")
  .directive("songForm", [
    "$state",
    "SongFactory",
   function($state, Song){
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
            $state.go("songShow", song);
          });
        }
      }
    }
  }]);
})();
