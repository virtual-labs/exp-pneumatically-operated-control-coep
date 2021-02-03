// JavaScript Document
$(function () {
	
	
	var FL = 0.84;
	var Ff = 0.90;
	var flag = 0;
	var deltap = 0;
	var FP = 1.0;
	var FR = 1.0;
	var dpmax = 0;
	var cvflag = 0;
	var cvValCorrectAnsFlag = false;
	var returnVal = 0;
	
flowMediumWater = function() {
		
		var waterMediumHtm = '<div class="container-fluid"> '//main div
			
			+'<div class="row">' //main row
		   +'<div class="col-md-12" class="inside-col"> ' // 1 opn col start
		   
		   +'<h2>1. Specify the necessary variables required to size the valve:</h2> <section><span>Select Volume rate of water (q)</span>'
			+ '  &nbsp;<select class="" id="flowMedWater" name="flowMedWater" title="Choose Volume rate of water">'
			+ '<option value="-1">Choose Value</option>'
			for ( var key in volumeRateOfFlow) {
				waterMediumHtm  += "<option value= " + key + ">" + volumeRateOfFlow[key]
						+ "</option>";
			}
		
		    waterMediumHtm  +=  '</select>&nbsp;<span>gpm</span><br>'
			
			waterMediumHtm += '<span>Select Upstream absolute static pressure(P<sub>1</sub>)</span>'
					+ '  &nbsp;<select class="" id="p1" name="p1" title="Choose p1">'
					+ '<option value="-1">Choose Value</option>'
					for ( var key in P1) {
						waterMediumHtm  += "<option value= " + key + ">" + P1[key]
								+ "</option>";
					}
			waterMediumHtm +=  ' </select>&nbsp;<span>psia </span><br>'
					
			waterMediumHtm += '<span>Select Downstream absolute static pressure(P<sub>2</sub>)</span>'
							+ ' &nbsp;<select class="" id="p2" name="p2" title="Choose p2">'
							+ '<option value="-1">Choose Value</option>'
							for ( var key in P2) {
								waterMediumHtm += "<option value= " + key + ">" + P2[key]
										+ "</option>";
							}
			waterMediumHtm += ' </select>&nbsp;<span>psia </span><br>'
							
			waterMediumHtm += ' <span>Pressure drop (P1-P2) across the valve(&Delta;P) = P<sub>1</sub> - P<sub>2</sub> = <span id="deltaP"></span></span><br>'
			
			waterMediumHtm += '<span>Select Absolute upstream temperature (T<sub>1</sub>)</span>'
						   + '  &nbsp;<select class="" id="T1" name="T1" title="Choose T1">'
					       + '<option value="-1">Choose Value</option>'
							for ( var key in T1,GF,PV) {
								waterMediumHtm += "<option value= " + key + " gfVal= " + GF[key] + "  pvVal= " + PV[key] + ">" + T1[key]
								+ "</option>";
							}
			waterMediumHtm += '</select>&nbsp;<span><sup>o</sup>F </span>'
				
				
//				Table for GF
				waterMediumHtm += '<div id="myModalGF" class="modal fade" role="dialog">'
						+'<div class="modal-dialog">'
//							<!-- Modal content-->'
						+'<div class="modal-content">'
						+'<div class="modal-header">'
						+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
						+'<h4 class="modal-title">Liquid specific gravity (ratio of density of liquid at flowing temperature to density of water at 60<sup>o</sup>F),dimensionless (GF) table</h4>'
						+'</div>'
						+'<div class="modal-body"	style="font-size: 12px; font-family: "Domine", serif;">'
						
						+ '<div><table class="table" style="width:50%; margin:0 25%;"><thead><tr>'
						+ '<th>Temperature (<sup>o</sup>F)</th>'
						+ '<th>Specific Gravity at reference temp (60<sup>o</sup>F)</th>'
						
						+ '</tr></thead><tbody>'
						+ '<tr><td>100</td><td>0.9593</td></tr>'
						+ '<tr><td>120</td><td>0.944</td></tr>'
						+ '<tr><td>140</td><td>0.927</td></tr>'
						+ '<tr><td>160</td><td>0.9083</td></tr>'
						+ '<tr><td>180</td><td>0.8879</td></tr>'
						+ '<tr><td>200</td><td>0.8655</td></tr>'
						+ '<tr><td>220</td><td>0.841</td></tr>'
						+ '<tr><td>240</td><td>0.8142</td></tr>'
						+ '<tr><td>260</td><td>0.7844</td></tr>'
						+ '<tr><td>280</td><td>0.751</td></tr>'
						+ '<tr><td>300</td><td>0.7128</td></tr>'
						
						+ '</tbody></table></div>'
						
						+'</div>'
						+'<div class="modal-footer">'
						+'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
						+'</div>'
						+'</div>'

						+'</div>'
						+'</div><br>'
			
			waterMediumHtm += '<span>Value of Liquid specific gravity (ratio of density of liquid at flowing temperature to density of water at 60<sup>o</sup>F),dimensionless (G<sub>F</sub>)</span><br>'
			     
			      +'<input id="gf" type="text" class="col-md-4" disabled>'
			      
				  +'<span  class="col-md-7">For table  <a data-toggle="modal" data-target="#myModalGF"	style="cursor: pointer;">click here</a>'
			      +'</span>'
			      +'<br/>'
			      
//					Table for GF
					waterMediumHtm += '<div id="myModalPV" class="modal fade" role="dialog">'
							+'<div class="modal-dialog">'
//								<!-- Modal content-->'
							+'<div class="modal-content">'
							+'<div class="modal-header">'
							+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
							+'<h4 class="modal-title">Liquid specific gravity (ratio of density of liquid at flowing temperature to density of water at 60<sup>o</sup>F),dimensionless (G<sub>F</sub>) table</h4>'
							+'</div>'
							+'<div class="modal-body"	style="font-size: 12px; font-family: "Domine", serif;">'
							
							+ '<div><table class="table" style="width:50%; margin:0 25%;"><thead><tr>'
							+ '<th>Temperature (<sup>o</sup>F)</th>'
							+ '<th>Vapor pressure PSIA</th>'
							
							+ '</tr></thead><tbody>'
							+ '<tr><td>100</td><td>0.949</td></tr>'
							+ '<tr><td>120</td><td>1.692</td></tr>'
							+ '<tr><td>140</td><td>2.889</td></tr>'
							+ '<tr><td>160</td><td>4.741</td></tr>'
							+ '<tr><td>180</td><td>7.510</td></tr>'
							+ '<tr><td>200</td><td>11.526</td></tr>'
							+ '<tr><td>220</td><td>17.19</td></tr>'
							+ '<tr><td>240</td><td>24.97</td></tr>'
							+ '<tr><td>260</td><td>35.43</td></tr>'
							+ '<tr><td>280</td><td>49.20</td></tr>'
							+ '<tr><td>300</td><td>67.01</td></tr>'
							
							+ '</tbody></table></div>'
							
							+'</div>'
							+'<div class="modal-footer">'
							+'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
							+'</div>'
							+'</div>'

							+'</div>'
							+'</div><br>'
				
			waterMediumHtm += '<span>Value of Vapor pressure absolute of liquid at inlet temperature (P<sub>V</sub>)  </span><br>'
				     
				 +'<input id="pv" type="text" disabled class="col-md-4">&nbsp;<span class="col-md-1">psia </span>'
					  +'<span class="col-md-6">For table  <a data-toggle="modal" data-target="#myModalPV"	style="cursor: pointer;">click here</a>'
				      +'</span><br>'
				      +'</br>'
//					Table for Equation Constants
					waterMediumHtm += '<div id="myModalN" class="modal fade" role="dialog">'
							+'<div class="modal-dialog">'
//								<!-- Modal content-->'
							+'<div class="modal-content">'
							+'<div class="modal-header">'
							+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
							+'<h4 class="modal-title">Equation Constants table</h4>'
							+'</div>'
							+'<div class="modal-body"	style="font-size: 12px; font-family: "Domine", serif; margin:5px;">'
							
							+ '<div><table class="table"><thead><tr>'
							+ '<th class="width20">Numerical Constantwith Subscript</th>'
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
								
								 +'<div class="col-md-12" class="inside-col"> ' // 2 opt col start
								 
								 
								 
				waterMediumHtm += '<div id="step2" style="display:none;"><h2>2. Determine the appropriate equation constant, N, from given table equation constant</h2>'
					  +'<section>'
					+'<input id="equationConsN" type="text" class="col-md-4" >'
					  +'<span class="col-md-7">For N<sub>1</sub> table  <a data-toggle="modal" data-target="#myModalN"	style="cursor: pointer;">click here</a>'
				      +'</span> <button class="btn-style" id="equationConstBtn">Check</button><br>'
				      +'</section>'
				               +'</div></div>' // 2 opt clo close
				               
				               +'<div class="col-md-12" class="inside-col"> ' // 3 opt col start
				              
			    waterMediumHtm += '</br><div id="step3" style="display:none;"><h2>3. Determine F<sub>P</sub>, the piping geometry factor.</h2>'	
			    	  +'<section>'
			    	+'<span>Assume piping size nearly same as the valve size, therefore <B>F<sub>P</sub> = 1.0</B></span><br><br>'	
			    	  +'</section>'
				      +'</div></div>' // 3 pot col close
				      
				      +'<div class="col-md-12" class="inside-col"> ' // 4 opt col start
				waterMediumHtm += '<div id="step4" style="display:none;"><h2>4. Determine &Delta;P<sub>max</sub>, the allowable sizing pressure drop.</h2>'	
					  +'<section>'
				      +'<br><span><kbd >&Delta;P<sub>max</sub> = F<sub>L</sub><sup>2</sup>(P<sub>1</sub> - F<sub>F</sub> * P<sub>V</sub>)</kbd></span><br><br>'
				      
				      +'<span>Note :Liquid critical pressure ratio factor for water <b>F<sub>F</sub> = 0.90</b></span><br>'
				      +'<span>Recovery factor <b>F<sub>L</sub> = 0.84</b></span><br><br>'
				      
				      +'<span>Calculate the value of &Delta;P<sub>max</sub> and enter here :&nbsp;&nbsp; </span><input id="pmaxVal" type="text" > <span>psi</span> <br/><button class="btn-style" id="pmaxValBtn">Submit</button><br><br>'
				      +'<div id="chokedFlow" ></div>'
				      
				      +'</section>'
				      +'</div></div>'// 4 opt col close 
				      
				      +'<div class="col-md-12" class="inside-col"> ' // 5 opt col start
				      
			    waterMediumHtm += '<div id="step5" style="display:none;"><h2>5. Determine FR, the Reynolds number factor.</h2>'
			    	  +'<section>'
				       +'<span>For water at the pressure drop given, <b>FR= 1.0</b></span> <br><br>'
				       +'</section>'
				       +'</div></div>' // 5 opt clo close
				       
				       +'<div class="col-md-12" class="inside-col"> ' // 6 opt col start
				
				waterMediumHtm += '<div id="step6" style="display:none;"><h2>6. Solve for required C<sub>v</sub> using <span style="color: #fff" id="step6Value"></span>.</h2>'	
					  +'<section>'
					   +'<br><span><kbd id = "cvformula">C<sub>V</sub> = q / [N<sub>1</sub> * F<sub>P</sub> * F<sub>R</sub> (&radic;(&Delta;P<sub>max</sub> / G<sub>f</sub>))] </kbd></span><br><br> </span>'
					
					  +'<span>Calculate the value of C<sub>V</sub> and enter here :&nbsp;&nbsp; </span><input id="cvVal" type="text" > <br/><button class="btn-style" id="cvValBtn">Submit</button><br><br>'
				       
//						Table for Linear characteristics CV
						waterMediumHtm += '<div id="myModalCV" class="modal fade" role="dialog"  style="width:100%;">'
								+'<div class="modal-dialog"  style="width:100%;">'
//									<!-- Modal content-->'
								+'<div class="modal-content" style="width:100%;">'
								+'<div class="modal-header">'
								+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
								+'<h4 class="modal-title">Linear characteristics table</h4>'
								+'</div>'
								+'<div class="modal-body"	style="overflow: scroll; font-size: 12px; font-family: "Domine", serif;  ">'
						
								+'<div id="CV_Water_update_11914" align=center x:publishsource="Excel">'
								+''
								+'<table border=0 cellpadding=0 cellspacing=0 width=1471 style="border-collapse:'
								+' collapse;table-layout:fixed;width:100%">'
								+' <col width=84 style="mso-width-source:userset;mso-width-alt:2688;width:63pt">'
								+' <col width=70 style="mso-width-source:userset;mso-width-alt:2240;width:53pt">'
								+' <col width=71 style="mso-width-source:userset;mso-width-alt:2272;width:53pt">'
								+' <col width=59 style="mso-width-source:userset;mso-width-alt:1888;width:44pt">'
								+' <col width=65 style="mso-width-source:userset;mso-width-alt:2080;width:49pt">'
								+' <col width=88 style="mso-width-source:userset;mso-width-alt:2816;width:66pt">'
								+' <col width=47 span=2 style="mso-width-source:userset;mso-width-alt:1504;'
								+' width:35pt">'
								+' <col width=45 style="mso-width-source:userset;mso-width-alt:1440;width:34pt">'
								+' <col width=53 style="mso-width-source:userset;mso-width-alt:1696;width:40pt">'
								+' <col width=50 style="mso-width-source:userset;mso-width-alt:1600;width:38pt">'
								+' <col width=54 style="mso-width-source:userset;mso-width-alt:1728;width:41pt">'
								+' <col width=48 style="mso-width-source:userset;mso-width-alt:1536;width:36pt">'
								+' <col width=60 style="mso-width-source:userset;mso-width-alt:1920;width:45pt">'
								+' <col width=54 style="mso-width-source:userset;mso-width-alt:1728;width:41pt">'
								+' <col width=57 style="mso-width-source:userset;mso-width-alt:1824;width:43pt">'
								+' <col width=50 style="mso-width-source:userset;mso-width-alt:1600;width:38pt">'
								+' <col width=52 style="mso-width-source:userset;mso-width-alt:1664;width:39pt">'
								+' <col width=46 style="mso-width-source:userset;mso-width-alt:1472;width:35pt">'
								+' <col width=52 style="mso-width-source:userset;mso-width-alt:1664;width:39pt">'
								+' <col width=49 style="mso-width-source:userset;mso-width-alt:1568;width:37pt">'
								+' <col width=55 style="mso-width-source:userset;mso-width-alt:1760;width:41pt">'
								+' <col width=51 style="mso-width-source:userset;mso-width-alt:1632;width:38pt">'
								+' <col width=55 style="mso-width-source:userset;mso-width-alt:1760;width:41pt">'
								+' <col width=49 style="mso-width-source:userset;mso-width-alt:1568;width:37pt">'
								+' <col width=60 style="mso-width-source:userset;mso-width-alt:1920;width:45pt">'
								+' <tr height=19 style="height:14.25pt">'
								+'  <td colspan=26 rowspan=2 height=38 class=xl6511914 width=1471'
								+'  style="border-right:.5pt solid black;border-bottom:.5pt solid black;'
								+'  height:28.5pt;width:1106pt">Linear characteristics</td>'
								+' </tr>'
								+' <tr height=19 style="height:14.25pt">'
								+' </tr>'
								+' <tr height=19 style="height:14.25pt">'
								+'  <td rowspan=4 height=97 class=xl7111914 width=84 style="height:72.75pt;'
								+'  border-top:none;width:63pt">Valve Size,<br>Inches<br>'
								+'    </td>'
								+'  <td colspan=2 rowspan=3 class=xl7111914 width=141 style="width:106pt">Port'
								+'  <br>'
								+'    Diameter</td>'
								+'  <td colspan=2 rowspan=3 class=xl7111914 width=124 style="width:93pt">Maximum'
								+'  <br>'
								+'    Travel<font class="font511914"><sup>(2)</sup></font></td>'
								+'  <td rowspan=3 class=xl7111914 width=88 style="border-top:none;width:66pt">Flow'
								+'  <br>'
								+'    Coefficient</td>'
								+'  <td colspan=19 rowspan=3 class=xl7211914>Valve Opening-Percent of Total'
								+'  Travel&nbsp;</td>'
								+'  <td rowspan=4 class=xl7211914 style="border-top:none">&nbsp;FL<font'
								+'  class="font511914"><sup>(1)</sup></font></td>'
								+' </tr>'
								+' <tr height=19 style="height:14.25pt">'
								+' </tr>'
								+' <tr height=25 style="mso-height-source:userset;height:18.75pt">'
								+' </tr>'
								+' <tr height=34 style="mso-height-source:userset;height:25.5pt">'
								+'  <td height=34 class=xl7611914 style="height:25.5pt;border-top:none;'
								+'  border-left:none">mm</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">Inches</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">mm</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">Inches</td>'
								+'  <td class=xl7511914 style="border-top:none;border-left:none">&nbsp;</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">10</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">15</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">20</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">25</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">30</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">35</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">40</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">45</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">50</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">55</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">60</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">65</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">70</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">75</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">80</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">85</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">90</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">95</td>'
								+'  <td class=xl7611914 style="border-top:none;border-left:none">100</td>'
								+' </tr>'
								+' <tr height=37 style="mso-height-source:userset;height:27.75pt">'
								+'  <td height=37 class=xl6411914 style="height:27.75pt;border-top:none">1 &amp;'
								+'  1.25&nbsp;</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">&nbsp;33.3</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">&nbsp;1.3125</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">19</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">0.75&nbsp;</td>'
								+'  <td class=xl7711914 style="border-top:none;border-left:none">C<font'
								+'  class="font611914"><sub>v</sub></font></td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">3.21</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">4.36</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">5.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">6.84</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">8.18</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">9.54</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">10.9</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">12.05</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">13.2</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">14.1</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">15</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">15.95</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">16.9</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">17.75</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">18.6</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">19.25</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">19.9</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">20.25</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">20.6</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">0.84</td>'
								+' </tr>'
								+' <tr height=37 style="mso-height-source:userset;height:27.75pt">'
								+'  <td rowspan=2 height=73 class=xl6411914 style="height:54.75pt;border-top:'
								+'  none">1.5&nbsp;</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">&nbsp;47.6</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">1.875&nbsp;</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">19&nbsp;</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">0.75&nbsp;</td>'
								+'  <td class=xl7711914 style="border-top:none;border-left:none">C<font'
								+'  class="font611914"><sub>v</sub></font></td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">4.23</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">6.04</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">7.84</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">9.82</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">11.8</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">13.8</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">15.8</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">18.10</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">20.4</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">22.85</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">25.3</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">27.8</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">30.3</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">32.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">34.7</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">35.95</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">37.2</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">38.2</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">39.2</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">0.82</td>'
								+' </tr>'
								+' <tr height=36 style="height:27.0pt">'
								+'  <td height=36 class=xl6311914 width=70 style="height:27.0pt;border-top:none;'
								+'  border-left:none;width:53pt">33.3 <br>'
								+'    (3)</td>'
								+'  <td class=xl6311914 width=71 style="border-top:none;border-left:none;'
								+'  width:53pt">1.3125 <br>'
								+'    (3)</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">19&nbsp;</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">&nbsp;0.75</td>'
								+'  <td class=xl7711914 style="border-top:none;border-left:none">C<font'
								+'  class="font611914"><sub>v</sub></font></td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">2.92</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">4.31</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">5.7</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">7.38</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">9.05</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">10.78</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">12.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">14.05</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">15.6</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">17.05</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">18.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">19.8</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">21.1</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">22.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">23.9</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">25.35</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">26.8</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">28.00</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">29.2</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">0.91</td>'
								+' </tr>'
								+' <tr height=37 style="mso-height-source:userset;height:27.75pt">'
								+'  <td rowspan=2 height=73 class=xl6411914 style="height:54.75pt;border-top:'
								+'  none">&nbsp;2</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">&nbsp;58.7</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">2.3125</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">29</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">1.125</td>'
								+'  <td class=xl7711914 style="border-top:none;border-left:none">C<font'
								+'  class="font611914"><sub>v</sub></font></td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">7.87</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">11.94</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">16</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">20.45</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">24.9</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">29.15</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">33.4</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">37.75</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">42.1</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">46.95</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">51.8</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">56.9</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">62</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">65.05</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">68.1</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">69.35</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">70.6</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">71.75</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">72.9</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">0.77</td>'
								+' </tr>'
								+' <tr height=36 style="height:27.0pt">'
								+'  <td height=36 class=xl6311914 width=70 style="height:27.0pt;border-top:none;'
								+'  border-left:none;width:53pt">33.3 <br>'
								+'    (3)</td>'
								+'  <td class=xl6311914 width=71 style="border-top:none;border-left:none;'
								+'  width:53pt">1.3125 <br>'
								+'    (3)</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">19&nbsp;</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">&nbsp;0.75</td>'
								+'  <td class=xl7711914 style="border-top:none;border-left:none">C<font'
								+'  class="font611914"><sub>v</sub></font></td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">3.53</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">4.95</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">6.36</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">8.14</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">9.92</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">11.61</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">13.3</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">14.9</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">16.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">18.1</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">19.7</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">21.2</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">22.7</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">24.15</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">25.6</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">27.45</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">29.3</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">31.3</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">33.3</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">0.87</td>'
								+' </tr>'
								+' <tr height=37 style="mso-height-source:userset;height:27.75pt">'
								+'  <td rowspan=2 height=77 class=xl6411914 style="height:57.75pt;border-top:'
								+'  none">&nbsp;2.5</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">73</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">2.875</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">38</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">1.5</td>'
								+'  <td class=xl7711914 style="border-top:none;border-left:none">C<font'
								+'  class="font611914"><sub>v</sub></font></td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">9.34</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">15.47</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">21.6</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">28.55</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">35.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">42.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">49.5</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">56.10</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">62.7</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">68.4</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">74.1</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">78.85</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">83.6</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">88.55</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">93.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">97.75</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">102</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">105.2</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">108</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">0.81</td>'
								+' </tr>'
								+' <tr height=40 style="mso-height-source:userset;height:30.0pt">'
								+'  <td height=40 class=xl6311914 width=70 style="height:30.0pt;border-top:none;'
								+'  border-left:none;width:53pt">47.6 <br>'
								+'    (3)</td>'
								+'  <td class=xl6311914 width=71 style="border-top:none;border-left:none;'
								+'  width:53pt">1.875<br>'
								+'    (3)</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">19</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">0.75</td>'
								+'  <td class=xl7711914 style="border-top:none;border-left:none">C<font'
								+'  class="font611914"><sub>v</sub></font></td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">4.1</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">6.10</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">8.09</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">10.2</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">12.3</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">14.50</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">16.7</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">18.9</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">21.1</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">23.95</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">26.8</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">30.25</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">33.7</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">37.50</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">41.3</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">45.25</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">49.2</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">53.10</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">57</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">0.84</td>'
								+' </tr>'
								+' <tr height=35 style="mso-height-source:userset;height:26.25pt">'
								+'  <td rowspan=2 height=71 class=xl6411914 style="height:53.25pt;border-top:'
								+'  none">&nbsp;3</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">87.3</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">3.4375</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">38</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">1.5</td>'
								+'  <td class=xl7711914 style="border-top:none;border-left:none">C<font'
								+'  class="font611914"><sub>v</sub></font></td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">14.5</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">23.70</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">32.9</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">42.50</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">52.1</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">61.25</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">70.4</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">79.45</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">88.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">96.75</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">105</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">111.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">118</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">125.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">133</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">137.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">142</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">145</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">148</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">0.82</td>'
								+' </tr>'
								+' <tr height=36 style="height:27.0pt">'
								+'  <td height=36 class=xl6311914 width=70 style="height:27.0pt;border-top:none;'
								+'  border-left:none;width:53pt">58.7<br>'
								+'    (3)</td>'
								+'  <td class=xl6311914 width=71 style="border-top:none;border-left:none;'
								+'  width:53pt">2.3125<br>'
								+'    (3)</td>'
								+'  <td class=xl6311914 width=59 style="border-top:none;border-left:none;'
								+'  width:44pt">&nbsp;29</td>'
								+'  <td class=xl6311914 width=65 style="border-top:none;border-left:none;'
								+'  width:49pt">1.125</td>'
								+'  <td class=xl7711914 style="border-top:none;border-left:none">C<font'
								+'  class="font611914"><sub>v</sub></font></td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">8.06</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">12.48</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">16.9</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">21.8</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">26.7</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">32.1</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">37.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">43.25</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">49</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">55.2</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">61.4</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">67.6</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">73.8</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">79.55</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">85.3</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">90</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">94.7</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">98.35</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">102</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">0.85</td>'
								+' </tr>'
								+' <tr height=32 style="mso-height-source:userset;height:24.0pt">'
								+'  <td rowspan=2 height=68 class=xl6411914 style="height:51.0pt;border-top:none">&nbsp;4</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">111.1</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">4.375</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">51</td>'
								+'  <td class=xl6411914 style="border-top:none;border-left:none">2</td>'
								+'  <td class=xl7711914 style="border-top:none;border-left:none">C<font'
								+'  class="font611914"><sub>v</sub></font></td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">23.3</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">36.80</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">50.3</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">64.2</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">78.1</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">91.55</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">105</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">113.15</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">121.3</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">136.65</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">152</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">166.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">181</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">192</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">203</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">213</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">223</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">229.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">236</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">0.82</td>'
								+' </tr>'
								+' <tr height=36 style="height:27.0pt">'
								+'  <td height=36 class=xl6311914 width=70 style="height:27.0pt;border-top:none;'
								+'  border-left:none;width:53pt">73.0<br>'
								+'    (3)</td>'
								+'  <td class=xl6311914 width=71 style="border-top:none;border-left:none;'
								+'  width:53pt">2.875<br>'
								+'    (3)</td>'
								+'  <td class=xl6311914 width=59 style="border-top:none;border-left:none;'
								+'  width:44pt">38</td>'
								+'  <td class=xl6311914 width=65 style="border-top:none;border-left:none;'
								+'  width:49pt">1.5</td>'
								+'  <td class=xl7711914 style="border-top:none;border-left:none">C<font'
								+'  class="font611914"><sub>v</sub></font></td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">9.77</td>'
								+'  <td class=xl7411914 style="border-top:none;border-left:none">16.19</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">22.6</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">29.9</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">37.2</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">44.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none;font-size:11.0pt;'
								+'  color:black;font-weight:400;text-decoration:none;text-underline-style:none;'
								+'  text-line-through:none;font-family:"Book Antiqua";border:.5pt solid windowtext;'
								+'  background:#FFC7CE;mso-pattern:black none">51.8</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">58.75</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">65.7</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">71.6</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">77.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">82.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">87.5</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">92.7</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">97.9</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">102.45</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">107</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">110</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">113</td>'
								+'  <td class=xl7311914 style="border-top:none;border-left:none">0.84</td>'
								+' </tr>'
								+' <![if supportMisalignedColumns]>'
								+' <tr height=0 style="display:none">'
								+'  <td width=84 style="width:63pt"></td>'
								+'  <td width=70 style="width:53pt"></td>'
								+'  <td width=71 style="width:53pt"></td>'
								+'  <td width=59 style="width:44pt"></td>'
								+'  <td width=65 style="width:49pt"></td>'
								+'  <td width=88 style="width:66pt"></td>'
								+'  <td width=47 style="width:35pt"></td>'
								+'  <td width=47 style="width:35pt"></td>'
								+'  <td width=45 style="width:34pt"></td>'
								+'  <td width=53 style="width:40pt"></td>'
								+'  <td width=50 style="width:38pt"></td>'
								+'  <td width=54 style="width:41pt"></td>'
								+'  <td width=48 style="width:36pt"></td>'
								+'  <td width=60 style="width:45pt"></td>'
								+'  <td width=54 style="width:41pt"></td>'
								+'  <td width=57 style="width:43pt"></td>'
								+'  <td width=50 style="width:38pt"></td>'
								+'  <td width=52 style="width:39pt"></td>'
								+'  <td width=46 style="width:35pt"></td>'
								+'  <td width=52 style="width:39pt"></td>'
								+'  <td width=49 style="width:37pt"></td>'
								+'  <td width=55 style="width:41pt"></td>'
								+'  <td width=51 style="width:38pt"></td>'
								+'  <td width=55 style="width:41pt"></td>'
								+'  <td width=49 style="width:37pt"></td>'
								+'  <td width=60 style="width:45pt"></td>'
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
							
							  +'</section>'
							+'</div></div>' // 6 opt col close
							
							  +'<div class="col-md-12" class="inside-col"> ' // 4 opt col start
			waterMediumHtm += '<div id="step7" style="display:none;"><h2>7. Select the valve size using the flow coefficient table and the calculated Cv value</h2>'	
				  +'<section>'
				+'<span >Select the valve size using the flow coefficient table and enter here :&nbsp;&nbsp; </span>'
				
				+'<input id="cvValTable" type="text">'
				+'<br><span >For table <a data-toggle="modal" data-target="#myModalCV" style="cursor: pointer;">click here</a></span>'
				
				+'<br/><button class="btn-style" id="cvValTableBtn">Submit</button>'
						    +'<br>'
				+'<div id = "ansmessagediv"></div>'	
				
				+'</div>';
			    +'</section>'
				+'</div></div>' // 7 opn col close
	waterMediumHtm += '<div id="WaterSubmitBtn" style="display:none;"><div class="buttonDiv">'
					+'<button id="nextLevel4">Next Level</button>'
					+'</div></div>'
			  
                

			+'</div></div>'
		$("#flowMediumWaterDiv").html(waterMediumHtm);
		
		
		$('select#p2').on('change', function() {
			
			var p1 = parseInt($('#p1 option:selected').text());
			var p2 = parseInt($('#p2 option:selected').text());
			
			if(p1 <= p2 ){
				alertify.alert("The value of P2 must be less than P1");
				$('#p2').val("-1");
				$("#deltaP").html('');
			}else{
				 deltap = p1-p2;
				$("#deltaP").html(deltap +"&nbsp;psi");
			}
		});
		
		
    	$('select#T1').on('change', function() {
    		
    		var p1 = $('#p1 option:selected').val();
			var p2 = $('#p2 option:selected').val();
			var q = $('#flowMedWater option:selected').val();
			var WT1 = $('#T1 option:selected').val();
			
			if(p1 != "-1" && p2 != "-1" && q != "-1" && WT1 != "-1"){
				var gf = $('#T1 option:selected').attr("gfVal");
				 $('#gf').val(gf);
				 
				 var pv = $('#T1 option:selected').attr("pvVal");
				 $('#pv').val(pv);
				 
				 $("#step2").css("display","block");
			}else{
				alertify.alert("Please select all the feilds in step 1");
			}
			
		});
	
    	$("#equationConstBtn").click(function() {
    	   var equtionCons = $("#equationConsN").val();
    	   
    	   if(equtionCons != 1){
    		   alertify.alert("Please insert correct value.");
    	   }else{
    		   alertify.alert("Answer is correct.");
    		   $("#step3").css("display","block");
    		   $("#step4").css("display","block");
    	   }
    	});
	
		$("#pmaxValBtn").click(function() {
			
			flagForDeltaP = 0;
			var pmaxValAns = parseFloat($("#pmaxVal").val());
			
			if(pmaxValAns != "" && pmaxValAns != undefined && pmaxValAns != "NaN" && $.isNumeric(pmaxValAns) == true){
				
				var p1 = parseInt($('#p1 option:selected').text());
				var pv =  $('#pv').val();
				dpmax1 =  (FL * FL) * (p1 - (Ff * pv ));
				dpmax = dpmax1.toFixed(2);
				dpmax2 = dpmax1.toFixed(3);
				if(pmaxValAns == dpmax || pmaxValAns == dpmax2){
					alertify.alert("Answer is Correct");
					
					if(dpmax < deltap ){
						$("#chokedFlow").html('<span>&Delta;P<sub>max</sub> < &Delta;P (i.e. '+dpmax+' < '+deltap+')  indicates that choked flow conditions will exist.</span><br><br>');
					    var cvformulahtm ='C<sub>V</sub> = q / [N<sub>1</sub> * F<sub>P</sub> * F<sub>R</sub> (&radic;(&Delta;P<sub>max</sub> / G<sub>f</sub>))]'	
					    $("#cvformula").html(cvformulahtm);	
					    $("#step6Value").html('&Delta;P<sub>max</sub>');
					}else{
						$("#chokedFlow").html('<span>&Delta;P<sub>max</sub> > &Delta;P (i.e. '+dpmax+' > '+deltap+')  Based on the small required pressure drop, the flow will not be choked.</span><br><br>');
						 var cvformulahtm ='C<sub>V</sub> = q / [N<sub>1</sub> * F<sub>P</sub> * F<sub>R</sub> (&radic;(&Delta;P / G<sub>f</sub>))]'	
						 $("#cvformula").html(cvformulahtm);
						 flagForDeltaP = 1;
						 $("#step6Value").html('&Delta;P');
					}
					
					flag = 0;
					$("#step5").css("display","block");
					$("#step6").css("display","block");  
				}else {
										
					flag++;
					if(flag == 3){
						
						alertify.alert("Answer is Incorrect");
						alertify.alert("The correct answer is "+dpmax);
						
//						if(dpmax < deltap ){
//							$("#chokedFlow").html('<span>&Delta;P<sub>max</sub> < &Delta;P (i.e. '+dpmax+' < '+deltap+')  indicates that choked flow conditions will exist.</span><br><br>');
//							var cvformulahtm ='C<sub>V</sub> = q / [N<sub>1</sub> * F<sub>P</sub> * F<sub>R</sub> (&radic;(&Delta;P<sub>max</sub> / G<sub>f</sub>))]'	
//						    $("#cvformula").html(cvformulahtm);	
//						}else{
//							$("#chokedFlow").html('<span>&Delta;P<sub>max</sub> > &Delta;P (i.e. '+dpmax+' > '+deltap+')  Based on the small required pressure drop, the flow will not be choked.</span><br><br>');
//							var cvformulahtm ='C<sub>V</sub> = q / [N<sub>1</sub> * F<sub>P</sub> * F<sub>R</sub> (&radic;(&Delta;P / G<sub>f</sub>))]'	
//						    $("#cvformula").html(cvformulahtm);
//							 flagForDeltaP = 1;
//						}
						
						flag = 0;
						
					}else{
						
						alertify.alert("Answer is Incorrect");
					}
					
				}
//				console.log(dpmax);
			}else{
				if(isNaN(pmaxValAns)){
					alertify.alert("Please enter the answer in numeric only ");
				}

				
			}
			
	});


		$("#cvValBtn").click(
			function() {

				var cvValAns = parseFloat($("#cvVal").val());
				var N1 = parseFloat($('#equationConsN').val());
				if(N1 == 1){
					
					if (cvValAns != "" && cvValAns != undefined
							&& !isNaN(cvValAns)
							&& $.isNumeric(cvValAns) == true) {
						
						if(flagForDeltaP != 1){
							
							var q = parseInt($('#flowMedWater option:selected')
									.text());
							var gf = parseFloat($('#gf').val());
							var temp = Math.sqrt(parseFloat(dpmax) / gf);
							var cv1 = q / (N1 * FP * FR * temp);
							cv = cv1.toFixed(2);
							cv2 = cv1.toFixed(3);
//							console.log(cv);								
						}else{
							
							var q = parseInt($('#flowMedWater option:selected')
									.text());
							var gf = parseFloat($('#gf').val());
							var temp = Math.sqrt(parseFloat(deltap) / gf);
							var cv1 = q / (N1 * FP * FR * temp);
							cv = cv1.toFixed(2);
							cv2 = cv1.toFixed(3);
//							console.log(cv);
						}
						

						if (cvValAns == cv || cvValAns == cv2) {
						alertify.alert("Answer is Correct");
						cvValCorrectAnsFlag = true;
						cvflag = 0;
						$("#step7").css("display","block");  
						$("#WaterSubmitBtn").css("display","block");  
						
					} else {
						cvflag++;
						if (cvflag >= 3) {

							alertify.alert("Answer is Incorrect");
							alertify.alert("The correct answer is " + cv);

							cvValCorrectAnsFlag = false;
							cvflag = 0;

						} else {

							alertify.alert("Answer is Incorrect");
							cvValCorrectAnsFlag = false;
						}
					}
				} else {
					
					if(isNaN(cvVal)){
						alertify.alert("Please enter the answer in numeric only");
						}
				}
				
			}else{
				
				if(isNaN(equationConsN)){
					alertify.alert("Please enter correct value for Equation Constant (N1)");
					}
			}
			

		

		});
	
	


$("#cvValTableBtn").click(function() {
	
	var cvValAns = parseFloat($("#cvVal").val());
	var cvValTableAns = parseFloat($("#cvValTable").val());
	
	var findCv = true;
	
	if(cvValAns != "" && !isNaN(cvValAns) && cvValCorrectAnsFlag == true && cvValTableAns != "" && !isNaN(cvValTableAns) ){
		
		var n = LinearCharacteristicsArray.length; 
		
		var x = cvValTableAns;
		
		
		findTheCloserVal(LinearCharacteristicsArray,cvValTableAns,cvValAns)
	}else{
		
		if(isNaN(cvValTableAns)){
			alertify.alert("Please enter the answer in numeric only ");
		}
		
	}
	
});


var findTheCloserVal =  function(arr, cvTable, cvValAns) {
	
	//var cvValTableAnstemp = parseFloat($("#cvValTable").val());
    //  goal = cvValTableAnstemp;

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
	var valveInch = null;
	
	
	if(TotalTravelForPerc10_Array.includes(closest)){
		TotaltravelpercentageArray.push(10);
	}
	
	if(TotalTravelForPerc15_Array.includes(closest)){
		TotaltravelpercentageArray.push(15);
	}
	
	if(TotalTravelForPerc20_Array.includes(closest)){
		TotaltravelpercentageArray.push(20);
	}
	if(TotalTravelForPerc25_Array.includes(closest)){
		TotaltravelpercentageArray.push(25);
	}
	if(TotalTravelForPerc30_Array.includes(closest)){
		TotaltravelpercentageArray.push(30);
	}
	if(TotalTravelForPerc35_Array.includes(closest)){
		TotaltravelpercentageArray.push(35);
	}
	if(TotalTravelForPerc40_Array.includes(closest)){
		TotaltravelpercentageArray.push(40);
	}
	if(TotalTravelForPerc45_Array.includes(closest)){
		TotaltravelpercentageArray.push(45);
	}
	if(TotalTravelForPerc50_Array.includes(closest)){
		TotaltravelpercentageArray.push(50);
	}
	if(TotalTravelForPerc55_Array.includes(closest)){
		TotaltravelpercentageArray.push(55);
	}
	if(TotalTravelForPerc60_Array.includes(closest)){
		TotaltravelpercentageArray.push(60);
	}
	if(TotalTravelForPerc65_Array.includes(closest)){
		TotaltravelpercentageArray.push(65);
	}
	if(TotalTravelForPerc70_Array.includes(closest)){
		TotaltravelpercentageArray.push(70);
	}
	if(TotalTravelForPerc75_Array.includes(closest)){
		TotaltravelpercentageArray.push(75);
	}
	if(TotalTravelForPerc80_Array.includes(closest)){
		TotaltravelpercentageArray.push(80);
	}
	if(TotalTravelForPerc85_Array.includes(closest)){
		TotaltravelpercentageArray.push(85);
	}
	if(TotalTravelForPerc90_Array.includes(closest)){
		TotaltravelpercentageArray.push(90);
	}
	if(TotalTravelForPerc95_Array.includes(closest)){
		TotaltravelpercentageArray.push(95);
	}
	if(TotalTravelForPerc100_Array.includes(closest)){
		TotaltravelpercentageArray.push(100);
	}
	
	
	if(valveSizeInches1_Array.includes(closest)){
		valveInch = '1 or 1.25 inch';
	}
	if(valveSizeInches1andHalf_Array.includes(closest)){
		valveInch = '1.5 inch';
	}
	if(valveSizeInches2_Array.includes(closest)){
		valveInch = '2 inch';
	}
	if(valveSizeInches2andHalf_Array.includes(closest)){
		valveInch = '2.5 inch';
	}
	if(valveSizeInches3_Array.includes(closest)){
		valveInch = '3 inch';
	}
	if(valveSizeInches4_Array.includes(closest)){
		valveInch = '4 inch';
	}
	
	if(TotaltravelpercentageArray.length > 0){
		
		TTP = Math.max(...TotaltravelpercentageArray);
		
	}else{
	
		TTP = TotaltravelpercentageArray[0];

	}
	
	
	var ansmessagehtm = '<p><b>An NPS '+valveInch+' valve with linear cage has C<sub>V</sub> of '
						+closest
						+' at '
						+TTP
						+' % travel & should be satisfactory from sizing standard.</b></p>'
	
    $("#ansmessagediv").html(ansmessagehtm);					
	
};
 




$("#nextLevel4").click(function() {
	
	Level4_AssembleControlValve();
//	vlave();
	
});





		
};
	
	
	
	
	

	
	
	
	
	
});   //END LINE