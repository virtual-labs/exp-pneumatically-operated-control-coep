// JavaScript Document
$(function () {
	var validateJson = {};
	var i = 0;
	var count = $('#dvSource').find('img').length;
	
	
	
//bodyVolve start
          $("#dvSource .acceptAnything").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    
                }
            });
            
            $("#dvDest  #DropBodyValve").droppable({
            	accept : ".acceptAnything",
				
                drop: function (event, ui) {
                    	
                    var droppable = $("#dvDest #DropBodyValve");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped");
				   
                    draggable.appendTo(droppable);
					
					//$(".acceptAnything").removeClass('sourceImg1');
//					$(".acceptAnything").addClass('img1');
//					$(".acceptAnything").removeClass('img2');
//					$(".acceptAnything").removeClass('img3');
//					$(".acceptAnything").removeClass('img4');
					//$(".acceptAnything").removeClass('sourceImg1');
					
					
					$(".acceptAnything").css({
						"left" : "0px",
						"top" : "0px"
						});
						
                    $("#DropBodyValve").droppable( "destroy" );
					var getImgId = $("#DropBodyValve").find('img').attr('id');
					 var draggableId = ui.draggable.attr("id");
					 console.log(draggableId);
					if(getImgId == $("#DropBodyValve").attr('name')){
						validateJson[i++] = true + "_" + draggableId
						
					}else{
						validateJson[i++] = false + '_' + draggableId					
					}
					
					$("#"+draggableId).css({
						"margin": "83px 30%",
						// "width":"80%","height":"200px"
						})
				    console.log(validateJson);
                }
            });//bodyVolve start
			
//bonnet start
          $("#dvSource .acceptAnything").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    
                }
            });
            
            $("#dvDest #DropBonnet").droppable({
            	accept : ".acceptAnything",
                drop: function (event, ui) {
                    	
                    var droppable = $("#dvDest #DropBonnet");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped");
				   
                    draggable.appendTo(droppable);
					
					//$(".acceptAnything").removeClass('sourceImg1');
//					$(".acceptAnything").addClass('img2');
					$(".acceptAnything").css({
						"left" : "0px",
						"top" : "0px"
						});
                    $( "#DropBonnet" ).droppable( "destroy" );
					var draggableId = ui.draggable.attr("id");
					var getImgId = $("#DropBonnet").find('img').attr('id');
					if(getImgId == $("#DropBonnet").attr('name')){
						validateJson[i++] = true + '_' + draggableId
					}else{
						validateJson[i++] = false + '_' + draggableId
					}
					
					$("#"+draggableId).css({
						"margin": "83px 30%",
						// "width":"80%","height":"200px"
						})
				    console.log(validateJson);
					
                }
            });//bonnet start		
			
			
	<!--DiaphragmActuator start-->		
			 $("#dvSource .acceptAnything").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    
                }
            });
            
            $("#dvDest  #DropDiaphragmActuator").droppable({
            	accept : ".acceptAnything",
                drop: function (event, ui) {
                    	
                    var droppable = $("#dvDest #DropDiaphragmActuator");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped");
				   
                    draggable.appendTo(droppable);
					
					//$(".acceptAnything").removeClass('sourceImg1');
//					$(".acceptAnything").addClass('img1');
					$(".acceptAnything").css({
						"left" : "0px",
						"top" : "0px"
						});
                    $( "#DropDiaphragmActuator" ).droppable( "destroy" );
					var draggableId = ui.draggable.attr("id");
					var getImgId = $("#DropDiaphragmActuator").find('img').attr('id');
					if(getImgId == $("#DropDiaphragmActuator").attr('name')){
						validateJson[i++] = true + '_' + draggableId
					}else{
						validateJson[i++] = false + '_' + draggableId
					}
					
					$("#"+draggableId).css({
						"margin": "83px 30%",
						// "width":"80%","height":"200px"
						})
				    console.log(validateJson);
                }
            });
			
	<!--DiaphragmActuator End-->				
			
	  <!--GlandPackingSet Start-->			
		      $("#dvSource .acceptAnything").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    
                }
            });
            
            $("#dvDest  #DropGlandPackingSet").droppable({
            	accept : ".acceptAnything",
                drop: function (event, ui) {
                    	
                    var droppable = $("#dvDest #DropGlandPackingSet");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped");
				   
                    draggable.appendTo(droppable);
					
					//$(".acceptAnything").removeClass('sourceImg1');
//					$(".acceptAnything").addClass('img3');
					$(".acceptAnything").css({
						"left" : "0px",
						"top" : "0px"
						});
                    $( "#DropGlandPackingSet" ).droppable( "destroy" );
					var draggableId = ui.draggable.attr("id");
					var getImgId = $("#DropGlandPackingSet").find('img').attr('id');
					if(getImgId == $("#DropGlandPackingSet").attr('name')){
						validateJson[i++] = true + '_' + draggableId
					}else{
						validateJson[i++] = false + '_' + draggableId
					}
					
					$("#"+draggableId).css({
						"margin": "83px 30%",
						// "width":"80%","height":"200px"
						})
				    console.log(validateJson);
                }
            });
			
    <!--GlandPackingSet End-->					
			
		
		
	<!--Indicater plate start		-->
	            $("#dvSource .acceptAnything").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    
                }
            });
            
            $("#dvDest  #DropIndicaterPlate").droppable({
            	accept : ".acceptAnything",
                drop: function (event, ui) {
                    	
                    var droppable = $("#dvDest #DropIndicaterPlate");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped");
				   
                    draggable.appendTo(droppable);
					
				//	$(".acceptAnything").removeClass('sourceImg1');
//					$(".acceptAnything").addClass('img4');
					$(".acceptAnything").css({
						"left" : "0px",
						"top" : "0px"
						});
                    $( "#DropIndicaterPlate" ).droppable( "destroy" );
					var draggableId = ui.draggable.attr("id");
					var getImgId = $("#DropIndicaterPlate").find('img').attr('id');
					if(getImgId == $("#DropIndicaterPlate").attr('name')){
						validateJson[i++] = true + '_' + draggableId
					}else{
						validateJson[i++] = false + '_' + draggableId
					}
					
					$("#"+draggableId).css({
						"margin": "83px 30%",
						// "width":"80%","height":"200px"
						})
				    console.log(validateJson);
                }
            });
		
	
	<!--Indicater plate end		-->
	
<!--	plug start -->
                 $("#dvSource .acceptAnything").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    
                }
            });
            
            $("#dvDest  #DropPlug").droppable({
            	accept : ".acceptAnything",
                drop: function (event, ui) {
                    	
                    var droppable = $("#dvDest #DropPlug");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped");
				   
                    draggable.appendTo(droppable);
					
				//	$(".acceptAnything").removeClass('sourceImg1');
//					$(".acceptAnything").addClass('img4');
					$(".acceptAnything").css({
						"left" : "0px",
						"top" : "0px"
						});
                    $( "#DropPlug" ).droppable( "destroy" );
					var draggableId = ui.draggable.attr("id");
					var getImgId = $("#DropPlug").find('img').attr('id');
					if(getImgId == $("#DropPlug").attr('name')){
						validateJson[i++] = true + '_' + draggableId
					}else{
						validateJson[i++] = false + '_' + draggableId
					}
					
					$("#"+draggableId).css({
						"margin": "83px 30%",
						// "width":"80%","height":"200px"
						})
				    console.log(validateJson);
                }
            });
		
	
<!--	plug end -->
	
<!--seated ring start-->
                   $("#dvSource .acceptAnything").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    
                }
            });
            
            $("#dvDest  #DropSeatedRing").droppable({
            	accept : ".acceptAnything",
                drop: function (event, ui) {
                    	
                    var droppable = $("#dvDest #DropSeatedRing");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped");
				   
                    draggable.appendTo(droppable);
					
				//	$(".acceptAnything").removeClass('sourceImg1');
//					$(".acceptAnything").addClass('img4');
					$(".acceptAnything").css({
						"left" : "0px",
						"top" : "0px"
						});
                    $( "#DropSeatedRing" ).droppable( "destroy" );
					var draggableId = ui.draggable.attr("id");
					var getImgId = $("#DropSeatedRing").find('img').attr('id');
					if(getImgId == $("#DropSeatedRing").attr('name')){
						validateJson[i++] = true + '_' + draggableId
					}else{
						validateJson[i++] = false + '_' + draggableId
					}
					
					$("#"+draggableId).css({
						"margin": "83px 30%",
						// "width":"80%","height":"200px"
						})
				    console.log(validateJson);
                }
            });
		

<!--seated ring start-->

<!--stem start-->	
            $("#dvSource .acceptAnything").draggable({
                revert: "invalid",
                refreshPositions: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    ui.helper.removeClass("draggable");
                    
                }
            });
            
            $("#dvDest  #DropStem").droppable({
            	accept : ".acceptAnything",
                drop: function (event, ui) {
                    	
                    var droppable = $("#dvDest #DropStem");
       				var draggable = ui.draggable;
                    draggable.addClass("dropped");
				   
                    draggable.appendTo(droppable);
					
				//	$(".acceptAnything").removeClass('sourceImg1');
//					$(".acceptAnything").addClass('img1');
					$(".acceptAnything").css({
						"left" : "0px",
						"top" : "0px"
						});
                    $( "#DropStem" ).droppable( "destroy" );
					var draggableId = ui.draggable.attr("id");
					var getImgId = $("#DropStem").find('img').attr('id');
					if(getImgId == $("#DropStem").attr('name')){
						validateJson[i++] = true + '_' + draggableId
					}else{
						validateJson[i++] = false + '_' + draggableId
					}
					
					$("#"+draggableId).css({
						"margin": "83px 30%",
						// "width":"80%","height":"200px"
						})
				    console.log(validateJson);
                }
            });
		
<!--stem end-->	
	function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
	}
	
	$("#identify").click(function(){
		console.log(validateJson);
		var flag = true;
		if(isEmpty(validateJson)) {
   			alertify.alert("Please place components accordingly");
		} else {
			console.log(validateJson);
			
			if(count == Object.keys(validateJson).length){
				
			
			for(key in validateJson){
				var imgId = validateJson[key].split("_");
				console.log(imgId);
				if(imgId[0] == "true"){
					$("#"+imgId[1]).addClass("success");
				//	alertify.alertify.alertify.alert("all objects valid");
				}else{
					flag = false;
				$("#"+imgId[1]).addClass("danger");
					}
			}
						
			if(flag == false){
					//$(".img").addClass("danger");
				alertify.alert("Components placed wrongly");
			}else{
			    // $(".img").addClass("success");
				alertify.alert("All components are placed correctly");
				}
			}else{
				alertify.alert("Please palce remaining elements");
				}
			
		}
   		
	});
	
	$("#reset").click(function(){
		window.location.reload(true);
		
	});
});   //END LINE