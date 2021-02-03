// JavaScript Document
$(function () {
	
	
	
	
	flowMediumSuperheatedSteam  = function() {
		
		var SteamMediumHtm ='<div class="container-fluid"> '//main div
			
			+'<div class="row">' //main row
		   +'<div class="col-md-12"> ' // 1 opn col start 
			
			
			+'<h2>1. Specify the necessary variables required to size the valve:</h2>'
			  +'<section>'
			  +'<span>Select Mass flow rate (w)</span>'
			+ ' <select class="" id="flowMedSteam" name="flowMedSteam" title="Choose Mass flow rate">'
			+ '<option value="-1">Choose Value</option>'
		
			for ( var key in MassFlowRate) {
				SteamMediumHtm  += "<option value= " + key + ">" + MassFlowRate[key]
						        + "</option>";
			}
		
		    SteamMediumHtm  +=  ' </select>&nbsp;<span>lb/h</span><br>'
			
			SteamMediumHtm += '<span>Select Upstream absolute static pressure(P<sub>1</sub>)</span>'
					+ ' <select class="" id="shp1" name="shp1" title="Choose p1">'
					+ '<option value="-1">Choose Value</option>'
				
					for ( var key in SHP1) {
						SteamMediumHtm  += "<option value= " + key + ">" + SHP1[key]
								+ "</option>";
					}
		    
			SteamMediumHtm +=  ' </select>&nbsp;<span>psia </span><br>'
					
			SteamMediumHtm += '<span>Select Downstream absolute static pressure(P<sub>2</sub>)</span>'
							+ '<select class="" id="shp2" name="shp2" title="Choose p2">'
							+ '<option value="-1">Choose Value</option>'
							for ( var key in SHP2) {
								SteamMediumHtm += "<option value= " + key + ">" + SHP2[key]
										+ "</option>";
							}
			
			SteamMediumHtm += ' </select>&nbsp;<span>psia </span><br>'
							
			SteamMediumHtm += ' <span>Pressure drop (P1-P2) across the valve(&Delta;P) = P<sub>1</sub> - P<sub>2</sub> = <span id="shdeltaP"></span></span><br>'
				
			SteamMediumHtm += ' <span>Ratio of pressure drop to upstream pressure (X) =  &Delta;P/ P<sub>1</sub> = <span id="ratioX"></span></span><br>'	

				
			SteamMediumHtm += ' <div id="p1Select" ></div><br>'
				
//			SteamMediumHtm += '<span>Select Absolute upstream temperature (T<sub>1</sub>)</span>'
//					   + '<select class="" id="ST1" name="ST1" title="Choose T1">'
//				       + '<option value="-1">Choose Value</option>'
//				      
//				       var p1Val = parseInt($('#p1 option:selected').text());
//				      
//						for ( var key in ST1) {
//							SteamMediumHtm += "<option value= " + key + ">" + ST1[key]
//							+ "</option>";
//						}
//			
//			SteamMediumHtm += '</select>&nbsp;<span><sup>o</sup>F </span><br>'
				
			SteamMediumHtm += ' <span>&nbsp;&nbsp;&gamma;<sub>1</sub> = Specific stream at inlet conditions = <span id="gammaVal"></span></span><br>'	
				
			SteamMediumHtm += ' <span>&nbsp;&nbsp;k = Ratio of specific heats (No dimension) = 1.28</span><br>'
				
//			Table for Equation Constants
			SteamMediumHtm += '<div id="myModalNSteam" class="modal fade" role="dialog">'
						+'<div class="modal-dialog">'
//							<!-- Modal content-->'
						+'<div class="modal-content">'
						+'<div class="modal-header">'
						+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
						+'<h4 class="modal-title">Equation Constants table</h4>'
						+'</div>'
						+'<div class="modal-body"	style="font-size: 12px; font-family: "Domine", serif;">'
						
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
				
						  +'</section>'
						+'</div>' // 1 opt col close
						
						+'<div class="col-md-12" > ' // 2 opt col start
				
			SteamMediumHtm += '<br><div id="shStep2" style="display:none;"><h2>2. Determine the appropriate equation constant, N, from given table equation constant</h2>'
				    +'<section>'
				       +'<input id="equationConsNS" type="text" class="col-md-4" >'
					   +'<span class="col-md-7">For N<sub>6</sub> table <a data-toggle="modal" data-target="#myModalNSteam"	style="cursor: pointer;">click here</a>'
				       +'</span> <button class="btn-style" id="steamEquationConstBtn">Check</button><br>'	
				       
//				       +'<span class="col-md-7">For table  <a data-toggle="modal" data-target="#myModalN"	style="cursor: pointer;">click here</a>'
//					      +'</span> <button class="btn-style" id="equationConstBtn">Check</button><br>'
//					      +'</section>'
				       
				       +'</section>'
				       +'</div></div>' // 2 opt clo close
		               
		               +'<div class="col-md-12" class="inside-col"> ' // 3 opt col start
				
		    SteamMediumHtm += '<div id="shStep3" style="display:none;"><h2>3. Calculate F<sub>p</sub> (Piping geomertry factor) </h2> '
		    	  +'<section>'
//		    SteamMediumHtm += '<span>&nbsp; &#931;k = K<sub>1</sub> + K<sub>2</sub> &nbsp; where K<sub>1</sub> = 1.5 </span><br>'
		    	       +'<span>&nbsp; &#931;k = 1.5 * ( 1 - d<sup>2</sup> / D<sup>2</sup> )<sup>2</sup>&nbsp;  where line size (D) = 6 inch & assume valve size (d) = 4 inch</span><br>'
		    	       +'<span>&nbsp; &#931;k = 1.5 * ( 1 - 4<sup>2</sup> / 6<sup>2</sup> )<sup>2</sup>&nbsp;  </span><br>'
		    	       +'<span>&nbsp; &#931;k = '+(1.5 * Math.pow((1 - ((4*4)/(6*6))),2)).toFixed(3) +'&nbsp;  </span><br>'
		    	       +'<span></span><br>'
		    	
		    		   +'<img src="images/fpFormula.JPG"/><br>'
		    		   
		    		   
		   SteamMediumHtm += '<div id="myModalCVSteam" class="modal fade" role="dialog">'
						+'<div class="modal-dialog" style="width:90%; padding:10px;">'
//						<!-- Modal content-->'
						+'<div class="modal-content" style="width: 100%;">'
						+'<div class="modal-header">'
						+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
						+'<h4 class="modal-title">Linear characteristics table</h4>'
						+'</div>'
					    +'<div class="modal-body"	style=" overflow:scroll; font-size: 12px; width:100%; font-family: "Domine", serif;">'
		    		   
		    SteamMediumHtm +='<div id="Steam_cv_table_updated_13578" align=center x:publishsource="Excel">'
		    		  
		    		   +'<table border=0 cellpadding=0 cellspacing=0 width=1496 style="border-collapse:'
		    		   +' collapse;table-layout:fixed;width:100%">'
		    		   +' <col width=69 style="mso-width-source:userset;mso-width-alt:2523;width:52pt">'
		    		   +' <col width=64 span=2 style="width:48pt">'
		    		   +' <col width=56 span=2 style="mso-width-source:userset;mso-width-alt:2048;'
		    		   +' width:42pt">'
		    		   +' <col width=87 style="mso-width-source:userset;mso-width-alt:3181;width:65pt">'
		    		   +' <col width=55 span=20 style="mso-width-source:userset;mso-width-alt:2011;'
		    		   +' width:41pt">'
		    		   +' <tr height=20 style="height:15.0pt">'
		    		   +'  <td rowspan=4 height=80 class=xl6413578 width=69 style="height:60.0pt;'
		    		   +'  width:52pt">Valve Size,<br>Inches<br>'
		    		   +'    </td>'
		    		   +'  <td colspan=2 rowspan=3 class=xl6413578 width=128 style="width:96pt">Port'
		    		   +'  <br>'
		    		   +'    Diameter</td>'
		    		   +'  <td colspan=2 rowspan=3 class=xl6413578 width=112 style="width:84pt">Maximum'
		    		   +'  <br>'
		    		   +'    Travel<font class="font513578"><sup>(2)</sup></font></td>'
		    		   +'  <td rowspan=3 class=xl6413578 width=87 style="width:65pt">Flow <br>'
		    		   +'    Coefficient</td>'
		    		   +'  <td colspan=19 rowspan=3 class=xl6513578 width=1045 style="width:779pt">Valve'
		    		   +'  Opening - Percent of Total Travel&nbsp;</td>'
		    		   +'  <td rowspan=4 class=xl6513578 width=55 style="width:41pt">&nbsp;FL<font'
		    		   +'  class="font513578"><sup>(1)</sup></font></td>'
		    		   +' </tr>'
		    		   +' <tr height=20 style="height:15.0pt">'
		    		   +' </tr>'
		    		   +' <tr height=20 style="height:15.0pt">'
		    		   +' </tr>'
		    		   +' <tr height=20 style="height:15.0pt">'
		    		   +'  <td height=20 class=xl6813578 style="height:15.0pt;border-top:none;'
		    		   +'  border-left:none">mm</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">Inches</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">mm</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">Inches</td>'
		    		   +'  <td class=xl6713578 style="border-top:none;border-left:none">&nbsp;</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">10</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">15</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">20</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">25</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">30</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">35</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">40</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">45</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">50</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">55</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">60</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">65</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">70</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">75</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">80</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">85</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">90</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">95</td>'
		    		   +'  <td class=xl6813578 style="border-top:none;border-left:none">100</td>'
		    		   +' </tr>'
		    		   +' <tr height=25 style="height:18.75pt">'
		    		   +'  <td rowspan=2 height=50 class=xl6613578 style="height:37.5pt;border-top:none">1'
		    		   +'  &amp; 1.25&nbsp;</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">&nbsp;33.3</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">&nbsp;1.3125</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">19</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">0.75&nbsp;</td>'
		    		   +'  <td class=xl6313578 style="border-top:none;border-left:none">C<font'
		    		   +'  class="font613578"><sub>v</sub></font></td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">3.21</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">4.36</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">5.5</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">6.84</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">8.18</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">9.54</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">10.9</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">12.02</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">13.2</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">14.1</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">15</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">15.95</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">16.9</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">17.75</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">18.6</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">19.25</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">19.9</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">20.25</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">20.6</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.84</td>'
		    		   +' </tr>'
		    		   +' <tr height=25 style="height:18.75pt">'
		    		   +'  <td height=25 class=xl6313578 style="height:18.75pt;border-top:none;'
		    		   +'  border-left:none">X<font class="font613578"><sub>T</sub></font></td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.34</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.49</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.644</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.57</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.494</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.502</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.509</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.52</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.532</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.56</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.58</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.595</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.61</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.62</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.629</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.629</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.628</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.63</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.636</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">- - -</td>'
		    		   +' </tr>'
		    		   +' <tr height=25 style="height:18.75pt">'
		    		   +'  <td rowspan=2 height=50 class=xl6613578 style="height:37.5pt;border-top:none">1.5&nbsp;</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">&nbsp;47.6</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">1.875&nbsp;</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">19&nbsp;</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">0.75&nbsp;</td>'
		    		   +'  <td class=xl6313578 style="border-top:none;border-left:none">C<font'
		    		   +'  class="font613578"><sub>v</sub></font></td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">4.23</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">6.04</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">7.84</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">9.82</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">11.8</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">13.8</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">15.8</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">18.1</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">20.4</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">22.9</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">25.3</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">27.8</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">30.3</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">32.5</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">34.7</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">35.95</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">37.2</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">38.2</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">39.2</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.82</td>'
		    		   +' </tr>'
		    		   +' <tr height=25 style="height:18.75pt">'
		    		   +'  <td height=25 class=xl6313578 style="height:18.75pt;border-top:none;'
		    		   +'  border-left:none">X<font class="font613578"><sub>T</sub></font></td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.656</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.69</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.709</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.73</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.758</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.77</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.799</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.769</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.738</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.7335</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.729</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.719</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.708</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.697</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.686</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.685</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.683</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.67</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.656</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">- - -</td>'
		    		   +' </tr>'
		    		   +' <tr height=25 style="height:18.75pt">'
		    		   +'  <td rowspan=2 height=50 class=xl6613578 style="height:37.5pt;border-top:none">&nbsp;2</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">&nbsp;58.7</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">2.3125</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">29</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">1.125</td>'
		    		   +'  <td class=xl6313578 style="border-top:none;border-left:none">C<font'
		    		   +'  class="font613578"><sub>v</sub></font></td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">7.87</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">11.94</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">16</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">20.45</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">24.9</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">29.15</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">33.4</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">37.45</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">42.1</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">46.95</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">51.8</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">56.9</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">62</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">63.2</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">68.1</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">69</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">70.6</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">71.7</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">72.9</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.77</td>'
		    		   +' </tr>'
		    		   +' <tr height=25 style="height:18.75pt">'
		    		   +'  <td height=25 class=xl6313578 style="height:18.75pt;border-top:none;'
		    		   +'  border-left:none">X<font class="font613578"><sub>T</sub></font></td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.641</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.681</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.72</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.724</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.728</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.748</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.767</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.78</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.793</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.774</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.754</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.719</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.683</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.671</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.658</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.655</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.652</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.645</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.638</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">- - -</td>'
		    		   +' </tr>'
		    		   +' <tr height=25 style="height:18.75pt">'
		    		   +'  <td rowspan=2 height=50 class=xl6613578 style="height:37.5pt;border-top:none">&nbsp;2.5</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">73</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">2.875</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">38</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">1.5</td>'
		    		   +'  <td class=xl6313578 style="border-top:none;border-left:none">C<font'
		    		   +'  class="font613578"><sub>v</sub></font></td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">9.34</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">15.47</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">21.6</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">28.55</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">35.5</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">42.5</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">49.5</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">56.1</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">62.7</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">68.4</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">74.1</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">78.9</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">83.6</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">88.6</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">93.5</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">97.7</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">102</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">105</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">108</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.81</td>'
		    		   +' </tr>'
		    		   +' <tr height=25 style="height:18.75pt">'
		    		   +'  <td height=25 class=xl6313578 style="height:18.75pt;border-top:none;'
		    		   +'  border-left:none">X<font class="font613578"><sub>T</sub></font></td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.68</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.67</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.66</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.652</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.644</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.657</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.669</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.672</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.674</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.69</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.706</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.611</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.716</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.702</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.687</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.68</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.658</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.65</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.641</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">- - -</td>'
		    		   +' </tr>'
		    		   +' <tr height=25 style="height:18.75pt">'
		    		   +'  <td rowspan=2 height=50 class=xl6613578 style="height:37.5pt;border-top:none">&nbsp;3</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">87.3</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">3.4375</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">38</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">1.5</td>'
		    		   +'  <td class=xl6313578 style="border-top:none;border-left:none">C<font'
		    		   +'  class="font613578"><sub>v</sub></font></td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">14.5</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">23.7</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">32.9</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">42.5</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">52.1</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">61.25</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">70.4</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">79.45</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">88.5</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">88.49</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">105</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">112</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">118</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">126</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">133</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">138</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">142</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">145</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">148</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.82</td>'
		    		   +' </tr>'
		    		   +' <tr height=25 style="height:18.75pt">'
		    		   +'  <td height=25 class=xl6313578 style="height:18.75pt;border-top:none;'
		    		   +'  border-left:none">X<font class="font613578"><sub>T</sub></font></td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.671</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.685</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.699</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.698</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.697</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.709</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.72</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.727</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.733</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.726</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.718</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.713</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.707</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.679</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.65</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.64</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.63</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.625</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.62</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">- - -</td>'
		    		   +' </tr>'
		    		   +' <tr height=25 style="height:18.75pt">'
		    		   +'  <td rowspan=2 height=50 class=xl6613578 style="height:37.5pt;border-top:none">&nbsp;4</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">111.1</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">4.375</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">51</td>'
		    		   +'  <td rowspan=2 class=xl6613578 style="border-top:none">2</td>'
		    		   +'  <td class=xl6313578 style="border-top:none;border-left:none">C<font'
		    		   +'  class="font613578"><sub>v</sub></font></td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">23.3</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">36.8</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">50.3</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">64.2</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">78.1</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">91.6</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">105</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">116</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">127</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">139</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">152</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">166</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">174</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">188</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">203</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">213</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">223</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">229.5</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">236</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.82</td>'
		    		   +' </tr>'
		    		   +' <tr height=25 style="height:18.75pt">'
		    		   +'  <td height=25 class=xl6313578 style="height:18.75pt;border-top:none;'
		    		   +'  border-left:none">X<font class="font613578"><sub>T</sub></font></td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.691</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.703</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.714</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.717</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.72</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.726</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.731</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.748</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.764</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.761</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.757</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.753</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.748</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.755</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.762</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.75</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.732</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.71</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">0.688</td>'
		    		   +'  <td class=xl6913578 style="border-top:none;border-left:none">- - -</td>'
		    		   +' </tr>'
		    		   +' <![if supportMisalignedColumns]>'
		    		   +' <tr height=0 style="display:none">'
		    		   +'  <td width=69 style="width:52pt"></td>'
		    		   +'  <td width=64 style="width:48pt"></td>'
		    		   +'  <td width=64 style="width:48pt"></td>'
		    		   +'  <td width=56 style="width:42pt"></td>'
		    		   +'  <td width=56 style="width:42pt"></td>'
		    		   +'  <td width=87 style="width:65pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
		    		   +'  <td width=55 style="width:41pt"></td>'
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

		    		   
		SteamMediumHtm +='<div><span>Select the valve size using the flow coefficient table :  For Cv table <a data-toggle="modal" data-target="#myModalCVSteam" style="cursor: pointer;">click here</a></span>'
				       +'</div><br>'
				       
		SteamMediumHtm +='<div><span>For N<sub>2</sub> table  <a data-toggle="modal" data-target="#myModalNSteam"	style="cursor: pointer;">click here</a><span>'
				       +'</div><br>'	
	         
		    		   
	    SteamMediumHtm += '<span>Calculate the value of F<sub>p</sub> and enter here :&nbsp;&nbsp; </span><input id="fpVal" type="text" > <br><button id="fpValBtn" class="btn-style">Submit</button><br><br>'
	    	       +'</section>'    
			    	 +'</div></div>' // 3 pot col close
				      
				      +'<div class="col-md-12" class="inside-col"> ' // 4 opt col start
	    SteamMediumHtm += '<div id="shStep4" style="display:none;"><h2>4. Determine Y, the expansion factor.</h2>'	    
	    	       +'<section>'    	
	    				+'<img src="images/YFormula.JPG"/><br>'   
	    				+'<span>where,</span><br>'
	    				+'<span>F<sub>k</sub> = k / 1.40</span><br>'
	    SteamMediumHtm += '<span>F<sub>k</sub> = 1.28 / 1.40</span><br>'
	    				Fk = (1.28 / 1.40).toFixed(2);
		SteamMediumHtm += '<span>F<sub>k</sub> = '+Fk+'</span><br>'
	    				+'<span>X = <span id="ratioXVal"></span>(This was calculated in step 1.)</span><br>'
	    				
	    				+'<img src="images/XtpFormula.JPG"/><br>'   
	    				+'<span>where,</span><br>'
	    				+'<span>N<sub>5</sub> = Please select N<sub>5</sub> from the table. For table <a data-toggle="modal" data-target="#myModalNSteam"	style="cursor: pointer;">click here</a></span><br>'
	    				+'<span>d = 4 inch</span><br>'
	    				+'<span>F<sub>p</sub> = determined in step 3</span><br>'
	    				+'<span>X<sub>T</sub> = Select from C<sub>V</sub> table. For X<sub>T</sub> table <a data-toggle="modal" data-target="#myModalCVSteam"	style="cursor: pointer;">click here</a></span><br>'
	    				+'<span>C<sub>V</sub> = Select from C<sub>V</sub> table. For Cv table <a data-toggle="modal" data-target="#myModalCVSteam"	style="cursor: pointer;">click here</a></span><br>'
	    				+'<span>and,</span><br>'
	    				+'<span>K<sub>i</sub> = K<sub>1</sub> + K<sub>B1</sub></span><br>'
	    SteamMediumHtm += '<img src="images/KiFormula.JPG" style="width: 196px;" /><br>'  
	    				Ki = (0.5 * Math.pow((1-((4*4)/(6*6))),2) + (1 - Math.pow((4/6),4))).toFixed(2);
		SteamMediumHtm += '<span>K<sub>i</sub> = '+Ki+'</span><br>'
//	    				+'<span>and,</span><br>'
//	    				+'<span>where D= 6 in</span><br>'
	    				+'<span>So:</span><br>'
	    				
	    SteamMediumHtm += '<span>Calculate the value of X<sub>TP</sub> and enter here :&nbsp;&nbsp; </span><input id="xtpVal" type="text" > <br> <button id="xtpValBtn" class="btn-style">Submit</button><br><br>'
	    			   
	    	           +'<span>Finally:</span><br>'
	    	           
	    SteamMediumHtm += '<span>Calculate the value of Y and enter here :&nbsp;&nbsp; </span><input id="YVal" type="text" > <br> <button id="YValBtn" class="btn-style">Submit</button><br><br>' 	     
	    	       
	    	       +'</section>'
				    	 +'</div></div>'// 4 opt col close 
					      
					      +'<div class="col-md-12" class="inside-col"> ' // 5 opt col start
	    	
	    SteamMediumHtm += '<div id="shStep5" style="display:none;"><h2>5. Solve for required C<sub>v</sub> using the appropriate equation.</h2>'	    
	    	       +'<section>'    
	    	         +'<img src="images/CvFormula.JPG"/> <br>'  
	    	         +'<span>Select the valve size using the flow coefficient table :  For Cv table <a data-toggle="modal" data-target="#myModalCVSteam" style="cursor: pointer;">click here</a></span>'
	    	              
	    SteamMediumHtm +='<div><span>For N<sub>6</sub> table  <a data-toggle="modal" data-target="#myModalNSteam"	style="cursor: pointer;">click here</a></span>'
	   				      +'</div><br>'
	   				      
	    SteamMediumHtm += '<span>Calculate the value of C<sub>v</sub> and enter here :&nbsp;&nbsp; </span><input id="scvVal" type="text" > <br> <button id="scvValBtn" class="btn-style">Submit</button><br><br>'	        
	    	  +'</section>'
				    	  +'</div></div>' // 5 opt clo close
					       
					       +'<div class="col-md-12" class="inside-col"> ' // 6 opt col start
					
	    	
	    SteamMediumHtm += '<div id="shStep6" style="display:none;"><h2>6. Select the valve size using the flow coefficient table and the calculated Cv value</h2> <br>'	
	    	+'<section>'
				+'<span>Select the valve size using the flow coefficient table and enter here :&nbsp;&nbsp; </span><input id="cvValTable" type="text" > '
				
				+' <br><span>For Cv table <a data-toggle="modal" data-target="#myModalCVSteam" style="cursor: pointer;">click here</a></span>' 	
				+'<br> <button id="cvValTableBtn" class="btn-style">Submit</button>'
	    	
				+'<div id = "ansmessagediv"></div>'	
	    	
	    	+'</div>';
		             +'</section>'
		                +'</div></div>' // 6 opt clo close
	       SteamMediumHtm += '<div id="steamSubmitBtn" style="display:none;"><div class="buttonDiv">'
			+'<button id="nextLevel4">Next Level</button>'
			+'</div></div>'	
	      

		$("#flowMediumSuperheatedSteamDiv").html(SteamMediumHtm);
		
		
		$('select#shp1').on('change', function() {
			$("#gammaVal").html("");
			
			
			var p1 = parseInt($('#shp1 option:selected').text());
			var p2 = parseInt($('#shp2 option:selected').text());
			
			if(p1 <= p2){
				alertify.alert("The value of P2 must be less than P1");
				$('#shp2').val("-1");
				$("#shdeltaP").html('');
			}else{
				 shdeltaP = p1-p2;
				 ratio = shdeltaP / p1;
				 ratioX = ratio.toFixed(2);
				$("#shdeltaP").html(shdeltaP +"&nbsp;psia");
				$("#ratioX").html(ratio.toFixed(2) +"&nbsp;");
				$("#ratioXVal").html(ratio.toFixed(2) +"&nbsp;");
			}
		
			
			var selectedP1 = null;
			
			var p1 = parseInt($('#shp1 option:selected').text());
			
			if(p1 == 400){
				selectedP1 = ST1;
			}else if(p1 == 600 || p1 == 800 || p1 == 1000){
				selectedP1 = T11;
			}else if(p1 == 1200){
				selectedP1 = T12;
			}else{
				alertify.alert("Please select p1");
			}
		
				var SteamMediumHtmSelect = '<span>Select Absolute upstream temperature (T<sub>1</sub>)</span>'
						   + '<select class="" id="ST1" name="ST1" title="Choose T1">'
					       + '<option value="-1">Choose Value</option>'
					  	
							for ( var key in selectedP1) {
								SteamMediumHtmSelect += "<option value= " + key + ">" + selectedP1[key]
								+ "</option>";
							}
	
				SteamMediumHtmSelect += '</select>&nbsp;<span><sup>o</sup>F </span><br>'
					
				$("#p1Select").html(SteamMediumHtmSelect);
				
				$('select#ST1').on('change', function() {
					
					
					var flowMedSteamW1 = parseInt($('#flowMedSteam option:selected').val());
				    var p11 = parseInt($('#shp1 option:selected').val());
				    var p22 = parseInt($('#shp2 option:selected').val());
				    var SST1 = parseInt($('#ST1 option:selected').val());
				    
					if(p11 != "-1" && p22 != "-1" && flowMedSteamW1 != "-1" && SST1 != "-1"){
						
						var p1 = parseInt($('#shp1 option:selected').text());
						
						var st1 = parseInt($('#ST1 option:selected').text());
						
						if(!isNaN(st1)){
							$("#gammaVal").html(SpecificWeight[p1+"-"+st1]+"&nbsp;<b>lb/fb<sup>3</sup3></b><br>");
							gammaVal = SpecificWeight[p1+"-"+st1];
						}else{
							alertify.alert("Please select T1")
							$("#gammaVal").html("");
						}
						
						 $("#shStep2").css("display","block");
						 
					}else{
						alertify.alert("Please select all the feilds in step 1");
					}
					
				});
		});
		
		
		$("#steamEquationConstBtn").click(function() {
	    	   var equtionCons = $("#equationConsNS").val();
	    	   
	    	   if(equtionCons != 63.3){
	    		   alertify.alert("Please insert correct value.");
	    	   }else{
	    		   alertify.alert("Answer is correct.");
	    		   $("#shStep3").css("display","block");
//	    		   $("#shStep4").css("display","block");
	    	   }
	    	});
		
		
		$('select#shp2').on('change', function() {
			
			var p1 = parseInt($('#shp1 option:selected').text());
			var p2 = parseInt($('#shp2 option:selected').text());
			
			
			if(!isNaN(p2)){
				if(p1 <= p2){
					alertify.alert("The value of P2 must be less than P1");
					$('#shp2').val("-1");
					$("#shdeltaP").html('');
				}else{
					 shdeltaP = p1-p2;
					 var ratio = shdeltaP / p1;
					 ratioX = ratio.toFixed(2);
					$("#shdeltaP").html(shdeltaP +"&nbsp;psia");
					$("#ratioX").html(ratio.toFixed(2) +"&nbsp;");
					$("#ratioXVal").html(ratio.toFixed(2) +"&nbsp;");
				}
			}else{
				alertify.alert("Please select P2");
				$("#shdeltaP").html("");
			}
			
		});
		
		
		
		$("#fpValBtn").click(function() {
			
			var fpValAns = parseFloat($("#fpVal").val());
			var SN2 = 890;
			
			var findCv = true;
			
			if(fpValAns != "" && !isNaN(fpValAns)){
				if(SN2 != 0){
					var fpVal = Math.pow(1 + (sumK / SN2) * Math.pow(((1.0)*(Cv)/ Math.pow(4,2)),2),-(1/2));
					fpValFianl = fpVal.toFixed(2);
					if(fpValAns == fpVal.toFixed(2) || fpValAns == fpVal.toFixed(3)){
						alertify.alert("Anwser is correct");
						steamFlag = 0;
						  $("#shStep4").css("display","block");
					}else{
						steamFlag++;
						if (steamFlag >= 3) {

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
		
		
		
	$("#xtpValBtn").click(function() {
			
			var xtpValAns = parseFloat($("#xtpVal").val());
			
			if(xtpValAns != "" && !isNaN(xtpValAns)){
				
				if(fpValFianl != 0 && Ki != 0){
					
					var xtpVal = (XT/Math.pow(fpValFianl,2)) * Math.pow( 1 + ((XT * Ki)/ SHN5) * Math.pow((Cv/(4*4)),2),-1).toFixed(2);
					xtpValFianl = xtpVal.toFixed(2);
					
				}else{
					if(fpValFianl == 0){
						alertify.alert("Please calculate Fp value first.");
					}else{
						alertify.alert("Something went wrong with Ki value.");
					}
				}
				
				if(xtpValAns == xtpVal.toFixed(2) || xtpValAns == xtpVal.toFixed(3)){
					alertify.alert("Anwser is correct");
					xtpFlag = 0;
				}else{
					xtpFlag++;
					if (xtpFlag >= 3) {
						alertify.alert("Answer is Incorrect");
						alertify.alert("The correct answer is " + xtpVal.toFixed(2));
					} else {
						alertify.alert("Answer is Incorrect");
					}
				}
			}else{
					alertify.alert("Please enter the answer in numeric only ");
			}
			
		});
		
		
	
	$("#YValBtn").click(function() {
		
		var YValAns = parseFloat($("#YVal").val());
		
		var xtpValAns = parseFloat($("#xtpVal").val());
		
		
		if(YValAns != "" && !isNaN(YValAns)){
			if(xtpValFianl != 0 ){
				var YVal = (1 - (ratioX / (3 * Fk * xtpValFianl)));
				YValFianl = YVal.toFixed(2);
			}else{
				alertify.alert("Please calulate the value of XPT first. ");
			}
			
			
			if(YValAns == YVal.toFixed(2) || YValAns == YVal.toFixed(3)){
				alertify.alert("Anwser is correct");
				YFlag = 0;
				 $("#shStep5").css("display","block");
			}else{
				YFlag++;
				if (YFlag >= 3) {
					alertify.alert("Answer is Incorrect");
					alertify.alert("The correct answer is " + YVal.toFixed(2));
				} else {
					alertify.alert("Answer is Incorrect");
				}
			}
		}else{
				alertify.alert("Please enter the answer in numeric only ");
		}
		
	});
	
		
	
	
	$("#scvValBtn").click(function() {
		
		var scvValAns = parseFloat($("#scvVal").val());
		
		
		if(scvValAns != "" && !isNaN(scvValAns)){
		
		    var flowMedSteamW = parseInt($('#flowMedSteam option:selected').text());
		    var N6 = parseFloat($('#equationConsNS').val());
		    var p1 = parseInt($('#shp1 option:selected').text());
			 
			if(!isNaN(flowMedSteamW)){
				if(!isNaN(N6)){
					if(fpValFianl != 0){
						if(YValFianl != 0){
							if(ratioX != 0){
								if(!isNaN(p1)){
									if(gammaVal != 0){
										
										var SCvVal = (flowMedSteamW / (N6 * fpValFianl * YValFianl * Math.sqrt(ratioX * p1 * gammaVal)) );
//										console.log(SCvVal);
										
									}else{
										alertify.alert("Please select the T1.");
									}
								}else{
									alertify.alert("Please select the p1.");
								}
							}else{
								alertify.alert("Please calculate value of X first.");
							}
						}else{
							alertify.alert("Please calculate value of Y first.");
						}
					}else{
						alertify.alert("Please calculate Fp value first.");
					}
				}else{
					alertify.alert("Please select appropriate equation constant, N. In the 2nd step. ");
				}
			}else{
				alertify.alert("Please select the value of w first. ");
			}
			
			
			if(scvValAns == SCvVal.toFixed(2) || scvValAns == SCvVal.toFixed(3)){
				alertify.alert("Anwser is correct");
				scvFlag = 0;
				 $("#shStep6").css("display","block");
				 $("#steamSubmitBtn").css("display","block");
			}else{
				scvFlag++;
				if (scvFlag >= 3) {
					alertify.alert("Answer is Incorrect");
					alertify.alert("The correct answer is " + SCvVal.toFixed(2));
				} else {
					alertify.alert("Answer is Incorrect");
				}
			}
		}else{
				alertify.alert("Please enter the answer in numeric only ");
		}
		
	});
	
	
	$("#cvValTableBtn").click(function() {
		
		var cvValAns = parseFloat($("#scvVal").val());
		var cvValTableAns = parseFloat($("#cvValTable").val());
		
		var findCv = true;
		
		if(cvValAns != "" && !isNaN(cvValAns) && cvValTableAns != "" && !isNaN(cvValTableAns) ){
			
			var n = LinearCharacteristicsArraySteam.length; 
			
			var x = cvValTableAns;
	
			
			findTheCloserVal(LinearCharacteristicsArraySteam,cvValTableAns,cvValAns)
		}else{
			
			if(isNaN(cvValTableAns)){
				alertify.alert("Please enter the answer in numeric only ");
			}
			
		}
		
	});
	
	
	var findTheCloserVal =  function(arr, cvTable, cvValAns) {
		
		  goal = cvValAns;
		
		  var closest = arr.reduce(function(prev, curr) {
		    return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
		  });

		  if(cvTable == closest){
			  flag = 0
			  alertify.alert("Answer is correct..")
			  findPercentageForClosetValue(closest);
		  }else{
			  if(flag >= 3){
				  alertify.alert("Answer is Incorrect..")
				   alertify.alert("Correct answer is "+closest)
				   
			  }else{
				  alertify.alert("Answer is Incorrect..");
				  flag++;
			  }
			 
		  }
	};
	
	

	var findPercentageForClosetValue = function(closest){
		
		
		var TotaltravelpercentageArray = []; 
		var TTP;
		var steamValveInch = null;
		
		
		if(TotalTravelForPerc10_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(10);
		}
		
		if(TotalTravelForPerc15_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(15);
		}
		
		if(TotalTravelForPerc20_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(20);
		}
		if(TotalTravelForPerc25_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(25);
		}
		if(TotalTravelForPerc30_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(30);
		}
		if(TotalTravelForPerc35_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(35);
		}
		if(TotalTravelForPerc40_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(40);
		}
		if(TotalTravelForPerc45_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(45);
		}
		if(TotalTravelForPerc50_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(50);
		}
		if(TotalTravelForPerc55_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(55);
		}
		if(TotalTravelForPerc60_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(60);
		}
		if(TotalTravelForPerc65_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(65);
		}
		if(TotalTravelForPerc70_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(70);
		}
		if(TotalTravelForPerc75_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(75);
		}
		if(TotalTravelForPerc80_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(80);
		}
		if(TotalTravelForPerc85_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(85);
		}
		if(TotalTravelForPerc90_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(90);
		}
		if(TotalTravelForPerc95_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(95);
		}
		if(TotalTravelForPerc100_ArraySteam.includes(closest)){
			TotaltravelpercentageArray.push(100);
		}
		
		
		if(steamValveSizeInches1_Array.includes(closest)){
			valveInch = '1 or 1.25 inch';
		}
		if(steamValveSizeInches1andHalf_Array.includes(closest)){
			valveInch = '1.5 inch';
		}
		if(steamValveSizeInches2_Array.includes(closest)){
			valveInch = '2 inch';
		}
		if(steamValveSizeInches2andHalf_Array.includes(closest)){
			valveInch = '2.5 inch';
		}
		if(steamValveSizeInches3_Array.includes(closest)){
			valveInch = '3 inch';
		}
		if(steamValveSizeInches4_Array.includes(closest)){
			steamValveInch = '4 inch';
		}
		
		
		if(TotaltravelpercentageArray.length > 0){
			
			TTP = Math.max(...TotaltravelpercentageArray);
			
		}else{
		
			TTP = TotaltravelpercentageArray[0];

		}
		
		
		var ansmessagehtm = '<p><b>An NPS '+steamValveInch+' valve with linear cage has C<sub>V</sub> of '
							+closest
							+' at '
							+TTP
							+' % travel & should be satisfactory from sizing standard.</b></p>'
		
		
	    $("#ansmessagediv").html(ansmessagehtm);	
		
		
		
	};
	
	
	
	$("#nextLevel4").click(function() {
		
		Level4_AssembleControlValve();
//		vlave();
		
	});
		
	};
	
	
	
	
	
	
	
	
});   //END LINE