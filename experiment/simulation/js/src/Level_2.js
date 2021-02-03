// JavaScript Document
$(function () {
	
	
	$("#next").click(function(){
		 $("header").html("<img src='images/COEPlogo.png'/> <h1>COLLEGE OF ENGINEERING, PUNE</h1><h2><i>Questions On Control Valve </i></h2>");
		$("#main-div").html("");
		$("#main-div").append("<div id = 'terminologiesDiv'></div>");
		
	
		var questionHtml = '<div id="quesDiv">'
			
			
			for(var i = 0; i < terminologiesQuestionsJSON.data["SEC"].length; i++){
				
				for(var j = 0; j < terminologiesQuestionsJSON.data["SEC"][0].QUES.length; j++){
					
					questionHtml +='<div>'
						+'<br><br><span>Question No : '+(i+1)+'</span>'
						+'<br><br><div class="queTitle">'
						
						+terminologiesQuestionsJSON.data["SEC"][i].QUES[j].QC	
						+'</div>'
				
						for(var k = 0; k < terminologiesQuestionsJSON.data["SEC"][i].QUES[j].ANS.length; k++){
							
							questionHtml +='<div>'
								+'<div class="ansTitle">'
								
								+ "<input class='radioType' name='radio-"+i+"' id='"+i+"' ANSID='"+terminologiesQuestionsJSON.data["SEC"][i].QUES[j].ANS[k].ANSID+"' type='radio'"
								+ "' value='"
								+terminologiesQuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content	
								+ "' >"
								+'<p style="margin:-32px 2px 2px 30px;">'
								+terminologiesQuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content	
								+'</p>'
								
								+'</div>'
								+'</div>'
						}
						+'</div>'
				}
			} 
		   
			questionHtml += '<div class="buttonDiv">'
							+'<button id="testSubmit">Submit Test</button>'
//							+'<button id="reset">Reset</button>'
							+'<button id="nextLevel" disabled>Next Level</button>'
							+'</div>'
							
							+'</div>'
			$("#terminologiesDiv").html(questionHtml);
			
			
			
			$("#testSubmit").click(
					function() {
						
						var arr = [];
						
						for(var i = 0; i < terminologiesQuestionsJSON.data["SEC"].length; i++){
							
//							for(var j = 0; j < terminologiesQuestionsJSON.data["SEC"][0].QUES.length; j++){
								
//									for(var k = 0; k < terminologiesQuestionsJSON.data["SEC"][i].QUES[j].ANS.length; k++){
										
										var qid = $('input[name=radio-' + i+ ']').attr(
										'id');
										
										var ansId =  $('input[name=radio-' + i + ']:checked').attr(
										'ANSID');
										
										var myRadio = $(
												'input[name=radio-' + i + ']:checked')
												.val();
										
										if (myRadio == null) {
											flag = flag && false;
											alertify.alert('Please atttempt all the questions');
											break;
										}else{
											arr.push({
											"QID" : qid,
											"ANS" : myRadio,
											"ANSId" : ansId
										});	
										}
										
//									}
//							  }
						}
						
//						console.log(arr);
						var ansCount = 0;
						
						for (var i = 0; i < arr.length; i++) {
							if(arr[i].ANSId ==  "true"){
								ansCount++;
							}else{
							//	
							//	
							}
						}
						
						if(arr.length == 10){
							alertify.alert('Correct answers:' +ansCount);
							$("#nextLevel").prop("disabled", false);
						}
						//console.log(ansCount);
						
					});	
			
			$("#nextLevel").click(
					function() {
						
						Level_3_ValveSizing();
						
//						Level6_InvestigateControlValve();
//						vlave();
						
					});	
			
	});
	
	
	
	
});   //END LINE