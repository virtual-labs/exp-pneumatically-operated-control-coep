$(function () {
	//$(".ajs-dialog").find(".ajs-header").hide();
	
	var validateJson = {};
	var i = 0;
	var count = $('#wrapper').find('select').length;
	var selectCount = 0;
//	console.log(count);
	
//	$("select.positionTypes").change(function () {
//		
//	    $("select.positionTypes option[value='" + $(this).data('index') + "']").show();
//	    $(this).data('index', this.value);
//	    $("select.positionTypes option[value='" + this.value + "']:not([value=''])").hide();
//	    
//	    });
	
	
	$(".positionTypes").change(function() {
        // Get the selected value
        var selected = $("option:selected", $(this)).val();
        // Get the ID of this element
        var thisID = $(this).attr("id");
        // Reset so all values are showing:
        
        $(".positionTypes").each(function() {
            if ($(this).attr("id") == thisID) {
            	selectCount++;
            }
        });
        
        
    	if(selected == thisID){
    		validateJson[i++] = true +'_'+thisID;
    	}else{
    		validateJson[i++] = false +'_'+thisID;
    	}
        	

    });
	
	

	
	$("#identify").click(function(){
		
		if(selectCount != count){
        	alertify.alert("Please select remaining elements");

        	
        
        }else{
        	var idCount = 0;
        	for(key in validateJson){
				var imgId = validateJson[key].split("_");
//				console.log(imgId);
				
				if(imgId[0] == "true"){
					idCount++;
					$("div#"+imgId[1]).addClass("success glyphicon glyphicon-ok");
				//	alertify.alert("all objects valid");
				
				}else{
					flag = false;
					idCount--;
				$("#"+imgId[1]).addClass("danger glyphicon glyphicon-remove");
					}
			}
			
			if(idCount == 9){
				$("#next").prop("disabled", false);
			}
        };
			
		
		
		
		
		
		
		
		
		
		
		
		
		
	});

});   //END LINE