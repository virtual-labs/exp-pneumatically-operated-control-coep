// JavaScript Document
$(function () {
	
	
	flowMediumNaturalGas  = function() {
		
		var NaturalGasHtm = '<div class="container-fluid"> '//main div
		
		+'<div class="row">' //main row
	    +'<div class="col-md-12" class="inside-col"> ' // 1 opn col start
			
			+'<h2>1. Specify the necessary variables required to size the valve:</h2>'
			+'<section>'
			
			 NaturalGasHtm += '<span>Select Volume flow rate of natural gas. (W)</span>'
					+ ' <select class="" id="flowMedGas" name="flowMedGas" title="Choose Volume rate of Gas">'
					+ '<option value="-1">Choose Value</option>'
					for ( var key in volumeRateOfFlowGas) {
						NaturalGasHtm  += "<option value= " + key + ">" + volumeRateOfFlowGas[key]
								+ "</option>";
					}
				
			NaturalGasHtm  +=  ' </select>&nbsp* 10<sup>6</sup>&nbsp;<span> &nbsp;&nbsp; = <span id="volOfGas"></span></span><br>'	
			
			NaturalGasHtm += '<span>Select Upstream absolute static pressure(P<sub>1</sub>)</span>'
					+ ' <select class="" id="ngp1" name="ngp1" title="Choose p1">'
					+ '<option value="-1">Choose Value</option>'
				
					for ( var key in P1) {
						NaturalGasHtm  += "<option value= " + key + ">" + P1[key]
								+ "</option>";
					}
		    
			NaturalGasHtm +=  ' </select>&nbsp;<span>psia </span><br>'
					
			NaturalGasHtm += '<span>Select Downstream absolute static pressure(P<sub>2</sub>)</span>'
							+ '<select class="" id="ngp2" name="ngp2" title="Choose p2">'
							+ '<option value="-1">Choose Value</option>'
							for ( var key in P2) {
								NaturalGasHtm += "<option value= " + key + ">" + P2[key]
										+ "</option>";
							}
			
			NaturalGasHtm += ' </select>&nbsp;<span>psia </span><br>'
							
			NaturalGasHtm += ' <span>Pressure drop (P1-P2) across the valve(&Delta;P) = P<sub>1</sub> - P<sub>2</sub> = <span id="ngdeltaP"></span></span><br>'
				
			NaturalGasHtm += ' <span>Ratio of pressure drop to upstream pressure (X) =  &Delta;P/ P<sub>1</sub> = <span id="ratioX"></span></span><br>'	

				
			NaturalGasHtm += ' <div id="p1Select" ></div><br>'
				     		
				
			NaturalGasHtm += '<span>Select Absolute upstream temperature (T<sub>1</sub>)</span>'
						   + '<select class="" id="GT1" name="GT1" title="Choose T1">'
					       + '<option value="-1">Choose Value</option>'
					      
//					       var p1Val = parseInt($('#ngp1 option:selected').text());
					      
							for ( var key in NGTemp) {
								NaturalGasHtm += "<option value= " + key + ">" + NGTemp[key]
								+ "</option>";
							}
				
		    NaturalGasHtm += '</select>&nbsp;<span><sup>o</sup>R </span><br>'	
				
		    NaturalGasHtm += '<span>Molecular weight, dimensionless (M) =  17.38</span><br>'		
		    	
		    NaturalGasHtm += '<span>Gas specific gravity (ratio of density of flowing gas to density of air with both at standard conditions(1), i.e., ratio of molecular weight of gas to molecular weight of air), dimensionless (G<sub>g</sub>) =  0.60</span><br>'	
		    	
		    NaturalGasHtm += '<span> 	 k =  1.31</span><br>'		
		    	
		   
		    	
		    	
//				Table for Equation Constants
		    NaturalGasHtm += '<div id="myModalNGas" class="modal fade" role="dialog">'
						+'<div class="modal-dialog">'
//								<!-- Modal content-->'
						+'<div class="modal-content" style="">'
						+'<div class="modal-header">'
						+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
						+'<h4 class="modal-title">Equation Constants table</h4>'
						+'</div>'
						+'<div class="modal-body"	style="font-size: 12px; font-family: "Domine", serif;">'
						
						+'<div id="N7Table_20295" align=center x:publishsource="Excel">'
						+''
						+'<table border=0 cellpadding=0 cellspacing=0 width=100% style="border-collapse:'
						+' collapse;width:100%">'
						+' <col width=173 style="mso-width-source:userset;mso-width-alt:5536;width:130pt">'
						+' <col width=153 style="mso-width-source:userset;mso-width-alt:4896;width:115pt">'
						+' <col width=72 span=8 style="width:54pt">'
						+' <tr height=23 style="height:17.25pt">'
						+'  <td colspan=2 height=23 class=xl6320295 width=326 style="height:17.25pt;'
						+'  width:245pt">Numerical Constant with Subscript</td>'
						+'  <td class=xl6320295 width=72 style="border-left:none;width:54pt">N</td>'
						+'  <td class=xl6320295 width=72 style="border-left:none;width:54pt">w</td>'
						+'  <td class=xl6320295 width=72 style="border-left:none;width:54pt">q</td>'
						+'  <td class=xl6320295 width=72 style="border-left:none;width:54pt">p<font'
						+'  class="font820295"><sup>(2)</sup></font></td>'
						+'  <td class=xl6420295 width=72 style="border-left:none;width:54pt">&#961;</td>'
						+'  <td class=xl6420295 width=72 style="border-left:none;width:54pt">&#957;</td>'
						+'  <td class=xl6320295 width=72 style="border-left:none;width:54pt">T</td>'
						+'  <td class=xl6320295 width=72 style="border-left:none;width:54pt">d,D</td>'
						+' </tr>'
						+' <tr height=42 style="height:31.5pt">'
						+'  <td rowspan=3 height=126 class=xl6620295 style="height:94.5pt;border-top:'
						+'  none">N<font class="font620295"><sub>7</sub></font><font class="font520295"><sup>(3)</sup></font></td>'
						+'  <td class=xl6520295 width=153 style="border-top:none;border-left:none;'
						+'  width:115pt">Normal Conditions<br>'
						+'    T<font class="font620295"><sub>N</sub></font><font class="font020295"> = 0 </font><sup>o</sup>C</td>'
						+'  <td class=xl6520295 width=72 style="border-top:none;border-left:none;'
						+'  width:54pt">3.94<br>'
						+'    394</td>'
						+'  <td class=xl6620295 style="border-top:none;border-left:none">- - -</td>'
						+'  <td class=xl6520295 width=72 style="border-top:none;border-left:none;'
						+'  width:54pt">m<font class="font520295"><sup>3</sup></font><font'
						+'  class="font020295">/h<br>'
						+'    m3/h</font></td>'
						+'  <td class=xl6520295 width=72 style="border-top:none;border-left:none;'
						+'  width:54pt">kPa<br>'
						+'    bar</td>'
						+'  <td class=xl6620295 style="border-top:none;border-left:none">- - -</td>'
						+'  <td class=xl6620295 style="border-top:none;border-left:none">- - -</td>'
						+'  <td class=xl6520295 width=72 style="border-top:none;border-left:none;'
						+'  width:54pt">deg K<br>'
						+'    deg K</td>'
						+'  <td class=xl6620295 style="border-top:none;border-left:none">- - -</td>'
						+' </tr>'
						+' <tr height=42 style="height:31.5pt">'
						+'  <td height=42 class=xl6520295 width=153 style="height:31.5pt;border-top:none;'
						+'  border-left:none;width:115pt">Standard Conditions<br>'
						+'    T<font class="font620295"><sub>s</sub></font>'
						+'  15.5 <sup>o</sup>C</td>'
						+'  <td class=xl6520295 width=72 style="border-top:none;border-left:none;'
						+'  width:54pt">4.17<br>'
						+'    417</td>'
						+'  <td class=xl6620295 style="border-top:none;border-left:none">- - -</td>'
						+'  <td class=xl6520295 width=72 style="border-top:none;border-left:none;'
						+'  width:54pt">m<font class="font520295"><sup>3</sup></font><font'
						+'  class="font020295">/h<br>'
						+'    m3/h</font></td>'
						+'  <td class=xl6520295 width=72 style="border-top:none;border-left:none;'
						+'  width:54pt">kPa<br>'
						+'    bar</td>'
						+'  <td class=xl6620295 style="border-top:none;border-left:none">- - -</td>'
						+'  <td class=xl6620295 style="border-top:none;border-left:none">- - -</td>'
						+'  <td class=xl6520295 width=72 style="border-top:none;border-left:none;'
						+'  width:54pt">deg K<br>'
						+'    deg K</td>'
						+'  <td class=xl6620295 style="border-top:none;border-left:none">- - -</td>'
						+' </tr>'
						+' <tr height=42 style="height:31.5pt">'
						+'  <td height=42 class=xl6520295 width=153 style="height:31.5pt;border-top:none;'
						+'  border-left:none;width:115pt">Standard Conditions<br>'
						+'    T<font class="font620295"><sub>s</sub></font>60'
						+'  <sup>o</sup>F</font></td>'
						+'  <td class=xl6620295 style="border-top:none;border-left:none">1360</td>'
						+'  <td class=xl6620295 style="border-top:none;border-left:none">- - -</td>'
						+'  <td class=xl6620295 style="border-top:none;border-left:none">scfh</td>'
						+'  <td class=xl6620295 style="border-top:none;border-left:none">psia</td>'
						+'  <td class=xl6620295 style="border-top:none;border-left:none">- - -</td>'
						+'  <td class=xl6620295 style="border-top:none;border-left:none">- - -</td>'
						+'  <td class=xl6620295 style="border-top:none;border-left:none">deg R</td>'
						+'  <td class=xl6620295 style="border-top:none;border-left:none">- - -</td>'
						+' </tr>'
						+' <![if supportMisalignedColumns]>'
						+' <tr height=0 style="display:none">'
						+'  <td width=173 style="width:130pt"></td>'
						+'  <td width=153 style="width:115pt"></td>'
						+'  <td width=72 style="width:54pt"></td>'
						+'  <td width=72 style="width:54pt"></td>'
						+'  <td width=72 style="width:54pt"></td>'
						+'  <td width=72 style="width:54pt"></td>'
						+'  <td width=72 style="width:54pt"></td>'
						+'  <td width=72 style="width:54pt"></td>'
						+'  <td width=72 style="width:54pt"></td>'
						+'  <td width=72 style="width:54pt"></td>'
						+' </tr>'
						+' <![endif]>'
						+'</table>'
						+''
						+'</div>'

						
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

			NaturalGasHtm += '<div id="NGstep2" style="display:none;"><h2>2. Determine the appropriate equation constant, N, from given table equation constant</h2>'
				       +'<section>'
					   +'<input id="NGEquationConsN" type="text" class="col-md-4" >'
					   +'<span class="col-md-7">For N<sub>7</sub> table  <a data-toggle="modal" data-target="#myModalNGas"	style="cursor: pointer;">click here</a>'
				       +'</span> <button class="btn-style" id="NGEquationConstBtn">Check</button><br>'	
				        
				       +'</section>'
				       +'</div></div>' // 2 opt col close

				       +'<div class="col-md-12" class="inside-col"> ' // 3 opt col start
				
			NaturalGasHtm += '<br><div id="NGstep3" style="display:none;"><h2>3. Determine F<sub>p</sub>, the piping geometry factor.  </h2>'	
				       +'<section>'
				       +'Assuming valve and line size are nearly equal, therefore, <B>F<sub>p</sub> = 1</B>'
				       +'</section>'
				        +'</div></div>' // 3 opt col close
				      
						 +'<div class="col-md-12" class="inside-col"> ' // 4 opt col start
            
		    	
			NaturalGasHtm += '<div id="NGstep4" style="display:none;"><h2>4. Determine Y, the expansion factor. </h2>'	
				    +'<section>'
			    	 	
			NaturalGasHtm += '<span> F<sub>k</sub> = k / 1.40</span><br>'		
				
			NaturalGasHtm += '<span> where k = 1.31</span><br>'	
				
			NaturalGasHtm += '<span> F<sub>k</sub> = 1.31 / 1.40</span><br>'
			
				GasFk = (1.31 / 1.40).toFixed(2);
		    
			NaturalGasHtm += '<span> F<sub>k</sub> = '+GasFk+'</span><br>'
			    	

 		   
			NaturalGasHtm += '<div id="myModalCVGas" class="modal fade" role="dialog">'
							+'<div class="modal-dialog" style="width:100%;">'
//							<!-- Modal content-->'
							+'<div class="modal-content" style="width: 100%; ">'
							+'<div class="modal-header">'
							+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
							+'<h4 class="modal-title">Linear characteristics table</h4>'
							+'</div>'
						    +'<div class="modal-body"	style="overflow :scroll;  font-size: 12px; width:100%; font-family: "Domine", serif;">'
			    		   
			
			NaturalGasHtm +='<div id="Natural_Gas_cv_table_updated_3263" align=center x:publishsource="Excel">'
							+''
							+'<table border=0 cellpadding=0 cellspacing=0 width=1407 style="border-collapse:'
							+' collapse;table-layout:fixed;width:100%">'
							+' <col width=89 style="mso-width-source:userset;mso-width-alt:3254;width:67pt">'
							+' <col width=102 style="mso-width-source:userset;mso-width-alt:3730;width:77pt">'
							+' <col width=64 span=19 style="width:48pt">'
							+' <tr height=20 style="height:15.0pt">'
							+'  <td colspan=21 rowspan=2 height=40 class=xl703263 width=100%'
							+'  style="font-size:19px; border-right:.5pt solid black;border-bottom:.5pt solid black;'
							+'  height:30.0pt;width:100%">Approximately Equal Percentage Characteristics</td>'
							+' </tr>'
							+' <tr height=20 style="height:15.0pt">'
							+' </tr>'
							+' <tr height=20 style="mso-height-source:userset;height:15.0pt">'
							+'  <td rowspan=4 height=80 class=xl763263 width=89 style="height:60.0pt;'
							+'  border-top:none;width:67pt">Valve Size,Inches<br>'
							+'    </td>'
							+'  <td rowspan=3 class=xl763263 width=102 style="border-top:none;width:77pt">Flow'
							+'  <br>'
							+'    Coefficient</td>'
							+'  <td colspan=19 rowspan=3 class=xl773263>Valve rotation, Degrees</td>'
							+' </tr>'
							+' <tr height=20 style="mso-height-source:userset;height:15.0pt">'
							+' </tr>'
							+' <tr height=20 style="mso-height-source:userset;height:15.0pt">'
							+' </tr>'
							+' <tr height=20 style="mso-height-source:userset;height:15.0pt">'
							+'  <td height=20 class=xl793263 style="height:15.0pt;border-top:none;border-left:'
							+'  none">&nbsp;</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">10</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">15</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">20</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">25</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">30</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">35</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">40</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">45</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">50</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">55</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">60</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">65</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">70</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">75</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">80</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">85</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">90</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">95</td>'
							+'  <td class=xl633263 style="border-top:none;border-left:none">100</td>'
							+' </tr>'
							+' <tr height=25 style="height:18.75pt">'
							+'  <td rowspan=2 height=50 class=xl783263 style="height:37.5pt;border-top:none">4</td>'
							+'  <td class=xl803263 style="border-top:none;border-left:none">C<font'
							+'  class="font53263"><sub>v</sub></font></td>'
							+'  <td class=xl693263 style="border-top:none;border-left:none">_ _</td>'
							+'  <td class=xl693263 style="border-top:none;border-left:none">_ _</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">6.74</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">12.87</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">19</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">29.45</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">39.9</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">54.4</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">68.9</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">91.45</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">114</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">148</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">182</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">258.5</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">335</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">417</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">499</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">587</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">674</td>'
							+' </tr>'
							+' <tr height=25 style="height:18.75pt">'
							+'  <td height=25 class=xl803263 style="height:18.75pt;border-top:none;'
							+'  border-left:none">X<font class="font53263"><sub>T</sub></font></td>'
							+'  <td class=xl693263 style="border-top:none;border-left:none">_ _</td>'
							+'  <td class=xl693263 style="border-top:none;border-left:none">_ _</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.66</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.72</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.77</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.77</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.76</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.74</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.71</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.65</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.59</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.53</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.47</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.37</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.26</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.22</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.17</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.13</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">0.8</td>'
							+' </tr>'
							+' <tr height=25 style="height:18.75pt">'
							+'  <td rowspan=2 height=50 class=xl783263 style="height:37.5pt;border-top:none">6</td>'
							+'  <td class=xl803263 style="border-top:none;border-left:none">C<font'
							+'  class="font53263"><sub>v</sub></font></td>'
							+'  <td class=xl693263 style="border-top:none;border-left:none">_ _</td>'
							+'  <td class=xl693263 style="border-top:none;border-left:none">_ _</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">15.7</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">29.25</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">42.8</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">59.45</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">76.1</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">103.05</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">130</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">166.5</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">203</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">255.5</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">308</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">437.5</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">567</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">711</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">855</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">943</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">1030</td>'
							+' </tr>'
							+' <tr height=25 style="height:18.75pt">'
							+'  <td height=25 class=xl803263 style="height:18.75pt;border-top:none;'
							+'  border-left:none">X<font class="font53263"><sub>T</sub></font></td>'
							+'  <td class=xl693263 style="border-top:none;border-left:none">_ _</td>'
							+'  <td class=xl693263 style="border-top:none;border-left:none">_ _</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.99</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.91</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.83</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.86</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.90</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.83</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.76</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.70</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.64</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.59</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.54</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.41</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.28</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.23</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.17</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.12</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">0.7</td>'
							+' </tr>'
							+' <tr height=25 style="height:18.75pt">'
							+'  <td rowspan=2 height=50 class=xl783263 style="height:37.5pt;border-top:none">8</td>'
							+'  <td class=xl803263 style="border-top:none;border-left:none">C<font'
							+'  class="font53263"><sub>v</sub></font></td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">1.48</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">14.69</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">27.9</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">59.85</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">91.8</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">134.4</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">177</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">242.5</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">308</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">393</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">478</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">599</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">720</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">970</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">1220</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">1705</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">2190</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">2278</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">2365</td>'
							+' </tr>'
							+' <tr height=25 style="height:18.75pt">'
							+'  <td height=25 class=xl803263 style="height:18.75pt;border-top:none;'
							+'  border-left:none">X<font class="font53263"><sub>T</sub></font></td>'
							+'  <td class=xl693263 style="border-top:none;border-left:none">0.35</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.64</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.92</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.87</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.81</td>'
							+'  <td class=xl663263 style="border-top:none;border-left:none">0.830</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.85</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.74</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.63</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.61</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.58</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.53</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.48</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.39</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.29</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.22</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.14</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">0.8</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">0.3</td>'
							+' </tr>'
							+' <tr height=25 style="height:18.75pt">'
							+'  <td rowspan=2 height=50 class=xl783263 style="height:37.5pt;border-top:none">10</td>'
							+'  <td class=xl803263 style="border-top:none;border-left:none">C<font'
							+'  class="font53263"><sub>v</sub></font></td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">42.8</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">64.2</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">85.5</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">129.75</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">174</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">240</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">306</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">395</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">484</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">624</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">764</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">957</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">1150</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">1475</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">1800</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">2428</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">3055</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">3143</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">3230</td>'
							+' </tr>'
							+' <tr height=25 style="height:18.75pt">'
							+'  <td height=25 class=xl803263 style="height:18.75pt;border-top:none;'
							+'  border-left:none">X<font class="font53263"><sub>T</sub></font></td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.33</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.46</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.59</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.67</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.75</td>'
							+'  <td class=xl663263 style="border-top:none;border-left:none">0.730</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.72</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.70</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.68</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.63</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.57</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.50</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.43</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.36</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.29</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.22</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.15</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">0.8</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">0.2</td>'
							+' </tr>'
							+' <tr height=25 style="height:18.75pt">'
							+'  <td rowspan=2 height=50 class=xl783263 style="height:37.5pt;border-top:none">12</td>'
							+'  <td class=xl803263 style="border-top:none;border-left:none">C<font'
							+'  class="font53263"><sub>v</sub></font></td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">40.6</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">81.3</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">122</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">194.5</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">267</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">383</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">499</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">656</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">812</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">1021</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">1230</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">1550</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">1870</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">2465</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">3060</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">4430</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">5800</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">5888</td>'
							+'  <td class=xl673263 style="border-top:none;border-left:none">5975</td>'
							+' </tr>'
							+' <tr height=25 style="height:18.75pt">'
							+'  <td height=25 class=xl803263 style="height:18.75pt;border-top:none;'
							+'  border-left:none">X<font class="font53263"><sub>T</sub></font></td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">0.24</td>'
							+'  <td class=xl663263 style="border-top:none;border-left:none">0.560</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">0.88</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.88</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">0.88</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.83</td>'
							+'  <td class=xl643263 style="border-top:none;border-left:none">0.78</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.69</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.60</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.55</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.49</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.44</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.38</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.31</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.23</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.17</td>'
							+'  <td class=xl653263 style="border-top:none;border-left:none">0.10</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">0.4</td>'
							+'  <td class=xl683263 style="border-top:none;border-left:none">0.1</td>'
							+' </tr>'
							+' <![if supportMisalignedColumns]>'
							+' <tr height=0 style="display:none">'
							+'  <td width=89 style="width:67pt"></td>'
							+'  <td width=102 style="width:77pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+'  <td width=64 style="width:48pt"></td>'
							+' </tr>'
							+' <![endif]>'
							+'</table>'
							+''
							+'</div>'

			    		    +'</div>'
							+'<div class="modal-footer">'
							+'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
							+'</div>'
							+'</div>'

							+'</div>'
							+'</div>'
		    	
		   
		    NaturalGasHtm += '<span>Note : For NPS4 inch valve, select the value of X<sub>T</sub> from the flow coefficient table at 100% travel. </span><br>'       
		    NaturalGasHtm += '<div><span>For X<sub>T</sub> table <a data-toggle="modal" data-target="#myModalCVGas" style="cursor: pointer;">click here</a></span><br>'
		    	
		    NaturalGasHtm += '<span>Calculate the value of F<sub>k</sub> * X<sub>T</sub> and enter here :&nbsp;&nbsp; </span><input id="fkxtVal" type="text" > <br> <button id="fkxtValBtn" class="btn-style">Submit</button><br><br>'
		  		   
				           +'</div><br>'
				     
			NaturalGasHtm += '<span id="YExpFactor"> </span><br>'       	       
				    +'</section>' 
							+'</div></div>' // 4 opt col close
			
							 +'<div class="col-md-12" class="inside-col"> ' // 5 opt col start

			NaturalGasHtm += '<div id="NGstep5" style="display:none;"><h2>5. Solve for required C<sub>v</sub> using the appropriate equation. </h2>'	
				       +'<section>'
						  +'<img src="images/CvGasFormula.JPG"/><br>'
						  +'<span>Where, </span><br>'    
						  +'<span>F<sub>P</sub> = 1  and Z = 1 </span><br>'  
						  
						  +'<div><span>For N<sub>7</sub> table  <a data-toggle="modal" data-target="#myModalNGas"	style="cursor: pointer;">click here</a><span>'
						  +'</div><br>'
			NaturalGasHtm += '<span>Calculate the value of C<sub>V</sub> and enter here :&nbsp;&nbsp; </span><input id="CVGASVal" type="text" > <br> <button id="CVGASValBtn" class="btn-style">Submit</button><br><br>'
				           
				       +'</section>'
						+'</div></div>' // 5 opt col close
		
						 +'<div class="col-md-12" class="inside-col"> ' // 6 opt col start

			NaturalGasHtm += '<div id="NGstep6" style="display:none;"><h2>6. Select the valve size using the flow coefficient table and the calculated Cv value</h2> <br>'	
				      +'<section>'
						+'<span>Select the valve size using the flow coefficient table and enter here :&nbsp;&nbsp; </span><input id="cvValTable" type="text" >' 
						
						+'<br><span>For Cv table <a data-toggle="modal" data-target="#myModalCVGas" style="cursor: pointer;">click here</a></span><br>' 	
			    	    +'<button id="cvValTableBtn" class="btn-style">Submit</button>'
						+'<div id = "ansmessagediv"></div>'		
							   
		    	+'</div>';
			   +'<section>'
			          +'</div></div>' // 6 opt col close
	            NaturalGasHtm += '<div id="NaturalGasSubmitBtn" style="display:none;"><div class="buttonDiv">'
				     	  +'<button id="nextLevel4">Next Level</button>'
					      +'</div></div>'	
			$("#flowMediumNaturalGasDiv").html(NaturalGasHtm);
				
				
			$('select#ngp1').on('change', function() {
				$("#gammaVal").html("");
				
				
				var p1 = parseInt($('#ngp1 option:selected').text());
				var p2 = parseInt($('#ngp2 option:selected').text());
				
				if(p1 <= p2){
					alertify.alert("The value of P2 must be less than P1");
					$('#ngp2').val("-1");
					$("#ngdeltaP").html('');
				}else{
					 ngdeltaP = p1-p2;
					 ratio = ngdeltaP / p1;
					 ratioGX = ratio.toFixed(2);
					$("#ngdeltaP").html(ngdeltaP +"&nbsp;psia");
					$("#ratioX").html(ratio.toFixed(2) +"&nbsp;");
					$("#ratioXVal").html(ratio.toFixed(2) +"&nbsp;");
				}
				
			});
			
			
			$('select#flowMedGas').on('change', function() {
				
//				var p1 = $('#ngp1 option:selected').val();
//				var p2 = $('#ngp2 option:selected').val();
//				var NGT1 = $('#GT1 option:selected').val();
//				var NGQ = $('#flowMedGas option:selected').val();
				
//				if(p1 != "-1" && p2 != "-1" && NGT1 != "-1" && NGQ != "-1"){
						var selGas = parseInt($('#flowMedGas option:selected').text());
						if(!isNaN(selGas)){
							$("#volOfGas").html(selGas+" * 10<sup>6</sup>&nbsp;scfh");
							volOfGasQ = selGas * Math.pow(10,6);
						}else{
							alertify.alert("Please select volume rate of Gas");
							$("#volOfGas").html("");
						}
						
//						$("#NGstep2").css("display","block");
//				}else{
//					alert("Please select all the feilds in step 1");
//				}
				
			});
			
			
			$('select#GT1').on('change', function() {
				
				var p1 = $('#ngp1 option:selected').val();
				var p2 = $('#ngp2 option:selected').val();
				var NGT1 = $('#GT1 option:selected').val();
				var NGQ = $('#flowMedGas option:selected').val();
				
				if(p1 != "-1" && p2 != "-1" && NGT1 != "-1" && NGQ != "-1"){
						var selGas = parseInt($('#flowMedGas option:selected').text());
						if(!isNaN(selGas)){
							$("#volOfGas").html(selGas+" * 10<sup>6</sup>&nbsp;scfh");
							volOfGasQ = selGas * Math.pow(10,6);
						}else{
							alertify.alert("Please select volume rate of Gas");
							$("#volOfGas").html("");
						}
						
						$("#NGstep2").css("display","block");
				}else{
					alertify.alert("Please select all the feilds in step 1");
				}
				
			});
			
			
				
			$('select#ngp2').on('change', function() {
				
				var p1 = parseInt($('#ngp1 option:selected').text());
				var p2 = parseInt($('#ngp2 option:selected').text());
				
				if(!isNaN(p2)){
					if(p1 <= p2){
						alertify.alert("The value of P2 must be less than P1");
						$('#ngp2').val("-1");
						$("#ngdeltaP").html('');
					}else{
						 ngdeltaP = p1-p2;
						 var ratio = ngdeltaP / p1;
						 ratioGX = ratio.toFixed(2);
						$("#ngdeltaP").html(ngdeltaP +"&nbsp;psia");
						$("#ratioX").html(ratio.toFixed(2) +"&nbsp;");
						$("#ratioXVal").html(ratio.toFixed(2) +"&nbsp;");
					}
				}else{
					alertify.alert("Please select P2");
					$("#ngdeltaP").html("");
				}
				
			});	
				
		
			$("#NGEquationConstBtn").click(function() {
		    	   var equtionCons = $("#NGEquationConsN").val();
		    	   
		    	   if(equtionCons != 1360){
		    		   alertify.alert("Please insert correct value.");
		    	   }else{
		    		   alertify.alert("Answer is correct.");
		    		   $("#NGstep3").css("display","block");
		    		   $("#NGstep4").css("display","block");
		    	   }
		    	});
			
			
			$("#fkxtValBtn").click(function() {
				
				var fkxtValAns = parseFloat($("#fkxtVal").val());
				
				if(fkxtValAns != "" && !isNaN(fkxtValAns)){
					

				var fkxtVal = (GasFk * GasXT);
				fkxtValFinal = fkxtVal.toFixed(2);
						
									
					if(fkxtValAns == fkxtVal.toFixed(2) || fkxtValAns == fkxtVal.toFixed(3)){
						alertify.alert("Anwser is correct");
						fkxtFlag = 0;
						
					  var NaturalGasHtm = '<span>Y Expansion factor </span><br>'
							            
						  if( ratioGX >= fkxtVal){
							  
				            	  NaturalGasHtm += '<span>As X('+ratioGX+') > F<sub>k</sub> * X<sub>T</sub>('+fkxtVal.toFixed(3)+') </span><br>'
             				            		+'<span>Therefore, </span><br>' 
             				            		+'<span>Y = 0.667 </span><br>' 
             				            		YGASValFinal = 0.667;
				            	  $("#YExpFactor").html(NaturalGasHtm);
				            	  $("#NGstep5").css("display","block");
				            	  
				              }else{
				            	  
				            	  NaturalGasHtm += '<span>As X('+ratioGX+') < F<sub>k</sub> * X<sub>T</sub>('+fkxtVal.toFixed(3)+') </span><br>'
				            		+'<span>Therefore, </span><br>' 
				            		+'<span>Y = 1 - (X / 3 * F<sub>k</sub> * X<sub>T</sub>) </span><br>' 
				            	  NaturalGasHtm += '<span>Calculate the value of Y and enter here :&nbsp;&nbsp; </span><input id="YGASVal" type="text" > <br> <button id="YGASValBtn" class="btn-style">Submit</button><br><br>'
				            		  
				            		$("#YExpFactor").html(NaturalGasHtm);
				              }
					  
						 
						    
					}else{
						fkxtFlag++;
						if (fkxtFlag >= 3) {
							alertify.alert("Answer is Incorrect");
							alertify.alert("The correct answer is " + fkxtVal.toFixed(2));
						} else {
							alertify.alert("Answer is Incorrect");
						}
					}
				}else{
						alertify.alert("Please enter the answer in numeric only ");
				}
				
			});
				
			
				
			
			$("#flowMediumNaturalGasDiv").on("click", "#YGASValBtn", function () {

				
				var YGASValValAns = parseFloat($("#YGASVal").val());
					
					if(YGASValValAns != "" && !isNaN(YGASValValAns)){
						
	
					var YGASVal = (1 - (ratioGX /( 3 * GasFk * GasXT)));
					
					YGASValFinal = YGASVal.toFixed(2);
										
						if(YGASValValAns == YGASVal.toFixed(2) || YGASValValAns == YGASVal.toFixed(3)){
							alertify.alert("Anwser is correct");
							YGASFlag = 0;
							$("#NGstep5").css("display","block");       
						}else{
							YGASFlag++;
							if (YGASFlag >= 3) {
								alertify.alert("Answer is Incorrect");
								alertify.alert("The correct answer is " + YGASVal.toFixed(2));
							} else {
								alertify.alert("Answer is Incorrect");
							}
						}
					}else{
							alertify.alert("Please enter the answer in numeric only ");
					}
				
		
				});
			
		 
				
			
			$("#CVGASValBtn").click(function() {
				
				var CVGASValAns = parseFloat($("#CVGASVal").val());
				
				var N7 = $("#NGEquationConsN").val();
				var p1 = parseInt($('#ngp1 option:selected').text());
				var GT1 = parseInt($('#GT1 option:selected').text());
				
				if(CVGASValAns != "" && !isNaN(CVGASValAns)){
					
//					
					
				if(volOfGasQ != 0){
					if(!isNaN(N7)){
						if(!isNaN(p1)){
							if(!isNaN(GT1)){
								
								var CVGASVal = 	volOfGasQ / ( N7 * FPGAS * p1 * YGASValFinal * (Math.sqrt(ratioGX / (Gg * GT1 * GASZ))));
								CVGASValFinal = CVGASVal.toFixed(2);
								
							}else{
								alertify.alert("Please select the T1.");
							}
						}else{
							alertify.alert("Please select the p1.");
						}
					}else{
						alertify.alert("Please select appropriate equation constant, N. In the 2nd step. ");
					}
				}else{
					alertify.alert("Please select volume rate of Gas");
					$("#volOfGas").html("");
				}
					
				
				
				
									
					if(CVGASValAns == CVGASVal.toFixed(2) || CVGASValAns == CVGASVal.toFixed(3)){
						alertify.alert("Anwser is correct");
						CVGASFlag = 0;
						 $("#NGstep6").css("display","block"); 
						 $("#NaturalGasSubmitBtn").css("display","block"); 
					}else{
						CVGASFlag++;
						if (CVGASFlag >= 3) {
							alertify.alert("Answer is Incorrect");
							alertify.alert("The correct answer is " + CVGASVal.toFixed(2));
						} else {
							alertify.alert("Answer is Incorrect");
						}
					}
				}else{
						alertify.alert("Please enter the answer in numeric only ");
				}
			
		});	
			
			
			
			
			$("#cvValTableBtn").click(function() {
				
				var cvValAns = parseFloat($("#CVGASVal").val());
				var cvValTableAns = parseFloat($("#cvValTable").val());
				
				var findCv = true;
				
				if(cvValAns != "" && !isNaN(cvValAns) && cvValTableAns != "" && !isNaN(cvValTableAns) ){
					
					var n = LinearCharacteristicsArrayGas.length; 
					
					var x = cvValTableAns;
			
					
					findTheCloserVal(LinearCharacteristicsArrayGas,cvValTableAns,cvValAns)
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
					  GASflag = 0
					  alertify.alert("Answer is correct..")
					  findPercentageForClosetValue(closest);
				  }else{
					  if(GASflag >= 3){
						  alertify.alert("Answer is Incorrect..")
						   alertify.alert("Correct answer is "+closest)
						   
					  }else{
						  alertify.alert("Answer is Incorrect..");
						  GASflag++;
					  }
					 
				  }
			};
			
			

			var findPercentageForClosetValue = function(closest){
				
				
				var TotaltravelpercentageArray = []; 
				var TTP;
				var NGValveInch = null;
				
				
				if(TotalTravelForPerc10_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(10);
				}
				
				if(TotalTravelForPerc15_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(15);
				}
				
				if(TotalTravelForPerc20_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(20);
				}
				if(TotalTravelForPerc25_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(25);
				}
				if(TotalTravelForPerc30_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(30);
				}
				if(TotalTravelForPerc35_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(35);
				}
				if(TotalTravelForPerc40_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(40);
				}
				if(TotalTravelForPerc45_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(45);
				}
				if(TotalTravelForPerc50_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(50);
				}
				if(TotalTravelForPerc55_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(55);
				}
				if(TotalTravelForPerc60_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(60);
				}
				if(TotalTravelForPerc65_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(65);
				}
				if(TotalTravelForPerc70_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(70);
				}
				if(TotalTravelForPerc75_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(75);
				}
				if(TotalTravelForPerc80_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(80);
				}
				if(TotalTravelForPerc85_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(85);
				}
				if(TotalTravelForPerc90_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(90);
				}
				if(TotalTravelForPerc95_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(95);
				}
				if(TotalTravelForPerc100_ArrayGas.includes(closest)){
					TotaltravelpercentageArray.push(100);
				}
				
				
				
				if(NGValveSizeInches4_Array.includes(closest)){
					NGValveInch = '4 inch';
				}
				if(NGValveSizeInches6_Array.includes(closest)){
					NGValveInch = '6 inch';
				}
				if(NGValveSizeInches8_Array.includes(closest)){
					NGValveInch = '8 inch';
				}
				if(NGValveSizeInches10_Array.includes(closest)){
					NGValveInch = '10 inch';
				}
				if(NGValveSizeInches12_Array.includes(closest)){
					NGValveInch = '12 inch';
				}
				
				
				
				if(TotaltravelpercentageArray.length > 0){
					
					TTP = Math.max(...TotaltravelpercentageArray);
					
				}else{
				
					TTP = TotaltravelpercentageArray[0];

				}
				
				
				var ansmessagehtm = '<p><b>An '+NGValveInch+' valve with linear cage has C<sub>V</sub> of '
									+closest
									+' at '
									+TTP
									+' % travel & should be satisfactory from sizing standard.</b></p>'
				
				
			    $("#ansmessagediv").html(ansmessagehtm);					
				
			};
				
			$("#nextLevel4").click(function() {
				
				Level4_AssembleControlValve();
//				vlave();
				
			});
			
			
			
			
//			$("#YGASValBtn").click(function() {
//				
//				var YGASValValAns = parseFloat($("#YGASVal").val());
//				
//				if(YGASValValAns != "" && !isNaN(YGASValValAns)){
//					
//
//				var YGASVal = (1 - (ratioGX /( 3 * GasFk * GasXT)));
//				
//				YGASValFinal = YGASVal.toFixed(2);
//									
//					if(YGASValValAns == YGASVal.toFixed(2) || YGASValValAns == YGASVal.toFixed(3)){
//						alert("Anwser is correct");
//						YGASFlag = 0;
//						    
//					}else{
//						YGASFlag++;
//						if (YGASFlag >= 3) {
//							alert("Answer is Incorrect");
//							alert("The correct answer is " + YGASVal.toFixed(2));
//						} else {
//							alert("Answer is Incorrect");
//						}
//					}
//				}else{
//						alert("Please enter the answer in numeric only ");
//				}
//
//			});	
				
};
	
	

	
	
	
});   //END LINE