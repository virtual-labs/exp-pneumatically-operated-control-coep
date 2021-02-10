
var idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 5000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
    $(this).click(function (e) {
        idleTime = 0;
    });
    $(this).blur(function (e) {
        idleTime = 0;
    });
   
});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 1) { // 60 minutes
    	window.clearInterval(com.coep.vlab.userProfile.call);
    	msg = "time expired!";
    	// com.coep.vlab.userProfile.showCustomAlert("hi",msg);
    	// alert("Time expired!");
    	// window.close();
    }
}
 
