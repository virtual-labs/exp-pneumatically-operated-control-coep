// JavaScript Documentvar paper;

 
      
function vlave(){	
	
	$("#investigateDiv").css("height", $(window).height());
	var DigramWidth = $("#investigateDiv").width();
	
	
	var rectX = DigramWidth - 850;
    var rectY = 10;
    var rectW = 500;
    var rectH = 650;
//	var DigramHeight = $("#diagram").height();
//	console.log(DigramWidth);
	
//	$("#investigateDiv").append(' <button id="check" style="float:right;">check</button>');

	
	paper = new Raphael(document.getElementById('investigateDiv'), DigramWidth, 800);
	
		
		x = 70;
		y = 20;
	
		var text = paper.text(150, 50, "Under Construction").attr({
			fill : "red",
  		"font-size" : '32px',
  		cursor : 'pointer'
  		
  	});
		
		
		var SeatedRingSet = paper.set();	
		var seatRingL = paper.path('M' + (x+468) + ' '  +(y+532) + 'l 0 17 22 0 0 -5  -5 -12 z ').attr({ 
		"stroke-width" : 2,
			fill : "#5a3702"
		});
		
		var seatRingR = paper.path('M' + (x+541) + ' '  +(y+532) + 'l 0 17 -21 0 0 -5 5 -12 z ').attr({ 
		"stroke-width" : 2,
			fill : "#5a3702"
		});
		SeatedRingSet.push(seatRingL,seatRingR);


	   var indicatorPlate = paper.path('M' + (x+548) + ' '  +(y+270) + 'l 15 0 0 50 -15 0 0 -7 8 0 -8 0 0 -7 5 0 -5 0 0 -7 8 0 -8 0 0 -7 5 0 -5 0 0 -7 8 0 -8 0 0 -7 5 0 -5 0 0 -7' ).attr({ 
		"stroke-width" : 2,
		fill : "#d2b48c"
		});	
		
		
		var plug = paper.path("M"+(x+525)+ " " + (y+495)+"A6,10 0 1,1,"+(x+485)+" "+(y+495)+"l 40 0")
					.attr({"stroke-width": 2, stroke: "#000" ,fill : "#436161"});
		
//	   var plug = paper.path("M 220, 300 A 10, 15 0 1, 0 280, 300 z").attr({
//			"stroke-width" : 2,
//			fill : "#C0C0C0"
//		});
	   
//		var plug = paper.path("M"+(x+490)+ " " + (y+495)+" A 10, 15 0 1, 0 "+(x+520)+ ", " + (y+495)+"  z").attr({
//			"stroke-width" : 2,
//			fill : "#C0C0C0"
//		});
//		plug.toFront();		
		var  Stem = paper.path('M' + (x+501) + ' '  +(y+495) + 'l 8 0 0 -180 15 0 0 -15 10 0 -15 0 10 -8 0 -20 0 5 -5 -5 -5 0 -5 5 0 5 5 5 5 0 5 -5 0 -20 -10 -8 -30 0 -10 8 0 15 5 -5        5 0    5 5 0 5 -5 5 -5 0 -5 -5 0 -7 0 17 10 8 -15 0 10 0 0 15 8 0 0 -15 25 0 0 15 -8 0 0 -15 -8 0 0 15 -8 0 0 -8 -8 0 40 0 -24 0 0 8 -5 0 5 0 z' ).attr({ 
		"stroke-width" : 2,
			fill : "#436161"
		});
			
		 
/*VALVE BODY START*/
		
		var valveBodySet = paper.set();
		
		var valveBody = paper.path('M' + (x+380) + ' ' + (y+625) + 'l 0 -70 28 0 42 40 85 0 0 -44 8 0 0 -20 15 4 0 15 68 0 0 75 -28 0 0 -45 -20 0 -25 45 -105 0 -40 -42 0 42 z'
		+ 'M' + (x+ 381) + ' ' + (y+432) + 'l 0 70 72 0 0 50 18 0 0 -5 -5 0 0 -78 -7 0 0 -15  -5 0  0 15 -4 0 0 -15 -7 0 0 38 -30 0 0 -60 z'	
		+ 'M' + (x+ 627) + ' ' + (y+432) + 'l 0 85 -25 0 -58 -10 0 -38 8 0 0 -15 4 0 0 15 5 0 0 -15 7 0 0 35 30 0 0 -55 z'
		).attr        ({
			"stroke-width" : 2,
					fill : "#958a6e"
			});	
		valveBodySet.push(valveBody,SeatedRingSet);
			
///*VALVE END START*/


		
//Diaphragm Actuater set start

	var DiaphragmActuaterSet = paper.set();
	var  Diaphragm= paper.path('M' + (x+371) + ' '  +(y+70) + 'Q 225, 20 l 129 0 0 155 10 0 0 -155 129 0 ' ).attr({ 
		"stroke-width" : 2,
		fill : "#436161"
		});	 
	
//		var  Diaphragm2 =	paper.path(
//        'M441,90 C441,60 709,60 709,90'
//        ).attr({ 
//		"stroke-width" : 2,
//		fill : "#436161"
//		});	 
//	
	
	
//	var c = paper.path("M10 10 l 90 0 l 0 10 l  -90 0 z"); 
	
//	d="M441,80 l 268, 0 l 0 10 l -268 0 z"
		var  Diaphragm2 =	paper.path(
		        'M441,80 l  268, 0 l 0 10 l -268 0 l 0 -10 '
		        ).attr({ 
				"stroke-width" : 2,
				fill : "#436161"
				});	 
		
		
	var springs = paper.set();
		 
		   
		var  sspring1 = paper.path('M' + (x+470) + ' '  +(y+135) + 'l 70 -10 2 10 -70 10 z' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
		   
			});	 
		
		
		var sspring2 = paper.path('M' + (x+470) + ' '  +(y+162) + 'l 70 -10 2 10 -70 10 z ' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	 
		  
		var sspring3 = paper.path('M' + (x+470) + ' '  +(y+192) + 'l 70 -10 2 10 -70 10 z ' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	 
		var sspring4 = paper.path('M' + (x+470) + ' '  +(y+217) + 'l 70 -5 2 10 -70 5 z' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	 
		 
		var sspring5 = paper.path('M' + (x+470) + ' '  +(y+135) + 'l 70 16 0 10 -70 -16 z' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	
		sspring5.toBack()
		var sspring6 = paper.path('M' + (x+470) + ' '  +(y+162) + 'l 70 20 0 10 -70 -20 z ' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	 
		sspring6.toBack()
		var sspring7 = paper.path('M' + (x+470) + ' '  +(y+192) + 'l 70 20 0 10 -70 -20 z ' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	
		 
		sspring7.toBack();
		springs.push(sspring1,sspring2,sspring3,sspring4,sspring5,sspring6,sspring7);
		
		var  SpringStand = paper.path('M' + (x+500) + ' '  +(y+253) + 'l 10 0 0 -26 0 10 10 0 0 -8 15 0 0 -5 -60 0 0 5 15 0 0 8 10 0 0 -13  z' ).attr({ 
		"stroke-width" : 2,
			fill : "#436161"
		});
	
	//M752,90 C752,130 391,130 391,130
	
	var  uppercapL =	paper.path(
   'M385,90 C351,10 570,10 570,10 L 570 25  C361,30 406,90 406,90 z'
     ).attr({ 
		"stroke-width" : 2,
		fill : "#a28065"
		});	 
	
	uppercapL.toBack();
	
	var  uppercapR =	paper.path(
   'M765,90 C807,10 560,10 580,10 L 580 25 C792,35 745,90 745,90  z'
     ).attr({ 
		"stroke-width" : 2,
		fill : "#a28065"
		});	 
	
	uppercapR.toBack();
	
	var  uppercapBase =	paper.path(
   'M383,90 C360,170 785,170 768,90 L 742 90 M745,90 C752,150 405,150 405,90 '
   //+ 'M752,90 C752,140 401,140 401,90  '
     ).attr({ 
		"stroke-width" : 2,
		fill : "#a28065"
		});	 
	
	uppercapBase.toFront();
	
	var  lineL =	paper.path(
   'M' + (x+300) + ' '  +(y+65) + 'l 0 -7 40 0 0 7 -40 0 0 7 40 0 0 -7'
     ).attr({ 
		"stroke-width" : 2,
		fill : "#a28065"
		});	 
	
	lineL.toFront();
	
	var  lineR =	paper.path(
   'M' + (x+670) + ' '  +(y+65) + 'l 0 -7 40 0 0 7 -40 0 0 7 40 0 0 -7'
     ).attr({ 
		"stroke-width" : 2,
		fill : "#a28065"
		});	 
	
	lineL.toFront();
	
	
	var  AirlineL =	paper.path(
   'M' + (x+495) + ' '  +(y-10) + 'l 0 30 7 0 0 -30 z'
     ).attr({ 
		"stroke-width" : 2,
		fill : "#a28065"
		});	 
	
	lineL.toFront();
	var  AirlineR =	paper.path(
   'M' + (x+509) + ' '  +(y-10) + 'l 0 30 7 0 0 -30 z'
     ).attr({ 
		"stroke-width" : 2,
		fill : "#a28065"
		});	 
	
	lineL.toFront();
	
	var  sidestandBL= paper.path('M' + (x+467) + ' '  +(y+390) + 'l  0 10 -38 0 0 -280 18 0 0 265 z').attr({ 
		"stroke-width" : 2,
			fill : "#a28065"
		});
		
		var  sidestandBR= paper.path('M' + (x+543) + ' '  +(y+390) + 'l  0 10 38 0 0 -280 -18 0 0 265 z  ').attr({ 
		"stroke-width" : 2,
			fill : "#a28065"
		});
	sidestandBL.toBack();
	sidestandBR.toBack();
	DiaphragmActuaterSet.push(Diaphragm,Diaphragm2,springs,uppercapL,uppercapR,uppercapBase,lineL,lineR,AirlineL,AirlineR,sidestandBL,sidestandBR,SpringStand,indicatorPlate);
	
	//Diaphragm Actuater set end
	
/*GLANDPACKING & bonnet START	*/


   var bonnetSet = paper.set();

      var  bonnetUL= paper.path('M' + (x+470) + ' '  +(y+363) + 'l 5 0 0 9 5 0 0 -9 5 0 0 7 5 0 0 110 -20 0 0 -15 -8 0 0 -15 -18 0 0 -20 5 0 0 8  0 12 5 0 0 -20 16 0 z ').attr({ 
		"stroke-width" : 2,
			fill : "#958a6e"
		});
		
		var  bonnetUR= paper.path('M' + (x+540) + ' '  +(y+363) + 'l -5 0  0 9 -5 0 0 -9 -5 0 0 7 -5 0 0 110 20 0 0 -15 8 0 0 -15 18 0 0 -20 -5 0 0 20 -5 0 0 -20 -16 0 Z').attr({ 
		"stroke-width" : 2,
			fill : "#958a6e"
		});
		
    var GlandPackingUL =  paper.path( 'M' + (x+499) + ' '  +(y+398) + 'l -13 0 0 -30 13 0 0 30'  ).attr({ 
		"stroke-width" : 2,
		fill : "#a52a2a"	
		});
	
	 var GlandPackingUR =  paper.path( 'M' + (x+524) + ' '  +(y+398) + 'l -13 0 0 -30 13 0 0 30'  ).attr({ 
	"stroke-width" : 2,
	fill : "#a52a2a"	
	});
	
	var GlandPackingBL =  paper.path( 'M' + (x+499) + ' '  +(y+476) + 'l -13 0 0 -30 13 0 0 30'  ).attr({ 
	"stroke-width" : 2,
	fill : "#a52a2a"	
	});
	var GlandPackingBR =  paper.path( 'M' + (x+524) + ' '  +(y+476) + 'l -13 0 0 -30 13 0 0 30'  ).attr({ 
	"stroke-width" : 2,
	fill : "#a52a2a"	
	});
	
	var GlandPackingflowL = paper.path( 'M' + (x+499) + ' '  +(y+448) + 'l -13 0 0 -50 13 0 0 50'  ).attr({ 
	"stroke-width" : 2,
	fill : "#666"	
	});
	var GlandPackingflowR = paper.path( 'M' + (x+524) + ' '  +(y+448) + 'l -13 0 0 -50 13 0 0 50'  ).attr({ 
	"stroke-width" : 2,
	fill : "#666"	
	});
	
	var screwSL = paper.path('M' + (x+476) + ' '  +(y+339) + 'l 2 0 0 40 -2 0  0 -40 -5 0 0 5 12 0 0 -5 -5 0 2 0 0 -3 -5 0 0 3 3 0 z' ).attr({ 
	"stroke-width" : 2,
		fill : "#9a9a9a"
	});
	var screwSR = paper.path('M' + (x+532) + ' '  +(y+339) + 'l 2 0 0 40 -2 0  0 -40 -5 0 0 5 12 0 0 -5 -5 0 2 0 0 -3 -5 0 0 3 3 0 z' ).attr({ 
	"stroke-width" : 2,
		fill : "#9a9a9a"
	});
	var screwLargeL = paper.path('M' + (x+451) + ' '  +(y+425) + 'l 2 0 0 45 -2 0  0 -45 -5 0 0 5 12 0 0 -5 -5 0 2 0 0 -3 -5 0 0 3 3 0 z' ).attr({ 
	"stroke-width" : 2,
		fill : "#9a9a9a"
	});
	var screwLargeR = paper.path('M' + (x+557) + ' '  +(y+425) + 'l 2 0 0 45 -2 0  0 -45 -5 0 0 5 12 0 0 -5 -5 0 2 0 0 -3 -5 0 0 3 3 0 z' ).attr({ 
	"stroke-width" : 2,
		fill : "#9a9a9a"
	});
	var  holderL= paper.path('M' + (x+497) + ' '  +(y+366) + 'l -9 0 0 -7 -18 0 0 -12 5 0 0 12 5 0 0 -12 17 0 z' ).attr({ 
		"stroke-width" : 2,
		fill : "#958a6e"
		});	 	
			 
		var  holderR= paper.path('M' + (x+513) + ' '  +(y+366) + 'l 9 0 0 -7 18 0 0 -12 -5 0 0 12 -5 0 0 -12 -17 0 z' ).attr({ 
		"stroke-width" : 2,
		fill : "#958a6e"
		});	 	

      bonnetSet.push(holderR,holderL,screwLargeR,screwLargeL,screwSR,screwSL,GlandPackingflowR,GlandPackingflowL,GlandPackingBR,GlandPackingBL,GlandPackingUR,GlandPackingUL,bonnetUL,bonnetUR);
      
      
      
      
    
      
      
      

//  	var startBtn = paper.rect(800, 100, 50, 50).attr({
//  		'fill' : '#09c',
//  		cursor : 'pointer'
//  	});
//
//  	var offBtn = paper.rect(900, 100, 50, 50).attr({
//  		'fill' : 'red',
//  		cursor : 'pointer'
//  	});
      
  	
	startBtn.click(function() {
		
	
		  Diaphragm2.animate({
			  path :  'M441,100 l  268, 0 l 0 10 l -268 0 l 0 -10 '
		  }, 1000);


		  
		  Diaphragm.animate({
			  path :    'M' + (x+371) + ' '  +(y+90) + 'Q 225, 20 l 129 0 0 155 10 0 0 -155 129 0 ' 
		  }, 1000);
		  
		  SpringStand.animate({
			  path :  'M' + (x+500) + ' '  +(y+273) + 'l 10 0 0 -26 0 10 10 0 0 -8 15 0 0 -5 -60 0 0 5 15 0 0 8 10 0 0 -13  z'
		  }, 1000);
				
		  sspring1.animate({
			  path :  'M' + (x+470) + ' '  +(y+145) + 'l 70 0 2 10 -70 0 z' 
		  }, 1000);
		  
		  
		  sspring2.animate({
			  path : 'M' + (x+470) + ' '  +(y+162) + 'l 70 0 2 10 -70 0 z '
		  }, 1000);
		  
		  sspring3.animate({
			  path : 'M' + (x+470) + ' '  +(y+192) + 'l 70 0 2 10 -70 0 z ' 
		  }, 1000);
		  
		  sspring4.animate({
			  path : 'M' + (x+470) + ' '  +(y+217) + 'l 70 0 2 10 -70 0 z'
		  }, 1000);
		  
		  sspring5.animate({
			  path : 'M' + (x+470) + ' '  +(y+135) + 'l 70 16 0 10 -70 -16 z'
		  }, 1000);  


//			var plug = paper.path("M"+(x+525)+ " " + (y+495)+"A6,10 0 1,1,"+(x+485)+" "+(y+495)+"l 40 0")
//			.attr({"stroke-width": 2, stroke: "#000" ,fill : "#436161"});
			
//var  Stem = paper.path('M' + (x+501) + ' '  +(y+495) + 'l 8 0 0 -180 15 0 0 -15 10 0 -15 0 10 -8 0 -20 0 5 -5 -5 -5 0 -5 5 0 5 5 5 5 0 5 -5 0 -20 -10 -8 -30 0 -10 8 0 15 5 -5        5 0    5 5 0 5 -5 5 -5 0 -5 -5 0 -7 0 17 10 8 -15 0 10 0 0 15 8 0 0 -15 25 0 0 15 -8 0 0 -15 -8 0 0 15 -8 0 0 -8 -8 0 40 0 -24 0 0 8 -5 0 5 0 z' ).attr({ 
//"stroke-width" : 2,
//	fill : "#436161"
//});
//		

		Stem.animate({
			path : 'M' + (x+501) + ' '  +(y+515) + 'l 8 0 0 -180 15 0 0 -15 10 0 -15 0 10 -8 0 -20 0 5 -5 -5 -5 0 -5 5 0 5 5 5 5 0 5 -5 0 -20 -10 -8 -30 0 -10 8 0 15 5 -5        5 0    5 5 0 5 -5 5 -5 0 -5 -5 0 -7 0 17 10 8 -15 0 10 0 0 15 8 0 0 -15 25 0 0 15 -8 0 0 -15 -8 0 0 15 -8 0 0 -8 -8 0 40 0 -24 0 0 8 -5 0 5 0 z' 
		}, 1000);  

		
		var plug = paper.path("M"+(x+490)+ " " + (y+495)+" A 10, 15 0 1, 0 "+(x+520)+ ", " + (y+495)+"  z").attr({
			"stroke-width" : 2,
			fill : "#C0C0C0"
		});

		plug.animate({
			  path : "M"+(x+480)+ " " + (y+515)+" A 10, 15 0 1, 0 "+(x+520)+ ", " + (y+515)+"  z"
		  }, 1000); 
	 
//			var sspring5 = paper.path('M' + (x+470) + ' '  +(y+135) + 'l 70 16 0 10 -70 -16 z' ).attr({ 
//				"stroke-width" : 2,
//			    "stroke" : "#000",
//			    fill : "#958a6e"
//				});	
//			sspring5.toBack()
//			var sspring6 = paper.path('M' + (x+470) + ' '  +(y+162) + 'l 70 20 0 10 -70 -20 z ' ).attr({ 
//				"stroke-width" : 2,
//			    "stroke" : "#000",
//			    fill : "#958a6e"
//				});	 
//			sspring6.toBack()
//			var sspring7 = paper.path('M' + (x+470) + ' '  +(y+192) + 'l 70 20 0 10 -70 -20 z ' ).attr({ 
//				"stroke-width" : 2,
//			    "stroke" : "#000",
//			    fill : "#958a6e"
//				});	
//		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
	});
  	
	offBtn.click(function() {

		  Diaphragm2.animate({
			  path :  'M441,80 l  268, 0 l 0 10 l -268 0 l 0 -10 '
		  }, 1000);
		  
		  Diaphragm.animate({
			  path :    'M' + (x+371) + ' '  +(y+70) + 'Q 225, 20 l 129 0 0 155 10 0 0 -155 129 0 ' 
		  }, 1000);
		  
		  SpringStand.animate({
			  path :  'M' + (x+500) + ' '  +(y+253) + 'l 10 0 0 -26 0 10 10 0 0 -8 15 0 0 -5 -60 0 0 5 15 0 0 8 10 0 0 -13  z'
		  }, 1000);
		
		  sspring1.animate({
			  path :  'M' + (x+470) + ' '  +(y+145) + 'l 70 -10 2 10 -70 10 z' 
		  }, 1000);
		  
		  sspring2.animate({
			  path : 'M' + (x+470) + ' '  +(y+162) + 'l 70 -10 2 10 -70 10 z '
		  }, 1000);
		  
		  sspring3.animate({
			  path : 'M' + (x+470) + ' '  +(y+192) + 'l 70 -10 2 10 -70 10 z ' 
		  }, 1000);
			
		  
		  sspring4.animate({
			  path : 'M' + (x+470) + ' '  +(y+217) + 'l 70 -5 2 10 -70 5 z'
		  }, 1000);
		  
//		  sspring5.animate({
//			  path : 'M' + (x+470) + ' '  +(y+135) + 'l 70 16 0 10 -70 -16 z'
//		  }, 1000);  
	});
	
	
  	
      
   // recangle start
      
//		var c = paper.rect(rectX, rectY, rectW, rectH).attr({ 
//			"stroke-width" : 2,
//		    "stroke" : "#000"
//		   
//			});	
		
		 // recangle end
		
/*GLANDPACKING & bonnet END	*/

//valveBody.draggable();
//valveBody.drag(move, start, up);

//      Raphael.st.draggable = function() {
//    	  var me = this,
//    	    lx = 0,
//    	    ly = 0,
//    	    ox = 0,
//    	    oy = 0,
//    	    moveFnc = function(dx, dy) {
//    	      lx = dx + ox;
//    	      ly = dy + oy;
//    	      me.transform('t' + lx + ',' + ly);
//    	    },
//    	    startFnc = function() {},
//    	    endFnc = function() {
//    	      ox = lx;
//    	      oy = ly;
//    	    };
//
//    	  this.drag(moveFnc, startFnc, endFnc);
//    	};
	
//var start = function () {
//	  this.odx = 0;
//    this.ody = 0;
//	  this.animate({"fill-opacity": 0.2}, 500);
//	},
//	move = function (dx, dy) {
//	  this.translate(dx - this.odx, dy - this.ody);
//	  this.odx = dx;
//	  this.ody = dy;
//	},
//	up = function () {
//	    this.animate({"fill-opacity": 1}, 500);
//	};
	

//	DiaphragmActuaterSet.transform("t-350,10");
	
//	valveBodySet.draggable();
//	
//	DiaphragmActuaterSet.draggable();
//	bonnetSet.draggable();
//	plug.drag(move, start, up);
//	Stem.drag(move, start, up);
	
	
	
	

	$("#check").click(function() {
		
		
//			valveBody.attr({'fill' : '#958a6e','stroke' : '#000' });
		
		
			  valveBodyX = valveBody.getBBox().x;
			  valveBodyY = valveBody.getBBox().y;
			  
			  bonnetSetX = bonnetSet.getBBox().x;
			  bonnetSetY = bonnetSet.getBBox().y;
			  
			  plugX = bonnetSet.getBBox().x;
			  plugY = bonnetSet.getBBox().y;  
			  
			  
			  DiaActX = DiaphragmActuaterSet.getBBox().x;
			  DiaActY = DiaphragmActuaterSet.getBBox().y;
			  
			  console.log(rectX +100);
			  console.log(rectY + 450);
			  
			  
			  // valve Body zala
			  if( valveBodyX > (rectX + 100)  &&  valveBodyY >= (rectY + 450) && valveBodyY <= (rectY + 455)){
				  if(valveBodyX > (rectX + 150)  ){
					  alertify.alert("Valve body wrong");
				  }else{
					  alertify.alert("Valve body correct");
				  }
			  }else{
				  alertify.alert("Valve body wrong")
			  }
			  
			  
			  // SeatedRingX cha CHALU AHE
			  if(bonnetSetX > (rectX + 175)  &&  bonnetSetY >= (rectY + 322 )  ){
				  
				  if(bonnetSetX > (rectX + 220)  ){
					  alertify.alert("Bonnet wrong");
				  }else {
						  alertify.alert("Bonnet correct");
				  } 	
				  
			  }else{
				  alertify.alert("Bonnet wrong")
			  }
			  
			  
			  
			  if(DiaActX > (rectX + 50)  &&  DiaActY >= (rectY + 10 )  ){
				  
//				  if(DiaActX > (rectX + 100)  ){
//					  alertify.alert("DiaAct wrong");
//				  }else {
						  alertify.alert("DiaAct correct");
//				  } 	
				  
			  }else{
				  alertify.alert("DiaAct wrong")
			  }
			  
			  
//			  if(plugX > (rectX + 202)  &&  plugY >= (rectY + 256 ) ){
//				  
//				  if(plugX > (rectX + 240)  ){
//					  alertify.alert("Plug wrong");
//				  }else {
//						  alertify.alert("Plug correct");
//				  } 
//				  
//				  
////				  alertify.alert("Plug correct");
//			  }else{
//				  alertify.alert("Plug wrong")
//			  }
			  
		});

};


