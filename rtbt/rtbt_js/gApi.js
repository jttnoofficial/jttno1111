function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    

}



function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
		$(".logReg").css("display", "block");
		$(".abandoned").css("display", "none");
    });
}


