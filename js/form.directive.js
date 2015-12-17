(function(){
  angular
  .module("songs")
  .directive("songForm", function(){
    return {
      templateUrl: 'js/_song_form.html',
      // replace: true,
      scope: {
        song: '='
      }
    }
  });
})();
