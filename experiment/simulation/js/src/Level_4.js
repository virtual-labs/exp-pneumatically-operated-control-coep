// JavaScript Document
$(function () {
	
	
	
	
	Level4_AssembleControlValve = function() {
		 $("header").html("<img src='images/COEPlogo.png'/> <h1>COLLEGE OF ENGINEERING, PUNE</h1><h2><i>Assemble The Control Valve </i></h2>");
		$("#main-div").html("");
		$("#main-div").append("<div id = 'Level4Assemble'></div>");
		
		var assembleHtm = '<div id="vlavePartsDiv" style="">'
			+'</div>'
			
			+'<div id="vlavePartsAssembleDiv">'
			+'<h2>Assemble the components of control valve</h2>'
			+'<p>Process is under construction so the Details will be uploaded soon </p>'
			+'</div>'
			
			
			assembleHtm += '<div class="buttonDiv">'
  				+'<button id="nextLevel5">Next Level</button>'
  				+'</div>'	
			
			//$("#Level4Assemble").html(assembleHtm);
		Level5_DesignControlValve();

		$("#nextLevel5").click(function() {
			
			Level5_DesignControlValve();
						
		});
		
		
		
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});   //END LINE