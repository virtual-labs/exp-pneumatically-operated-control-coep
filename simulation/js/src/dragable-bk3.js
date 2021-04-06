// JavaScript Documentvar paper;

//var valveBodyBase ;
//var valveBodyULB ;
//var valveBodyURB ;
var ValveBody;

var DigramWidth = $("#diagram").width();
//var DigramWidth2 = $("#diagram2").width();
console.log(DigramWidth);
function vlave(){	
	paper = new Raphael(document.getElementById('diagram'), 1200 ,1500 );
//	paper2 = new Raphael(document.getElementById('diagram2'), DigramWidth ,600 );
	
	
//	paper.attr({
//	    'stroke': 'blue',
//	    
//	    'z-index': 1
//	  });
//	
//	paper2.attr({
//	    'stroke': 'blue',
//	   
//	    'z-index': 1
//	  });
	
	x = 0;
	y = 20;


	ValveBody = paper.path('M' + 100 + ' ' + (y+ 540) + 'l 0 60 20 0 0 -40 60 0 20 15 30 0 20 -15 60 0 0 40 20 0 0 -60 -100 0 0 20 -30 0 0 -20 z'
			+ 'M' + 100 + ' ' + (y+435) + 'l 0 60 80 0 0 5 5 0 0 -5  5 0 0 -5 0 -40 -15 0 0 -15 -7 0 0 -15  -5 0  0 15 -4 0 0 -15 -7 0 0 42 -30 0 0 -27 z' 
			+'M' + (x+ 328) + ' ' + (y+435) + 'l 0 60 -80 0 0 5 -5 0 0 -5 -4 0 0 -45 16 0 0 -15 8 0 0 -15 4 0 0 15 5 0 0 -15 7 0 0 50 30 0 0 -35 z'
					).attr({"stroke-width" : 2,
						fill : "#958a6e",
						"class" : "ValveBody"
//						 'z-index': 1
					});
	
	
	
		var seatRing = paper.path( /*seatRing bottom start*/'M' + (x+80) + ' '  +(y+350) + 'l 0 15 18 0 -5 -15 z ' + 'M' + (x+130) + ' '  +(y+350) + 'l 0 15 -17 0 5 -15 z '/*seatRing bottom end*/ /*seatRing top start*/ + 'M' + (x+76) + ' '  +(y+306) + 'l 0 12 10 0 -3 -12 z ' + 'M' + (x+134) + ' '  +(y+306) + 'l 0 12 -10 0 3 -12 z '/*seatRing top end*/).attr({ 
		"stroke-width" : 2,
			fill : "#999",
			
		});
		
		

	var  PositionerStem= paper.path('M' + (x+1100) + ' '  +(y+298) + 'l 8 0 0 -207 15 0 0 -15 10 0 -15 0 10 -8 0 -20 0 5 -5 -5 -5 0 -5 5 0 5 5 5 5 0 5 -5 0 -20 -10 -8 -30 0 -10 8 0 15 5 -5 5 0 5 5 0 5 -5 5 -5 0 -5 -5 0 -7 0 17 10 8 -15 0 10 0 0 15 8 0 0 -15 25 0 0 15 -8 0 0 -15 -8 0 0 15 -8 0 0 -8 -8 0 40 0 -24 0 0 8 -5 0 5 0 z' ).attr({ 
	"stroke-width" : 2,
		fill : "#436161"
	});

	var  bonnetUL= paper.path('M' + (x+70) + ' '  +(y+129) + 'l 5 0 0 9 5 0 0 -9 5 0 0 7 5 0 0 110 -20 0 0 -15 -8 0 0 -15 -18 0 0 -20 5 0 0 8  0 12 5 0 0 -20 16 0 z ' 
									 + 'M' + (x+140) + ' '  +(y+129) + 'l -5 0  0 9 -5 0 0 -9 -5 0 0 7 -5 0 0 110 20 0 0 -15 8 0 0 -15 18 0 0 -20 -5 0 0 20 -5 0 0 -20 -16 0 Z' 
									 +  'M' + (x+97) + ' '  +(y+132) + 'l -9 0 0 -7 -18 0 0 -12 5 0 0 12 5 0 0 -12 17 0 z' 
									 + 'M' + (x+113) + ' '  +(y+132) + 'l 9 0 0 -7 18 0 0 -12 -5 0 0 12 -5 0 0 -12 -17 0 z').attr({ 
									"stroke-width" : 2,
										fill : "#958a6e"
									});
	
	
		 
	

//	
//	var screwSL = screwS(x,y); 
//    var screwLL = screwL((x+0),(y+0)); 
//		
//		
	
	
	var GlandPackingUL = paper.path( 'M' + (x+499) + ' '  +(y+364) + 'l -13 0 0 -30 13 0 0 30'  ).attr({ 
		"stroke-width" : 2,
		fill : "#a52a2a"	
		});
    var GlandPackingBL = GlandPacking((x),(y+78));
    var GlandPackingflowL = GlandPackingflow((x) ,(y+50));
	
	var GlandPackingUR = paper.path( 'M' + (x+524) + ' '  +(y+364) + 'l -13 0 0 -30 13 0 0 30'  ).attr({ 
		"stroke-width" : 2,
		fill : "#a52a2a"	
		});
	var GlandPackingBR = GlandPacking((x+25),(y+78));
	var GlandPackingflowL = GlandPackingflow((x+25) ,(y+50));
	
	var Indicatorplate = paper.path('M' + (x+70) + ' '  +(y+50) + 'l 15 0 0 50 -15 0 0 -7 8 0 -8 0 0 -7 5 0 -5 0 0 -7 8 0 -8 0 0 -7 5 0 -5 0 0 -7 8 0 -8 0 0 -7 5 0 -5 0 0 -7' ).attr({ 
		"stroke-width" : 2,
		fill : "#d2b48c"
		});	

 /* DIAPHRAGM ACTUATOR START  */
 
 
	
	
	
	
	var  Plug= paper.path('M' + (x) + ' '  +(y+260) + 'l 13 0 13 -60 -40 0 z').attr({ 
	"stroke-width" : 2,
		fill : "#436161"
	});
	
// Diaphragm Actuator start 
	
		var DiaphragmActuator = paper.set();
		
		
		var ActuatorStand = paper.set();
		 var  sidestandBL= paper.path('M' + (x+111) + ' '  +(y+320) + 'l  -20 0 0 -200 -15 0 0 -5 65 0 0 -8 5 0 0 15 -5 0 0 5 -5 0 0 -6 -38 0 0 191 13 0 z ').attr({ 
				"stroke-width" : 2,
					fill : "#a28065"
				});
				
				var  sidestandTL1= paper.path('M' + (x+71) + ' '  +(y+113) + 'l 0 7 -40 0 0 -40 -10 0 0 -5 16 0 0 38 ').attr({ 
				"stroke-width" : 2,
					fill : "#a28065"
				});
				
				var  sidestandTL2= paper.path('M' + (x+23) + ' '  +(y+75) + 'l 10 0 -12 0 0 -5 10 0 0 -70 120 0 0 6 -114 0 0 69  z').attr({ 
				"stroke-width" : 2,
					fill : "#a28065"
				});
				var  sidestandBR= paper.path('M' + (x+299) + ' '  +(y+75) + 'l -15 0 15 0 0 5 -14 0 0 40 -64 0 0 200 -20 0 0 -8 12 0 0 -192 -38 0 0 3 -5 0 0 -3 -6 0 0 -14 5 0 0 7 110 0 0  -40   ').attr({ 
				"stroke-width" : 2,
					fill : "#a28065"
				});
				
				var  sidestandTR= paper.path('M' + (x+160) + ' '  +(y+6) + 'l 0 -6 126 0 0 70 13 0 0 5 -20 0 0 -69   z ').attr({ 
				"stroke-width" : 2,
					fill : "#a28065"
				});
			
		
			ActuatorStand.push(sidestandBL,sidestandTL1,sidestandTL2,sidestandBR,sidestandTR);
			var wavel = paper.path('M' + (x+38) + ' '  +(y+75) + "C"+(x+52) +" ,50 "+(x+52)+",120 " + (x+62) + ' '  +(y+95) + 'l 190 0' + 'M' + (x+280) + ' '  +(y+82) + "C"+(x+269) +" ,50 "+(x+264)+",120 " + (x+249) + ' '  +(y+95)  ).attr({ 
				"stroke-width" : 2,
				stroke : "#ab4ef2"	
				});
			var  Diaphragm= paper.path('M' + (x+50) + ' '  +(y+80) + 'l 0 10 100 0 0 135 10 0 0 -135 100 0 0 -10 z' ).attr({ 
				"stroke-width" : 2,
				fill : "#436161",
				
				});	 
		 	   var  SpringBase= paper.path('M' + (x+150) + ' '  +(y+251) + 'l 10 0 0 -26 0 10 10 0 0 -8 15 0 0 -5 -60 0 0 5 15 0 0 8 10 0 0 -13  z' ).attr({ 
		 		"stroke-width" : 2,
		 			fill : "#436161"
		 		});
		var springs = paper.set();
		 
		   
		var  sspring1 = paper.path('M' + (x+120) + ' '  +(y+130) + 'l 70 -10 2 10 -70 10 z' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
		   
			});	 
		
		
		var  sspring2 = paper.path('M' + (x+120) + ' '  +(y+157) + 'l 70 -10 2 10 -70 10 z ' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	 
		  
		var  sspring3 = paper.path('M' + (x+120) + ' '  +(y+187) + 'l 70 -10 2 10 -70 10 z ' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	 
		var  sspring4 = paper.path('M' + (x+120) + ' '  +(y+212) + 'l 70 -5 2 10 -70 5 z' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	 
		
		var  sspring5 = paper.path('M' + (x+120) + ' '  +(y+130) + 'l 70 16 0 10 -70 -16 z' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	
		sspring5.toBack()
		var  sspring6 = paper.path('M' + (x+120) + ' '  +(y+158) + 'l 70 20 0 10 -70 -20 z ' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	 
		sspring6.toBack()
		var  sspring7 = paper.path('M' + (x+120) + ' '  +(y+188) + 'l 70 20 0 10 -70 -20 z ' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	
		
		
		
		 
		sspring7.toBack()
			   springs.push(sspring1,sspring2,sspring3,sspring4,sspring5,sspring6,sspring7);
		   
		DiaphragmActuator.push(wavel,springs,Diaphragm,SpringBase,ActuatorStand)
		
	DiaphragmActuator.draggable(move, start, up);
		


// Diaphragm Actuator end		
		
		
		// recangle start
		var c = paper.rect(400, 10, 500, 800).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000"
		   
			});	
		
		
		var  rectangle = paper.rect('' + (x+120) + ' '  +(y+188) + '120, 500 ' ).attr({ 
			"stroke-width" : 2,
		    "stroke" : "#000",
		    fill : "#958a6e"
			});	
		
		// recangle end
		
		var start = function () {
		  this.odx = 0;
	      this.ody = 0;
		  this.animate({"fill-opacity": 0.2}, 500);
		},
		move = function (dx, dy) {
		  this.translate(dx - this.odx, dy - this.ody);
		  this.odx = dx;
		  this.ody = dy;
		},
		up = function () {
		    this.animate({"fill-opacity": 1}, 500);
		};
		
	
		ValveBody.drag(move, start, up);
		seatRing.drag(move, start, up);
		PositionerStem.drag(move, start, up);
		bonnetUL.drag(move, start, up);
		Plug.drag(move, start, up);
		Indicatorplate.drag(move, start, up);
		
		


$("#check").bind('click', function() {
	ValveBody.attr({'fill' : '#958a6e','stroke' : '#000' });
	 
	  x = valveBody.getBBox().x;
	  y = valveBody.getBBox().y;
	  
	  x1 = ValveBody.getBBox().x;
	  y1 = ValveBody.getBBox().y;
	  
	  console.log(x, y);
	  console.log(x1, y1);
	  x=0;
	  y=0;
	  if (x1 > 10 && x1 < 300 && y1 > 330 && y1 < 700) {
		  ValveBody.undrag();
		  ValveBody.attr({'fill' : '#958a6e','stroke' : '#98FB98' });
	
	  } else {
		 
		  ValveBody.drag(move, start, up);
		  
		  ValveBody.attr({'fill' : '#958a6e','stroke' : '#FA8072' });
		 
//	  if(x1 > 300 && x1 < 600 && y1 > 330 && y1 < 700)
//	  {
//		  ValveBody.drag(move, start, up);
//	  ValveBody.attr({'fill':'','stroke':'red'});
//	 
//	  }
	  
	  }
	  
	  
	  
});
$('.ValveBody').mouseover(function(){
	ValveBody.attr({'fill' : '#958a6e','stroke' : '#000' });
	 
});
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

Raphael.st.draggable = function() {
  var me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0,
      moveFnc = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly );
      },
      startFnc = function() {},
      endFnc = function() {
          ox = lx;
          oy = ly;
      };
  
  this.drag(moveFnc, startFnc, endFnc);
  return this;
};



