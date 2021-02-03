// JavaScript Document
$(function () {
	
	
	flowMediumLiquidPropane = function() {
		
		
		var liquidMediumHtm = '<div class="container-fluid"> '//main div
		
		+'<div class="row">' //main row
	    +'<div class="col-md-12" > ' // 1 opn col start
	   	
			
			+'<h2>1. Specify the necessary variables required to size the valve</h2><br> <section><span>Select Volume rate of water (q)</span>'
			+ ' <select class="" id="flowMedLiquid" name="flowMedLiquid" title="Choose Volume rate of Liquid">'
			+ '<option value="-1">Choose Value</option>'
			for ( var key in volumeRateOfFlowLiquid) {
				liquidMediumHtm  += "<option value= " + key + ">" + volumeRateOfFlowLiquid[key]
						+ "</option>";
			}
		
		liquidMediumHtm  +=  ' </select>&nbsp;<span>gpm</span><br>'
			
		liquidMediumHtm += '<span>Select Upstream absolute static pressure(P<sub>1</sub>)</span>'
					+ ' <select class="" id="lpp1" name="lpp1" title="Choose p1">'
					+ '<option value="-1">Choose Value</option>'
					for ( var key in LP1) {
						liquidMediumHtm  += "<option value= " + key + ">" + LP1[key]
								+ "</option>"; 
					}
		liquidMediumHtm +=  ' </select>&nbsp;<span>psia </span><br>'
					
		liquidMediumHtm += '<span>Select Downstream absolute static pressure(P<sub>2</sub>)</span>'
							+ '<select class="" id="lpp2" name="lpp2" title="Choose p2">'
							+ '<option value="-1">Choose Value</option>'
							for ( var key in LP2) {
								liquidMediumHtm += "<option value= " + key + ">" + LP2[key]
										+ "</option>";
							}
		liquidMediumHtm += ' </select>&nbsp;<span>psia </span><br>'
							
		liquidMediumHtm += ' <span>Pressure drop (P1-P2) across the valve(&Delta;P) = P<sub>1</sub> - P<sub>2</sub> = <span id="lpdeltaP"></span></span><br>'
		
		liquidMediumHtm += '<span>Select Absolute upstream temperature (T<sub>1</sub>)</span>'
				   + ' <select class="" id="LPT1" name="LPT1" title="Choose T1">'
			       + '<option value="-1">Choose Value</option>'
					for ( var key in LT1) {
						liquidMediumHtm += "<option value= " + key + ">" + LT1[key]
						+ "</option>";
					}
	    liquidMediumHtm += '</select>&nbsp;<span><sup>o</sup>F </span><br>'
			
			
	    liquidMediumHtm += ' <span>Value of Liquid specific gravity (ratio of density of liquid at flowing temperature to density of water at 60<sup>o</sup>F),dimensionless (G<sub>F</sub>) = 0.50</span><br>'
	    			
//			Table for Equation Constants
			liquidMediumHtm += '<div id="myModalNLiquid" class="modal fade" role="dialog">'
					+'<div class="modal-dialog">'
//						<!-- Modal content-->'
					+'<div class="modal-content">'
					+'<div class="modal-header">'
					+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
					+'<h4 class="modal-title">Equation Constants table</h4>'
					+'</div>'
					+'<div class="modal-body"	style="font-size: 12px; font-family: "Domine", serif; margin:5px;">'
					
					+ '<div><table class="table"><thead><tr>'
					+ '<th class="width20" style="width:20%;">Numerical Constantwith Subscript</th>'
					+ '<th  class="width10">N</th>'
					+ '<th  class="width10">w</th>'
					+ '<th  class="width10">q</th>'
					+ '<th  class="width10">p<sup>(2)</sup></th>'
					+ '<th  class="width10">&rho;</th>'
					+ '<th  class="width10">&upsilon;</th>'
					+ '<th  class="width10">&Tau;</th>'
					+ '<th  class="width10">d,D</th>'
					+ '</tr></thead><tbody>'
					+ '<tr><td>N<sub>1</sup></td><td>0.0865<br>0.865<br>1.00</td><td>- - -<br>- - -<br>- - -</td><td>m<sup>3</sup>/h<br>m<sup>3</sup>/h<br>gpm</td><td>kPa<br>bar<br>psia</td><td>- - -<br>- - -<br>- - -</td><td>- - -<br>- - -<br>- - -</td><td>- - -<br>- - -<br>- - -</td><td>- - -<br>- - -<br>- - -</td></tr>'
					+ '<tr><td>N<sub>2</sup></td><td>0.00214<br>890</td><td>- - -<br>- - -</td><td>- - -<br>- - -</td><td>- - -<br>- - -</td><td>- - -<br>- - -</td><td>- - -<br>- - -</td><td>- - -<br>- - -</td><td>mm<br>inch</td></tr>'
					+ '<tr><td>N<sub>4</sup></td><td>76000<br>17300</td><td>- - -<br>- - -</td><td>m<sup>3</sup>/h<br>gpm</td><td>- - -<br>- - -</td><td>- - -<br>- - -</td><td>centistokes<br>centistokes</td><td>- - -<br>- - -</td><td>mm<br>inch</td></tr>'
					+ '<tr><td>N<sub>5</sup></td><td>0.00241<br>1000</td><td>- - -<br>- - -</td><td>- - -<br>- - -</td><td>- - -<br>- - -</td><td>- - -<br>- - -</td><td>- - -<br>- - -</td><td>- - -<br>- - -</td><td>mm<br>inch</td></tr>'
					+ '<tr><td>N<sub>6</sup></td><td>2.73<br>27.3<br>63.3</td><td>kg/h<br>kg/h<br>lb/h</td><td>- - -<br>- - -<br>- - -</td><td>kPa<br>bar<br>psia</td><td>kg/m<sup>3</sup><br>kg/m<sup>3</sup><br>lb/fp<sup>3</sup></td><td>- - -<br>- - -<br>- - -</td><td>- - -<br>- - -<br>- - -</td><td>- - -<br>- - -<br>- - -</td></tr>'
					
					+ '</tbody></table></div>'
					
					+'</div>'
					+'<div class="modal-footer">'
					+'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
					+'</div>'
					+'</div>'

						+'</div>'
						+'</div>'
						
						+'<section>'	
						+'</div>' // 1 opt col close

						 +'<div class="col-md-12" class="inside-col"> ' // 2 opt col start
						
						
		liquidMediumHtm += '<br><div id="LPstep2" style="display:none;"><h2>2. Determine the appropriate equation constant, N, from given table equation constant</h2> <br>'
			  +'<section>'
			 +'<input id="LPEquationConsN" type="text" class="col-md-4" >'
			  +'<span class="col-md-7">For N<sub>1</sub> table  <a data-toggle="modal" data-target="#myModalNLiquid"	style="cursor: pointer;">click here</a>'
		      +'</span> <button class="btn-style" id="LPEquationConstBtn">Check</button><br>'
		      +'</section>'
		  	+'</div></div>' // 2 opt col close

			 +'<div class="col-md-12" class="inside-col"> ' // 3 opt col start
			
		liquidMediumHtm += '<br><div id="LPstep3" style="display:none;"><h2>3. Calculate F<sub>p</sub> (Piping geomertry factor) </h2> '
			   +'<section>'
			    	
    	       +'<div id="fkDiv"><span>&nbsp; &#931;k = 1.5 * ( 1 - d<sup>2</sup> / D<sup>2</sup> )<sup>2</sup>&nbsp;  where d = <span class="dInch">'+dInch+'</sub> inch & D = 8 inch</span><br>'
    	       +'<span>&nbsp; &#931;k = 1.5 * ( 1 - <span class="dInch">'+dInch+'</sub><sup>2</sup> / 8<sup>2</sup> )<sup>2</sup>&nbsp;  </span><br>'
    	       
    	       +'<span>&nbsp; &#931;k = '+(1.5 * Math.pow((1 - ((dInch*dInch)/(8*8))),2)).toFixed(2) +'&nbsp;  </span><br></div>'
//    	       +'<span></span><br>'
    	
    		   +'<img src="images/fpFormula.JPG"/><br>'
    		   
    		   // cv table code
    		   
         liquidMediumHtm += '<div id="myModalCVLiquid" class="modal fade" role="dialog">'
				+'<div class="modal-dialog">'
//    						<!-- Modal content-->'
				+'<div class="modal-content" style="width: 100%; ;">'
				+'<div class="modal-header">'
				+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
				+'<h4 class="modal-title"></h4>'
				+'</div>'
			    +'<div class="modal-body"	style="font-size: 12px; width:100%; font-family: "Domine", serif;">'		   
    		   
			    // cv table code
			    +'<div id="Liquid propaneCVtable_2125" align=center x:publishsource="Excel">'

			    +'<table border=0 cellpadding=0 cellspacing=0 width=667 style="border-collapse:'
			    +' collapse;table-layout:fixed;width:100%">'
			    +' <col width=143 style="mso-width-source:userset;mso-width-alt:4576;width:107pt">'
			    +' <col class=xl632125 width=221 style="mso-width-source:userset;mso-width-alt:'
			    +' 7072;width:166pt">'
			    +' <col class=xl632125 width=303 style="mso-width-source:userset;mso-width-alt:'
			    +' 9696;width:227pt">'
			    +' <tr height=21 style="mso-height-source:userset;height:15.75pt">'
			    +'  <td colspan=3 rowspan=2 height=42 class=xl722125 width=667 style="height:'
			    +'  31.5pt;width:500pt">Maximum Flow Coefficients for Full-Sized Trim with Equal'
			    +'  Percentage Cage and Normal Flow Direction</td>'
			    +' </tr>'
			    +' <tr height=21 style="mso-height-source:userset;height:15.75pt">'
			    +' </tr>'
			    +' <tr height=20 style="height:15.0pt">'
			    +'  <td height=20 class=xl642125 style="height:15.0pt;border-top:none">Valve</td>'
			    +'  <td class=xl642125 style="border-top:none;border-left:none">Valve Size,'
			    +'  NPS</td>'
			    +'  <td class=xl642125 style="border-top:none;border-left:none">Cv at Max Valve'
			    +'  Plug Travel</td>'
			    +' </tr>'
			    +' <tr height=19 style="height:14.25pt">'
			    +'  <td rowspan=10 height=190 class=xl712125 style="height:142.5pt;border-top:'
			    +'  none">ES</td>'
			    +'  <td class=xl682125 style="border-top:none;border-left:none">1/2</td>'
			    +'  <td class=xl662125 style="border-top:none">6.53</td>'
			    +' </tr>'
			    +' <tr height=19 style="height:14.25pt">'
			    +'  <td height=19 class=xl692125 style="height:14.25pt;border-left:none">3/4</td>'
			    +'  <td class=xl652125>14.2</td>'
			    +' </tr>'
			    +' <tr height=19 style="height:14.25pt">'
			    +'  <td height=19 class=xl702125 style="height:14.25pt;border-left:none">1,1-1/4</td>'
			    +'  <td class=xl662125 style="border-top:none">17.4</td>'
			    +' </tr>'
			    +' <tr height=19 style="height:14.25pt">'
			    +'  <td height=19 class=xl702125 style="height:14.25pt;border-left:none">1-1/2</td>'
			    +'  <td class=xl672125>33.4</td>'
			    +' </tr>'
			    +' <tr height=19 style="height:14.25pt">'
			    +'  <td height=19 class=xl702125 style="height:14.25pt;border-left:none">2</td>'
			    +'  <td class=xl672125>56.2</td>'
			    +' </tr>'
			    +' <tr height=19 style="height:14.25pt">'
			    +'  <td height=19 class=xl692125 style="height:14.25pt;border-left:none">2-1/2</td>'
			    +'  <td class=xl652125>82.7</td>'
			    +' </tr>'
			    +' <tr height=19 style="height:14.25pt">'
			    +'  <td height=19 class=xl702125 style="height:14.25pt;border-left:none">3</td>'
			    +'  <td class=xl672125>121</td>'
			    +' </tr>'
			    +' <tr height=19 style="height:14.25pt">'
			    +'  <td height=19 class=xl702125 style="height:14.25pt;border-left:none">4</td>'
			    +'  <td class=xl672125>203</td>'
			    +' </tr>'
			    +' <tr height=19 style="height:14.25pt">'
			    +'  <td height=19 class=xl702125 style="height:14.25pt;border-left:none">6</td>'
			    +'  <td class=xl672125>957</td>'
			    +' </tr>'
			    +' <tr height=19 style="height:14.25pt">'
			    +'  <td height=19 class=xl692125 style="height:14.25pt;border-left:none">8</td>'
			    +'  <td class=xl652125>808</td>'
			    +' </tr>'
			    +' <![if supportMisalignedColumns]>'
			    +' <tr height=0 style="display:none">'
			    +'  <td width=143 style="width:107pt"></td>'
			    +'  <td width=221 style="width:166pt"></td>'
			    +'  <td width=303 style="width:227pt"></td>'
			    +' </tr>'
			    +' <![endif]>'
			    +'</table>'

			    +'</div>'

    		   
    		   +'</div>'
				+'<div class="modal-footer">'
				+'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
				+'</div>'
				+'</div>'

				+'</div>'
				+'</div>'
    		   
    		   
    
         liquidMediumHtm +='<div><span>Select the valve size using the flow coefficient table :  For Cv table <a data-toggle="modal" data-target="#myModalCVLiquid" style="cursor: pointer;">click here</a></span>'
			       +'</div><br>'
			       
	     liquidMediumHtm +='<div><span>For N<sub>2</sub> table  <a data-toggle="modal" data-target="#myModalNLiquid"	style="cursor: pointer;">click here</a><span>'
			       +'</div><br>'	
         
	    		   
         liquidMediumHtm += '<span>Calculate the value of F<sub>p</sub> and enter here :&nbsp;&nbsp; </span><input id="fpVal" type="text" > <br> <button id="fpValBtn" class="btn-style">Submit</button><br><br>'
    		   
//	     liquidMediumHtm += '<h2>4. Determine &Delta;P<sub>max</sub>, the allowable sizing pressure drop.</h2><br>'	
//		     
//		      +'<span><kbd >&Delta;P<sub>max</sub> = F<sub>L</sub><sup>2</sup>(P<sub>1</sub> - F<sub>F</sub> * P<sub>V</sub>)</kbd></span><br><br><br>'
//		      
//		      +'<span>Note :Liquid critical pressure ratio factor for water <b>F<sub>F</sub> = 0.90</b></span><br>'
//		      +'<span>Recovery factor <b>F<sub>L</sub> = 0.84</b></span><br><br>'
//		      
//		      +'<span>Calculate the value of &Delta;P<sub>max</sub> and enter here :&nbsp;&nbsp; </span><input id="pmaxVal" type="text" > <b>psi</b> &nbsp;&nbsp;<button id="pmaxValBtn">Submit</button><br><br>'
//		      +'<div id="chokedFlow" ></div>'
        	 +'</section>'	
        	 +'</div></div>' // 3 opt col close

				 +'<div class="col-md-12" class="inside-col"> ' // 4 opt col start
		   
	      liquidMediumHtm += '<div id="LPstep4" style="display:none;"><h2>4. Determine FR, the Reynolds number factor.</h2>'
	    	  +'<section>'
		       +'<span>For water at the pressure drop given, <b>FR= 1.0</b></span> <br> <br>'	
		       +'</section>'
		   	+'</div></div>' // 4 opt col close

			 +'<div class="col-md-12" class="inside-col"> ' // 5 opt col start
			
		  liquidMediumHtm += '<div id="LPstep5" style="display:none;"><h2>5. Solve for Cv using the appropriate equation.</h2> <br>'
			  +'<section>'
			  				+'<img src="images/CvLiquidFormula.JPG"/><br>'
			  				
			  				
		  liquidMediumHtm +='<div><span>For N<sub>1</sub> table  <a data-toggle="modal" data-target="#myModalNLiquid"	style="cursor: pointer;">click here</a><span>'
						    +'</div><br>'	
								    
			  				+'<span>Calculate the value of Cv and enter here :&nbsp;&nbsp; </span><input id="cvVal" type="text" > '
//			  				
//							+'<br><span>For C<sub>v</sub> table <a data-toggle="modal" data-target="#myModalCVLiquid" style="cursor: pointer;">click here</a></span>'
//									    +'<br>'
				            +'<br><button id="cvValBtn" class="btn-style">Submit</button>'
								
							
						    +'</div>';
		
	       +'<section>'
	       +'</div></div>';
	       
	       liquidMediumHtm += '<div id="LPstep6" style="display:none;"><h2>6. Select the valve size using the flow coefficient table and the calculated Cv value</h2> <br>'	
		      +'<section>'
//				+'<span>Select the valve size using the flow coefficient table and enter here :&nbsp;&nbsp; </span><input id="cvValTable" type="text" >' 
//				+'<br><span>For C<sub>v</sub> table <a data-toggle="modal" data-target="#myModalCVLiquid" style="cursor: pointer;">click here</a></span>'
//			    +'<br>'
//				+'<br><span>For Cv table <a data-toggle="modal" data-target="#myModalCVGas" style="cursor: pointer;">click here</a></span><br>' 	
//	    	    +'<button id="cvValTableBtn" class="btn-style">Submit</button>'
	    	    +'<div id = "ansMessageDiv"></div>'
					   
  	+'</div>';
	   +'<section>'
	          +'</div></div>' // 6 opt col close
         
           liquidMediumHtm += '<div id="LiquidPropaneSubmitBtn" style="display:none;"><div class="buttonDiv">'
			  				+'<button id="nextLevel4">Next Level</button>'
			  				+'</div></div>'	
	       +'</div>'
		$("#flowMediumLiquidPropaneDiv").html(liquidMediumHtm);
		

		$('select#lpp2').on('change', function() {

			var p1 = parseInt($('#lpp1 option:selected').text());
			var p2 = parseInt($('#lpp2 option:selected').text());

			if (p1 <= p2) {
				alertify.alert("The value of P2 must be less than P1");
				$('#lpp2').val("-1");
				$("#lpdeltaP").html('');
			} else {
				lpdeltaP = p1 - p2;
				deltapL = lpdeltaP;
				$("#lpdeltaP").html(lpdeltaP + "&nbsp;psi");
			}
		});
		
		
		$('select#LPT1').on('change', function() {
			
			
			var p1 = parseInt($('#lpp1 option:selected').val());
			var p2 = parseInt($('#lpp2 option:selected').val());
			var FLQ = parseInt($('#flowMedLiquid option:selected').val());
		
			
			if(p1 != "-1" && p2 != "-1" && FLQ != "-1" ){
				
				
				$("#LPstep2").css("display","block");
		}else{
			ify.alert("Please select all the feilds in step 1");
		}
		
		});
		
		
		
		$("#LPEquationConstBtn").click(function() {
	    	   var equtionCons = parseInt($("#LPEquationConsN").val());
	    	   
	    	   if(equtionCons != 1){
	    		   alertify.alert("Please insert correct value.");
	    	   }else{
	    		   alertify.alert("Answer is correct.");
	    		   $("#LPstep3").css("display","block");
//	    		   $("#LPstep4").css("display","block");
	    	   }
	    	});

	$("#fpValBtn").click(function() {
			
			var fpValAns = parseFloat($("#fpVal").val());
//			var LN2 = $("#LPEquationConsN").val();
			
			if(fpValAns != "" && !isNaN(fpValAns)){
				if(LN2 != 0){
					var fpVal = Math.pow(1 + (sumLK / LN2) * Math.pow(((1.0)*(LCv)/ Math.pow(dInch,2)),2),-(1/2));
					fpValLiquidFinal = fpVal.toFixed(2);
					
					if(fpValAns == fpVal.toFixed(2) || fpValAns == fpVal.toFixed(3)){
						alertify.alert("Anwser is correct");
						liquidFlag = 0;
						 $("#LPstep4").css("display","block");
						 $("#LPstep5").css("display","block");
					}else{
						liquidFlag++;
						if (liquidFlag >= 3) {

							alertify.alert("Answer is Incorrect");
							alertify.alert("The correct answer is " + fpVal.toFixed(2));


						} else {
							alertify.alert("Answer is Incorrect");
						}
					}
					
				}else{
					alertify.alert("Please enter correct value for Equation Constant (N2)");
				}
				
			}else{
				
					alertify.alert("Please enter the answer in numeric only ");
				
			}
			
		});
		
		
		
	
	$("#cvValBtn").click(
			function() {

				var cvValAns = parseFloat($("#cvVal").val());
				
				
				var q = parseInt($('#flowMedLiquid option:selected').text());
				
				
				
				if(cvValAns != "" && !isNaN(cvValAns)){
					
					if(!isNaN(q)){
						if(fpValLiquidFinal != 0){
							if(deltapL != 0){
								
								var cvVal = ( q /( LN1 * fpValLiquidFinal * Math.sqrt(deltapL / LGf )));
									
							}else{
								alertify.alert("Please calulate the value of P1-P2 first.");
							}
						}else{
							alertify.alert("Please calulate the value of Fp first.");
						}
					}else{
						alertify.alert("Please select the q first");
					}
					
						
					if(cvValAns == cvVal.toFixed(2) || cvValAns == cvVal.toFixed(3)){
						alertify.alert("Anwser is correct");
 						$("#LPstep6").css("display","block");
						if(cvVal.toFixed(2) < 121){
							
							findTheCloserVal(LinearCharacteristicsArrayLiquid, cvVal.toFixed(2));
							
							
						}
						CvLiquidFlag = 0;
					}else{
						CvLiquidFlag++;
						if (CvLiquidFlag >= 3) {
							alertify.alert("Answer is Incorrect");
							alertify.alert("The correct answer is " + cvVal.toFixed(2));
						} else {
							alertify.alert("Answer is Incorrect");
						}
					}
				}else{
						alertify.alert("Please enter the answer in numeric only ");
				}
				
			

		});
	
	
	
	
	var findTheCloserVal =  function(arr, cvValAns) {
		
		//var cvValTableAnstemp = parseFloat($("#cvValTable").val());
	    //  goal = cvValTableAnstemp;

		  goal = cvValAns;
		  
		
		  var closest = arr.reduce(function(prev, curr) {
		    return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
		  });

		  if(FinalCVFlag != 0){
			  
			  
			  $("#ansMessageDiv").html("<br><span>Because this newly determined Cv is very close to the Cv used initially for this recalculation the valve sizing procedure is complete, and the conclusion is that an NPS "+NPSVal+" valve with Cv opened for maximum travel should be adequate for the required specifications. </span><br><br><span>For C<sub>v</sub> table <a data-toggle='modal' data-target='#myModalCVLiquid' style='cursor: pointer;'>click here</a></span>");
				
			  $("#LiquidPropaneSubmitBtn").css("display","block");
			  
		  }else{
			  
			  FinalCVFlag++;
			  NPSVal = LinearCharacteristicsJsonLiquid[closest];
			  $("#ansMessageDiv").html("<br><span>The required Cv of "+cvValAns +" less than the capacity of the assumed valve, which has a Cv of 121. Consider smaller size (NPS "+LinearCharacteristicsJsonLiquid[closest]+")  valve size and repeat the above procedure. <br>Please go to step 3 and Recalculate F<sub>p</sub>, assumed Cv value "+closest+" for NPS "+LinearCharacteristicsJsonLiquid[closest]+" </span><br><br><span>For C<sub>v</sub> table <a data-toggle='modal' data-target='#myModalCVLiquid' style='cursor: pointer;'>click here</a></span>");
//			  +'<br><span>For C<sub>v</sub> table <a data-toggle='modal' data-target='#myModalCVLiquid' style='cursor: pointer;'>click here</a></span>'
//			    +'<br>
			  
			  dInch = LinearCharacteristicsJsonLiquid[closest];
			  
			  var temp = '<span>&nbsp; &#931;k = 1.5 * ( 1 - d<sup>2</sup> / D<sup>2</sup> )<sup>2</sup>&nbsp;  where d = <span class="dInch">'+dInch+'</sub> inch & D = 8 inch</span><br>'
		       +'<span>&nbsp; &#931;k = 1.5 * ( 1 - <span class="dInch">'+dInch+'</sub><sup>2</sup> / 8<sup>2</sup> )<sup>2</sup>&nbsp;  </span><br>'
		       
		       +'<span>&nbsp; &#931;k = '+(1.5 * Math.pow((1 - ((dInch*dInch)/(8*8))),2)).toFixed(2) +'&nbsp;  </span><br></div>'
				  
		      sumLK = (1.5 * Math.pow((1 - ((dInch*dInch)/(8*8))),2)).toFixed(2);
			  
			  LCv = closest;
			  CvLiquidFlag = 0;
			  fpValLiquidFinal = 0;
			
				  
			  $("#fkDiv").html(temp);
			  
			  
		  }
		 
		 
	};
	
	
	$("#nextLevel4").click(function() {
		
		Level4_AssembleControlValve();
//		vlave();
		
	});	

	
	
	
		
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});   //END LINE