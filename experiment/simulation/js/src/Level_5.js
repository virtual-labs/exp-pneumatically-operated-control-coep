// JavaScript Document
$(function () {
		
		Level5_DesignControlValve = function() {
			 $("header").html("<img src='images/COEPlogo.png'/> <h1>COLLEGE OF ENGINEERING, PUNE</h1><h2><i> Design The Diaphragm Actuator </i></h2>");
			$("#main-div").html("");
			$("#main-div").append("<div id = 'Level5Design'></div>");
			
			
			var designHtm = '<div id="vlaveDesignDiv">'
				+'<div class="container-fluid">'
				+'<div class="row">'
				+'<div class="col-md-12">'
				+'<h1>Designed actuator uses values applicable to 1 inch(25mm) single ported valve.</h1>'
				+'<section>'
				
				+ '<span>Select effective diaphragm area(A)</span> <select class="" id="diaphragmArea" name="diaphragmArea" title="Choose effective diaphragm area">'
				+ '<option value="-1">Choose Value</option>'
				for ( var key in DA) {
					designHtm  += "<option value= " + key + ">" + DA[key]
							+ "</option>";
				}
			
			    designHtm  +=  ' </select>&nbsp;<span>inch<sup>2</sup></span><br>'
				
				designHtm += '<span>Select effective inner valve area(A<sub>v</sub>)</span>'
						+ ' <select class="" id="DAreaV" name="DAreaV" title="Choose effective inner valve area">'
						+ '<option value="-1">Choose Value</option>'
						for ( var key in DAV) {
							designHtm  += "<option value= " + key + ">" + DAV[key]
									+ "</option>";
						}
				designHtm +=  ' </select>&nbsp;<span>inch<sup>2</sup></span><br>'
						
				designHtm += '<span>Select valve pressure drop(P<sub>v</sub>)</span>'
								+ '<select class="" id="dpv" name="dpv" title="Choose valve pressure drop">'
								+ '<option value="-1">Choose Value</option>'
								for ( var key in DPV) {
									designHtm += "<option value= " + key + ">" + DPV[key]
											+ "</option>";
								}
				
				designHtm += ' </select>&nbsp;<span>PSID</span><br>'
					
				designHtm += '<span>Select spring rate(K)</span>'
						+ '<select class="" id="springRate" name="springRate" title="Choose spring rate">'
						+ '<option value="-1">Choose Value</option>'
						for ( var key in SR) {
							designHtm += "<option value= " + key + ">" + SR[key]
									+ "</option>";
						}
				designHtm += ' </select>&nbsp;<span>lbf/in</span><br>'
					
				designHtm += '<span>Select stem travel(X)</span>'
						+ '<select class="" id="stemTravel" name="stemTravel" title="Choose stem travel">'
						+ '<option value="-1">Choose Value</option>'
						for ( var key in DST) {
							designHtm += "<option value= " + key + ">" + DST[key]
									+ "</option>";
						}
				designHtm += ' </select>&nbsp;<span>inch</span><br>'
					
				designHtm += '<span>Select stem travel(X<sub>1</sub>)</span>'
						+ '<select class="" id="stemTravel1" name="stemTravel1" title="Choose stem travel">'
						+ '<option value="-1">Choose Value</option>'
						for ( var key in DST2) {
							designHtm += "<option value= " + key + ">" + DST2[key]
									+ "</option>";
						}
				designHtm += ' </select>&nbsp;<span>inch</span><br>'
					+'</section>'
				    +'</div>'
				    +'<div class="col-md-12" style="padding-left:30px;">'
				designHtm += '<h2>1. If no plug forces exist, calculate actuator pressure change required for full stem travel.</h2> <br>'	
					      +'<section>'
				designHtm += '<span><kbd>P = K * X / A </kbd></span> <br><br>'	
					
				designHtm +='<span>Calculate Diaphragm pressure (P) and enter here :&nbsp;&nbsp; </span><input id="dpVal" type="text" > <b>PSIG</b> <br><button id="dpValBtn">Submit</button><br><br>'	
					      +'</section>'
				designHtm += '<h2>2. When plug forces are there, calculate actuator pressure required for stem travel.</h2> <br>'	
					     +'<section>'
				designHtm += '<span><kbd>PA = K * X<sub>1</sub> + P<sub>v</sub> * A<sub>v</sub> </kbd></span><br><br>'	
							
				designHtm +='<span>Calculate Diaphragm pressure (P) and enter here :&nbsp;&nbsp; </span><input id="dpfVal" type="text" > <b>PSIG</b> <br><button id="dpfValBtn">Submit</button><br><br>'	
				
					       +'<div id = "designDiv"></div>'	
					       
					
					       +'</section>'
					       +'</div>'
				+'</div>'
				
				//designHtm += '<br><div class="buttonDiv">'
	  			//	+'<button id="nextLevel6">Next Level</button>'
				//+'</div>'	
	  				
	  				+'</div></div' //container and row close
				$("#Level5Design").html(designHtm);
			
			
				
				
			
$("#dpValBtn").click(function() {
			
			var dpValAns = parseFloat($("#dpVal").val());
			
			
			if(dpValAns != "" && !isNaN(dpValAns)){
				
				
				var K = parseInt($('#springRate option:selected').text());
				var X = parseFloat($('#stemTravel option:selected').text()); 
				var A = parseInt($('#diaphragmArea option:selected').text());
				
				
				if(!isNaN(K)){
					if(!isNaN(X)){
						if(!isNaN(A)){
							
							var dpval = (K * X) / A;
							
						}else{
							alertify.alert("Please select value of A ");
						}
					}else{
						alertify.alert("Please select value of X1 ");
					}
				}else{
					alertify.alert("Please select value of K ");
				}
				
			}else{
					alertify.alert("Please enter the answer in numeric only ");
			}
			
			if(dpValAns == dpval.toFixed(2) || dpValAns == dpval.toFixed(3)){
				alertify.alert("Anwser is correct");
				dpValFlag = 0;
				    
			}else{
				dpValFlag++;
				if (dpValFlag >= 3) {
					alertify.alert("Answer is Incorrect");
					alertify.alert("The correct answer is " + dpval.toFixed(2));
				} else {
					alertify.alert("Answer is Incorrect");
				}
			}
			
					
});
			
				
				
			
$("#dpfValBtn").click(function() {
					
			var dpfValAns = parseFloat($("#dpfVal").val());
			
			
			if(!isNaN(dpfValAns)){
				
				
				var K = parseInt($('#springRate option:selected').text());
				var X1 = parseFloat($('#stemTravel1 option:selected').text()); 
				var A = parseInt($('#diaphragmArea option:selected').text());
				var PV = parseInt($('#dpv option:selected').text());
				var AV = $('#DAreaV option:selected').val();
				
				var res = DAV2[AV];
				var avVal = res.split("/");
				
				if( avVal[1] != undefined){
					var finalAV = parseFloat(avVal[0]) / avVal[1];
				}else{
					var finalAV = parseFloat(DAV2[AV]);
				}
			
				
				if(!isNaN(K)){
					if(!isNaN(X1)){
						if(!isNaN(A)){
							if(!isNaN(PV)){
								if(!isNaN(AV)){
									
									var dpfval = ((K * X1) + (PV * finalAV))/ A;
									dpValFianl = dpfval.toFixed(2);
									
								}else{
									alertify.alert("Please select value of AV ");
								}
							}else{
								alertify.alert("Please select value of PV ");
							}
						}else{
							alertify.alert("Please select value of A ");
						}
					}else{
						alertify.alert("Please select value of X1 ");
					}
				}else{
					alertify.alert("Please select value of K ");
				}
				
			}else{
					alertify.alert("Please enter the answer in numeric only ");
			}
			
			
			if(dpfValAns == dpfval.toFixed(2) || dpfValAns == dpfval.toFixed(3)){
				alertify.alert("Anwser is correct");
				dpfValFlag = 0;
				
				
				var designHtm = '<span>This means that the diaphragm pressure must increase to P('+dpValFianl+') PSIG for stem travel X<sub>1</sub> ('+X1+').</span><br>'


				$("#designDiv").html(designHtm);		
				    
			}else{
				dpfValFlag++;
				if (dpfValFlag >= 3) {
					alertify.alert("Answer is Incorrect");
					alertify.alert("The correct answer is " + dpfval.toFixed(2));
				} else {
					alertify.alert("Answer is Incorrect");
				}
			}
					
});
			
			
$("#nextLevel6").click(function() {
	
	Level6_InvestigateControlValve();
	vlave();
});
			
			
			
}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
});   //END LINE