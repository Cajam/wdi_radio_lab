(function(){
  angular
  .module("radio")
  .controller("SessionsController", function($auth, $state){
    this.signinForm = {};
    this.signupForm = {};
    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
        $state.go("songIndex");
      })
      .catch(function(resp) {
        console.log("Signin failure:", resp);
      });
    };

    this.signup = function(){
      $auth.submitRegistration(this.singupForm)
      .then(function(resp) {
        $state.go("songIndex");
      })
      .catch(function(resp) {
        console.log(resp);
      });
    }
  });
})();
