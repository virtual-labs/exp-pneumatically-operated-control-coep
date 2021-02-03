// JavaScript Documentvar paper;

//var valveBodyBase ;
//var valveBodyULB ;
//var valveBodyURB ;
var ValveBody;

var DigramWidth = $("#diagram").width();
//var DigramWidth2 = $("#diagram2").width();
//console.log(DigramWidth);


identifyValve = function() {	
	
	
var	ValveBodyPaper = new Raphael(document.getElementById('ValveBody'), 350 ,220 );

//var w = 300;
//var h = 400;
////var paper = Raphael("wrap");
//ValveBodyPaper.setViewBox(0,0,w,h,true);
//var path = "M " + w / 2 + " " + h / 2;
//for (var i = 0; i < 100; i++){
//    var x = Math.random() * w;
//    var y = Math.random() * h;
//    ValveBodyPaper.path(x,y,
//                 Math.random() * 60 + 2).
//                 attr("fill", "rgb("+Math.random() * 255+",0,0)").
//                 attr("opacity", 0.5);
//    path += "L " + x + " " + y + " ";
//}


 var   BonnetPaper = new Raphael(document.getElementById('Bonnet'), 350 ,220 );
 
// var w = 300;
// var h = 350;
// //var paper = Raphael("wrap");
// BonnetPaper.setViewBox(0,0,w,h,true);
// var path = "M " + w / 2 + " " + h / 2;
// for (var i = 0; i < 100; i++){
//     var x = Math.random() * w;
//     var y = Math.random() * h;
//     BonnetPaper.path(x,y,
//                  Math.random() * 60 + 2).
//                  attr("fill", "rgb("+Math.random() * 255+",0,0)").
//                  attr("opacity", 0.5);
//     path += "L " + x + " " + y + " ";
// }
 
 
 var   PlugPaper = new Raphael(document.getElementById('plug'), 350 ,220 );
 
// var w = 300;
// var h = 400;
// //var paper = Raphael("wrap");
// PlugPaper.setViewBox(0,0,w,h,true);
// var path = "M " + w / 2 + " " + h / 2;
// for (var i = 0; i < 100; i++){
//     var x = Math.random() * w;
//     var y = Math.random() * h;
//     PlugPaper.path(x,y,
//                  Math.random() * 60 + 2).
//                  attr("fill", "rgb("+Math.random() * 255+",0,0)").
//                  attr("opacity", 0.5);
//     path += "L " + x + " " + y + " ";
// }
 
 
 var   SeatedRingPaper = new Raphael(document.getElementById('seatedRing'), 350 ,220 );
 
// var w = 300;
// var h = 400;
// //var paper = Raphael("wrap");
// SeatedRingPaper.setViewBox(0,0,w,h,true);
// var path = "M " + w / 2 + " " + h / 2;
// for (var i = 0; i < 100; i++){
//     var x = Math.random() * w;
//     var y = Math.random() * h;
//     SeatedRingPaper.path(x,y,
//                  Math.random() * 60 + 2).
//                  attr("fill", "rgb("+Math.random() * 255+",0,0)").
//                  attr("opacity", 0.5);
//     path += "L " + x + " " + y + " ";
// }
 
 var   PositionerStemPaper = new Raphael(document.getElementById('PositionerStem'), 350 ,220 );
 
// var w = 300;
// var h = 400;
// //var paper = Raphael("wrap");
// PositionerStemPaper.setViewBox(0,0,w,h,true);
// var path = "M " + w / 2 + " " + h / 2;
// for (var i = 0; i < 100; i++){
//     var x = Math.random() * w;
//     var y = Math.random() * h;
//     PositionerStemPaper.path(x,y,
//                  Math.random() * 60 + 2).
//                  attr("fill", "rgb("+Math.random() * 255+",0,0)").
//                  attr("opacity", 0.5);
//     path += "L " + x + " " + y + " ";
// }
 
 var   GlandPackingPaper = new Raphael(document.getElementById('gradelPlate'), 350 ,220 );
 
// var w = 300;
// var h = 400;
// //var paper = Raphael("wrap");
// GlandPackingPaper.setViewBox(0,0,w,h,true);
// var path = "M " + w / 2 + " " + h / 2;
// for (var i = 0; i < 100; i++){
//     var x = Math.random() * w;
//     var y = Math.random() * h;
//     GlandPackingPaper.path(x,y,
//                  Math.random() * 60 + 2).
//                  attr("fill", "rgb("+Math.random() * 255+",0,0)").
//                  attr("opacity", 0.5);
//     path += "L " + x + " " + y + " ";
// }
 
 var  IndicatorplatePaper = new Raphael(document.getElementById('Indicatorplate'), 350 ,220 );
 
// var w = 300;
// var h = 400;
// //var paper = Raphael("wrap");
// IndicatorplatePaper.setViewBox(0,0,w,h,true);
// var path = "M " + w / 2 + " " + h / 2;
// for (var i = 0; i < 100; i++){
//     var x = Math.random() * w;
//     var y = Math.random() * h;
//     IndicatorplatePaper.path(x,y,
//                  Math.random() * 60 + 2).
//                  attr("fill", "rgb("+Math.random() * 255+",0,0)").
//                  attr("opacity", 0.5);
//     path += "L " + x + " " + y + " ";
// }
 
 var DiaphragmActuatorPaper = new Raphael(document.getElementById('Spring'), 350,220 );
// var w = 300;
// var h = 400;
// //var paper = Raphael("wrap");
// DiaphragmActuatorPaper.setViewBox(0,0,w,h,true);
// var path = "M " + w / 2 + " " + h / 2;
// for (var i = 0; i < 100; i++){
//     var x = Math.random() * w;
//     var y = Math.random() * h;
//     DiaphragmActuatorPaper.path(x,y,
//                  Math.random() * 60 + 2).
//                  attr("fill", "rgb("+Math.random() * 255+",0,0)").
//                  attr("opacity", 0.5);
//     path += "L " + x + " " + y + " ";
// }
// 
 var Actuatorpaper = new Raphael(document.getElementById('Actuator'), 350,220 );
 
// var ActuatorStemPaper = new Raphael(document.getElementById('ActuatorStem'), 350,220 );
 
 
 
	x = 10 ;
	y = 0;


//	ValveBody = ValveBodyPaper.path('M' + (x+40) + ' ' + (y+ 200) + 'l 0 60 20 0 0 -40 60 0 20 15 30 0 20 -15 60 0 0 40 20 0 0 -60 -100 0 0 20 -30 0 0 -20 z'
//			+ 'M' + (x+40) + ' ' + (y+100) + 'l 0 60 80 0 0 5 5 0 0 -5  5 0 0 -5 0 -40 -15 0 0 -15 -7 0 0 -15  -5 0  0 15 -4 0 0 -15 -7 0 0 42 -30 0 0 -27 z' 
//			+'M' + (x+ 270) + ' ' + (y+100) + 'l 0 60 -80 0 0 5 -5 0 0 -5 -4 0 0 -45 16 0 0 -15 8 0 0 -15 4 0 0 15 5 0 0 -15 7 0 0 50 30 0 0 -35 z'
//					).attr({"stroke-width" : 2,
//						fill : "#958a6e",
//						"class" : "ValveBody"
////						 'z-index': 1
//					});
	
	
 
	var ValveBody = ValveBodyPaper.path('M' + (x+40) + ' ' + (y+210) + 'l 0 -70 28 0 42 40 85 0 0 -44 8 0 0 -20 15 4 0 15 68 0 0 75 -28 0 0 -45 -20 0 -25 45 -105 0 -40 -42 0 42 z'
			+ 'M' + (x+ 40) + ' ' + (y+10) + 'l 0 70 72 0 0 50 18 0 0 -5 -5 0 0 -78 -7 0 0 -15  -5 0  0 15 -4 0 0 -15 -7 0 0 38 -30 0 0 -60 z'	
			+'M' + (x+ 285) + ' ' + (y+10) + 'l 0 85 -25 0 -58 -10 0 -38 8 0 0 -15 4 0 0 15 5 0 0 -15 7 0 0 35 30 0 0 -55 z'
			).attr        ({
				"stroke-width" : 2,
						fill : "#958a6e"
				});	
	var  bonnetUL= BonnetPaper.path('M' + (x+120) + ' '  +(y+60) + 'l 5 0 0 9 5 0 0 -9 5 0 0 7 5 0 0 110 -20 0 0 -15 -8 0 0 -15 -18 0 0 -20 5 0 0 8  0 12 5 0 0 -20 16 0 z ' 
			 + 'M' + (x+190) + ' '  +(y+60) + 'l -5 0  0 9 -5 0 0 -9 -5 0 0 7 -5 0 0 110 20 0 0 -15 8 0 0 -15 18 0 0 -20 -5 0 0 20 -5 0 0 -20 -16 0 Z' 
			 +  'M' + (x+147) + ' '  +(y+63) + 'l -9 0 0 -7 -18 0 0 -12 5 0 0 12 5 0 0 -12 17 0 z' 
			 + 'M' + (x+163) + ' '  +(y+63) + 'l 9 0 0 -7 18 0 0 -12 -5 0 0 12 -5 0 0 -12 -17 0 z').attr({ 
			"stroke-width" : 2,
				fill : "#958a6e"
			});
	
	var PlugLine = PlugPaper.path('M' + (x+201) + ' ' + (y+50) + 'l 0  50  10 0 0 -50 z').attr({"stroke-width": 2, stroke: "#000" ,fill : "#436161"});
	var  Plug= PlugPaper.path('M' + (x+200) + ' '  +(y+160) + 'l 13 0 13 -60 -40 0 z').attr({ 
		"stroke-width" : 2,
			fill : "#436161"
		});
	var PlugLine = PlugPaper.path('M' + (x+110) + ' ' + (y+50) + 'l 0  50  10 0 0 -50 z').attr({"stroke-width": 2, stroke: "#000" ,fill : "#436161"});
	
	var Plug = PlugPaper.path('M100,100 C100,150 150,150 150,100 L 100 100')
	.attr({"stroke-width": 2, stroke: "#000" ,fill : "#436161"});
	
//		var seatRing = SeatedRingPaper.path( /*seatRing bottom start*/'M' + (x+130) + ' '  +(y+94) + 'l 0 15 18 0 -5 -15 z ' + 'M' + (x+180) + ' '  +(y+94) + 'l 0 15 -17 0 5 -15 z '/*seatRing bottom end*/ /*seatRing top start*/ + 'M' + (x+130) + ' '  +(y+50) + 'l 0 12 10 0 -3 -12 z ' + 'M' + (x+180) + ' '  +(y+50) + 'l 0 12 -10 0 3 -12 z '/*seatRing top end*/).attr({ 
//		"stroke-width" : 2,
//			fill : "#999",
//			
//		});
		
		
		var SeatedRing1 = SeatedRingPaper.ellipse(195, 80, 30, 12).attr({fill: '#fff', stroke:"#000" });
		var SeatedRing = SeatedRingPaper.ellipse(195, 80, 40, 20).attr({fill: '#958a6e', stroke:"#000"});
		var SeatedRing2 = SeatedRingPaper.ellipse(190, 90, 40, 20).attr({fill: '#958a6e', stroke:"#000"});


		var SeatedRing3 = SeatedRingPaper.ellipse(120, 110, 30, 12).attr({fill: '#fff', stroke:"#000" });
		var SeatedRing4 = SeatedRingPaper.ellipse(120, 110, 40, 20).attr({fill: '#958a6e', stroke:"#000"});
		var SeatedRing5 = SeatedRingPaper.ellipse(120, 120, 40, 20).attr({fill: '#958a6e', stroke:"#000"});

		SeatedRing.rotate(30);
		SeatedRing1.rotate(30);
		SeatedRing2.rotate(30);
		SeatedRing.toBack();
		SeatedRing2.toBack();

		SeatedRing4.toBack();
		SeatedRing5.toBack();
//		var ellipse = SeatedRingPaper.ellipse(100, 70, 70, 50).attr({"stroke-width": 2, stroke: "#000" ,fill : "#436161"});
//		var ellipse = SeatedRingPaper.ellipse(100, 60, 60, 50).attr({"stroke-width": 2, stroke: "#000" ,fill : "#436161"});
//		var ellipse = SeatedRingPaper.ellipse(100, 50, 50, 40).attr({"stroke-width": 2, stroke: "#000" ,fill : "#fff"});
//		var ellipse = SeatedRingPaper.path('M50,150 C80,40 200,40 200,50 ');
		
	var  PositionerStem = PositionerStemPaper.path('M' + (x+150) + ' '  +(y+220) + 'l 8 0 0 -150 15 0 0 -15 10 0 -15 0 10 -8 0 -20 0 5 -5 -5 -5 0 -5 5 0 5 5 5 5 0 5 -5 0 -20 -10 -8 -30 0 -10 8 0 15 5 -5 5 0 5 5 0 5 -5 5 -5 0 -5 -5 0 -7 0 17 10 8 -15 0 10 0 0 15 8 0 0 -15 25 0 0 15 -8 0 0 -15 -8 0 0 15 -8 0 0 -8 -8 0 40 0 -24 0 0 8 -5 0 5 0 z' ).attr({ 
	"stroke-width" : 2,
		fill : "#436161"
	});

	var  PositionerStem = PositionerStemPaper.path('M' + (x+168) + ' '  +(y+27) + 'l 5 0 5 5 0 5 -5 5 -5 0 -5 -5 0 -5 5 -5' ).attr({ 
		"stroke-width" : 2,
			fill : "#fff"
		});
		 
	

//	
//	var screwSL = screwS(x,y); 
//    var screwLL = screwL((x+0),(y+0)); 
//		
//		
	var grandpackSet = GlandPackingPaper.set();
	
	var GlandPackingUL = GlandPackingPaper.path( 'M' + (x+170) + ' '  +(y+80) + 'l -13 0 0 -30 13 0 0 30'  ).attr({ 
		"stroke-width" : 2,
		fill : "#a52a2a"	
		});
	
	var GlandPackingUR = GlandPackingPaper.path( 'M' + (x+144) + ' '  +(y+80) + 'l -13 0 0 -30 13 0 0 30'  ).attr({ 
		"stroke-width" : 2,
		fill : "#a52a2a"	
		});
	
	 var GlandPackingflowR  = GlandPackingPaper.path( 'M' + (x+170) + ' '  +(y+130) + 'l -13 0 0 -50 13 0 0 50'  ).attr({ 
		"stroke-width" : 2,
		fill : "#666"	
		});
	 var GlandPackingflowL  = GlandPackingPaper.path( 'M' + (x+144) + ' '  +(y+130) + 'l -13 0 0 -50 13 0 0 50'  ).attr({ 
			"stroke-width" : 2,
			fill : "#666"	
			});
	 
	 var GlandPackingBL = GlandPackingPaper.path( 'M' + (x+144) + ' '  +(y+150) + 'l -13 0 0 -30 13 0 0 30'  ).attr({ 
			"stroke-width" : 2,
			fill : "#a52a2a"	
			});
		
		var GlandPackingBR = GlandPackingPaper.path( 'M' + (x+170) + ' '  +(y+150) + 'l -13 0 0 -30 13 0 0 30'  ).attr({ 
			"stroke-width" : 2,
			fill : "#a52a2a"	
			});
		
	grandpackSet.push(GlandPackingUL,GlandPackingUR,GlandPackingflowL,GlandPackingflowL,GlandPackingBL,GlandPackingBR);
	
	
	var Indicatorplate = IndicatorplatePaper.path('M' + (x+140) + ' '  +(y+50) + 'l 15 0 0 80 -15 0 0 -7 5 0 -5 0 0 -7 7 0 -7 0 0 -7 5 0 -5 0 0 -7 7 0 -7 0 0 -7 5 0 -5 0 0 -7 7 0 -7 0 0 -7 5 0 -5 0 0 -7 7 0 -7 0 0 -7 5 0 -5 0 0 -7 7 0 -7 0 0 -10 z' ).attr({ 
		"stroke-width" : 2,
		fill : "#d2b48c"
		});	
//
//	var Indicatorplate = IndicatorplatePaper.path('M' + (x+140) + ' '  +(y+50) + 'l 15 0 0 80 -15 0 0 -7 8 0 -8 0 0 -7 5 0 -5 0 0 -7 8 0 -8 0 0 -7 5 0 -5 0 0 -7 8 0 -8 0 0 -7 5 0 -5 0 0 -7 0 5 -7 0' ).attr({ 
//		"stroke-width" : 2,
//		fill : "#d2b48c"
//		});	
	
// Diaphragm Actuator start 

	//var dif = DiapAct((x+0),(y+0));
	
//	var DiapAct = function(x,y)
//	{
		var DiaphragmActuator = DiaphragmActuatorPaper.set();
		
//		
//		var ActuatorStand = DiaphragmActuatorPaper.set();
//		 var  sidestandBL= DiaphragmActuatorPaper.path('M' + (x+111) + ' '  +(y+320) + 'l  -20 0 0 -200 -15 0 0 -5 65 0 0 -8 5 0 0 15 -5 0 0 5 -5 0 0 -6 -38 0 0 191 13 0 z ').attr({ 
//				"stroke-width" : 2,
//					fill : "#a28065"
//				});
//				
//				var  sidestandTL1= DiaphragmActuatorPaper.path('M' + (x+71) + ' '  +(y+113) + 'l 0 7 -40 0 0 -40 -10 0 0 -5 16 0 0 38 ').attr({ 
//				"stroke-width" : 2,
//					fill : "#a28065"
//				});
//				
//				var  sidestandTL2= DiaphragmActuatorPaper.path('M' + (x+23) + ' '  +(y+75) + 'l 10 0 -12 0 0 -5 10 0 0 -70 120 0 0 6 -114 0 0 69  z').attr({ 
//				"stroke-width" : 2,
//					fill : "#a28065"
//				});
//				var  sidestandBR= DiaphragmActuatorPaper.path('M' + (x+299) + ' '  +(y+75) + 'l -15 0 15 0 0 5 -14 0 0 40 -64 0 0 200 -20 0 0 -8 12 0 0 -192 -38 0 0 3 -5 0 0 -3 -6 0 0 -14 5 0 0 7 110 0 0  -40   ').attr({ 
//				"stroke-width" : 2,
//					fill : "#a28065"
//				});
//				
//				var  sidestandTR= DiaphragmActuatorPaper.path('M' + (x+160) + ' '  +(y+6) + 'l 0 -6 126 0 0 70 13 0 0 5 -20 0 0 -69   z ').attr({ 
//				"stroke-width" : 2,
//					fill : "#a28065"
//				});
//			
//		
//			ActuatorStand.push(sidestandBL,sidestandTL1,sidestandTL2,sidestandBR,sidestandTR);
//			var wavel = DiaphragmActuatorPaper.path('M' + (x+38) + ' '  +(y+75) + "C"+(x+52) +" ,50 "+(x+52)+",120 " + (x+62) + ' '  +(y+95) + 'l 190 0' + 'M' + (x+280) + ' '  +(y+82) + "C"+(x+269) +" ,50 "+(x+264)+",120 " + (x+249) + ' '  +(y+95)  ).attr({ 
//				"stroke-width" : 2,
//				stroke : "#ab4ef2"	
//				});
//			var  Diaphragm= DiaphragmActuatorPaper.path('M' + (x+50) + ' '  +(y+80) + 'l 0 10 100 0 0 135 10 0 0 -135 100 0 0 -10 z' ).attr({ 
//				"stroke-width" : 2,
//				fill : "#436161",
//				
//				});	 
		 	   
		var springs = DiaphragmActuatorPaper.set();
		 
		   
		var  sspring1 = DiaphragmActuatorPaper.path('M' + (x+120) + ' '  +(y+50) + 'l 70 -10 2 10 -70 10 z' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
		   
			});	 
		
		
		var  sspring2 = DiaphragmActuatorPaper.path('M' + (x+120) + ' '  +(y+75) + 'l 70 -10 2 10 -70 10 z ' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	 
		  
		var  sspring3 = DiaphragmActuatorPaper.path('M' + (x+120) + ' '  +(y+105) + 'l 70 -10 2 10 -70 10 z ' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	 
		var  sspring4 = DiaphragmActuatorPaper.path('M' + (x+120) + ' '  +(y+132) + 'l 70 -5 2 10 -70 5 z' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	 
		
		var  sspring5 = DiaphragmActuatorPaper.path('M' + (x+120) + ' '  +(y+50) + 'l 70 16 0 10 -70 -16 z' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	
		sspring5.toBack()
		var  sspring6 = DiaphragmActuatorPaper.path('M' + (x+120) + ' '  +(y+73) + 'l 70 20 0 10 -70 -20 z ' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	 
		sspring6.toBack()
		var  sspring7 = DiaphragmActuatorPaper.path('M' + (x+120) + ' '  +(y+108) + 'l 70 20 0 10 -70 -20 z ' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	
		 
		sspring7.toBack()
			   springs.push(sspring1,sspring2,sspring3,sspring4,sspring5,sspring6,sspring7);
		   
		DiaphragmActuator.push(springs)
		
	   // DiaphragmActuator.draggable(move, start, up);
//	}
// Diaphragm Actuator end		
		
		var  Actuator =	Actuatorpaper.path(
		        'M30,50 C40,30 300,30 300,50 M 300 50 l 0 10 -270 0 0 -10 '
		        ).attr({ 
				"stroke-width" : 2,
				fill : "#436161"
				});	 		
		var ActuatorLine = Actuatorpaper.path('M' + (x+150) + ' ' + (y+60) + 'l 0  150  10 0 0 -150 z').attr({"stroke-width": 2, stroke: "#000" ,fill : "#436161"});
		
//		var ActuatorStemSet = ActuatorStemPaper.set();
//		var  ActuatorS =	ActuatorStemPaper.path(
//		        'M30,20 C30,0 300,0 300,20 z'
//		        ).attr({ 
//				"stroke-width" : 2,
//				fill : "#436161"
//				});	 	
//		var  ActuatorStem = ActuatorStemPaper.path('M' + (x+20) + ' '  +(y+20) + 'Q 225, 20 l 129 0 0 155 10 0 0 -155 129 0 z ' ).attr({ 
//			"stroke-width" : 2,
//			fill : "#436161"
//			});	 
//		var  SpringBase= ActuatorStemPaper.path('M' + (x+149) + ' '  +(y+201) + 'l 10 0 0 -26 0 10 10 0 0 -8 15 0 0 -5 -60 0 0 5 15 0 0 8 10 0 0 -13  z' ).attr({ 
//	 		"stroke-width" : 2,
//	 			fill : "#436161"
//	 		});
//		ActuatorStemSet.push(ActuatorStem,SpringBase);


};


var screwS = function(x,y)
{
	paper.path('M' + (x+16) + ' '  +(y+305) + 'l 2 0 0 40 -2 0  0 -40 -5 0 0 5 12 0 0 -5 -5 0 2 0 0 -3 -5 0 0 3 3 0 z' ).attr({ 
	"stroke-width" : 2,
		fill : "#9a9a9a"
	});
	
}

var screwL = function(x,y)
{
	paper.path('M' + (x+9) + ' '  +(y+355) + 'l 2 0 0 55 -2 0  0 -55 -5 0 0 5 12 0 0 -5 -5 0 2 0 0 -3 -5 0 0 3 3 0 z' ).attr({ 
	"stroke-width" : 2,
		fill : "#9a9a9a"
	});
}
 
//var waveL = function(x,y) 
//{
//	paper.path( + 'l -30 0' +'M' + (x+36) + ' '  +(y+24) + "C"+(x+50) +" ,50 "+(x+60)+",120 " + (x+70) + ' '  +(y+40) + 'l 270 0' + 'M' + (x+375) + ' '  +(y+25) + "C"+(x+357) +" ,50 "+(x+352)+",120 " + (x+338) + ' '  +(y+40)  ).attr({ 
//	"stroke-width" : 2,
//	stroke : "#ab4ef2"	
//	});
//}

var GlandPacking = function(x,y)
{
	paper.path( 'M' + (x+499) + ' '  +(y+364) + 'l -13 0 0 -30 13 0 0 30'  ).attr({ 
	"stroke-width" : 2,
	fill : "#a52a2a"	
	});
}
var GlandPackingflow = function(x,y)
{
	paper.path( 'M' + (x+499) + ' '  +(y+364) + 'l -13 0 0 -50 13 0 0 50'  ).attr({ 
	"stroke-width" : 2,
	fill : "#666"	
	});
}


$("#check").bind('click', function() {
	
	  
});


