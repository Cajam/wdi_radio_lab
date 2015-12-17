(function(){
  angular
  .module("songs")
  .directive("songShow", function(){
    return {
      templateUrl: 'js/_song_show.html',
      // replace: true,
      scope: {
        song: '='
      }
    }
  });
})();
