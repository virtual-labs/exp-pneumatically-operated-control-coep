(function(AH, UP) {
UP.saveUserAccessInfo = function(dept,lab,exp,sim) {
	//alert(dept+" "+lab+" "+exp);
	try {
		AH.saveUserAccessData('set/userAccessData/'+dept+'/'+lab+'/'+exp+"/"+sim, 'GET');
	 	} catch (e) {
	 		var msg = "There was an error in execution of Code";
	 		msg += "Error Description : " + e.message;
	 		showCustomAlert('Error', msg);
	 	}
};

UP.saveEndTimeInfo = function(dept,lab,exp,sim) {
	//alert(dept+" "+lab+" "+exp);
	try {
		AH.saveUserEndTimeAccessData('set/userEndTimeData/'+dept+'/'+lab+'/'+exp+"/"+sim, 'GET');
	 	} catch (e) {
	 		var msg = "There was an error in execution of Code";
	 		msg += "Error Description : " + e.message;
	 		UP.showCustomAlert('Error', msg);
	 	}
};

UP.call = function(dept, lab, exp, sim) {
		setInterval(function() {
			UP.saveEndTimeInfo(dept, lab, exp, sim);
		}, com.coep.vlab.userProfile.ajaxCallTime);
};

UP.callUnload = function() {
	alert("hi");
	
//	  window.location.reload(true);
	   
	
};



UP.closeWindow = function() {
	window.location="../auth/logout";
};

})(com.coep.vlab.ajaxHandler, com.coep.vlab.userProfile);