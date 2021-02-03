// JavaScript Document
$(function () {
	
	
	 Level_3_ValveSizing = function() {
		
		 $("header").html("<img src='images/COEPlogo.png'/> <h1>COLLEGE OF ENGINEERING, PUNE</h1><h2><i>Control Valve Calculations</i></h2>");
		$("#main-div").html("");
		$("#main-div").css("padding", "10px 10%");
		
		$("#main-div").append("<div id = 'flowMediumDiv'></div><div id = 'flowMediumWaterDiv'></div><div id = 'flowMediumSuperheatedSteamDiv'></div><div id = 'flowMediumLiquidPropaneDiv'></div><div id = 'flowMediumNaturalGasDiv'></div>");
		$("#flowMediumSuperheatedSteamDiv").hide();
		$("#flowMediumLiquidPropaneDiv").hide();
		$("#flowMediumNaturalGasDiv").hide();
		$("#flowMediumWaterDiv").hide();
		var flowMediumhtm = '<br>'
			+'<div class="title_par" >Calculate the parameters required for sizing of a pneumatically operated control valve</div>';
		
		flowMediumhtm += '<div><label>Process fluid</label>'
							+ ' <select class="form-control" id="flowMedium" name="flowMedium" title="Choose Flow medium">'
							+ '<option value="-1">Choose Value</option>'
							for ( var key in processFluidJson) {
							
								flowMediumhtm  += "<option value= " + key + ">" + processFluidJson[key]
										+ "</option>";
							}
		
		
		flowMediumhtm  +=  ' </select>'
			+'<legend id = "expTitle" class="exptitle"></legend>'
						+'</div>';
		
		$("#flowMediumDiv").html(flowMediumhtm);
		$("#expTitle").hide();
	
		
		$('select#flowMedium').on('change', function() {
			
			var flowMediumValue = $('#flowMedium option:selected').val();
			
			if(flowMediumValue == "-1"){
				
				$("#expTitle").html("");
				$("#flowMediumWaterDiv").html('');
				$("#flowMediumSuperheatedSteamDiv").html('');
				$("#flowMediumNaturalGasDiv").html('');
				$("#flowMediumWaterDiv").html('');;
			}else if(flowMediumValue == "0"){
				$("#flowMediumSuperheatedSteamDiv").hide();
				$("#flowMediumLiquidPropaneDiv").hide();
				$("#flowMediumNaturalGasDiv").hide();
				$("#flowMediumWaterDiv").fadeIn({duration: 'slow', queue: false});
				$("#flowMediumWaterDiv").show();
				$("#expTitle").show();
				
				$("#expTitle").html("Determine the appropriate valve size for valve with linear cage where line size is 3 inch.");
				flowMediumWater();
			}else if(flowMediumValue == "1"){

				$("#flowMediumLiquidPropaneDiv").hide();
				$("#flowMediumNaturalGasDiv").hide();
				$("#flowMediumWaterDiv").hide();
				$("#flowMediumSuperheatedSteamDiv").fadeIn({duration: 'slow', queue: false});
				$("#flowMediumSuperheatedSteamDiv").show();
				$("#expTitle").show();
				
				$("#expTitle").html("Determine vlave size with linear cage.");
				flowMediumSuperheatedSteam();
				
			}else if(flowMediumValue == "2"){
				
				$("#flowMediumSuperheatedSteamDiv").hide();
				$("#flowMediumLiquidPropaneDiv").hide();
				$("#flowMediumWaterDiv").hide();
				$("#flowMediumNaturalGasDiv").fadeIn({duration: 'slow', queue: false});
				$("#flowMediumNaturalGasDiv").show();
				$("#expTitle").show();
				
				$("#expTitle").html("Determine the size and percent opening for a valve operating with selected service condition where line size is 4 inch.");
				flowMediumNaturalGas();
				
			}else if(flowMediumValue == "3"){
				
				$("#flowMediumSuperheatedSteamDiv").hide();
				$("#flowMediumNaturalGasDiv").hide();
				$("#flowMediumWaterDiv").hide();
				$("#flowMediumLiquidPropaneDiv").fadeIn({duration: 'slow', queue: false});
				$("#flowMediumLiquidPropaneDiv").show();
				$("#expTitle").show();
				
				$("#expTitle").html("Desired valve design with equal percentage and it is proposed to install 3 valve with 8 inch line");
				flowMediumLiquidPropane();
			}
		});

		
	
		
		
		
}

	
	
	
	
	
	
	
	
});   //END LINE