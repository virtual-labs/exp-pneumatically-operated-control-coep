(function(AH, UP, FB) {

AH.getAllRoles = function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data == null) {
				alert("failed");
			} else {
				UP.render(data, UP.user);
			}
		},
			error : function() {
			alert("error");
		}
	});
};

AH.getLabOfThisDept = function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data == null) {
				console.log("Select Department or refresh page");
			} else {
				UP.renderLabOfSelectedDept(data);
//				UP.render(data, UP.user);
			}
		},
			error : function() {
			alert("error");
		}
	});
};

AH.getExpOfThisDeptLab = function(urls, labId, deptId, tp) {
	$.ajax({
		type : tp,
		url : urls,
		data : "&deptId=" + deptId + "&labId=" + labId,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data.avail == false) {
			} else {
				UP.renderExpOfSelectedDeptLab(data);
			}
		},
		error : function() {
			alert("error");
		}
	});
}; 

AH.getExpOfThisDeptLabWithPO = function(urls, labId, deptId, tp) {
	$.ajax({
		type : tp,
		url : urls,
		data : "&deptId=" + deptId + "&labId=" + labId,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data.done == false) {
				showToast.show(data.msg, data.done);
			} else {
				UP.addPOTodropDown(data);
			}
		},
		error : function() {
			alert("error");
		}
	});
}; 

AH.getAllUsers = function(urls, tp, vid) {
	$.ajax({
			type : tp,
			url : urls,
			dataType : 'json',
			contentType : 'application/json',

			success : function(data) {
				if (data == null) {
					alert("failed");
				} else {
						UP.showUsers(data,vid);
				}
			},
			error : function() {
				alert("error");
			}
		});
};

AH.getTotalUsers = function(urls, tp) {
	$.ajax({
			type : tp,
			url : urls,
			dataType : 'json',
			contentType : 'application/json',

			success : function(data) {
				if (data == null) {
					alert("failed");
				} else {
						UP.resetPassword(data);
				}
			},
			error : function() {
				alert("error");
			}
		});
};

AH.getResetUserPass = function(url, tp, userId) {
	$.ajax({
		type : tp,
		url : url,
		data : JSON.stringify(userId),
		dataType : 'json',
		contentType : 'application/json',

		success : function(data) {
			if (data == null) {
				console.log("failed");
			} else {
					UP.resetPassSuccess(data);
			}
		},
		error : function() {
			alert("error");
		}
	});
};


AH.setUpdateRoles = function(urls, tp, dt) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		data : JSON.stringify(dt),
		contentType : 'application/json',
		success : function(data) {
			if (data == null) {
				UP.showCustomAlert("Error",
						"Sorry ... Unable to fetch data...");
			} else {
				if (data.done == true) {
					UP.showCustomAlert('Information', data.msg);
					UP.clearConfirmDialogContent();
					UP.clearDialogContent();
				}
			}
		},
		error : function() {
		}
	});
};

AH.getUsersInfo = function(urls, tp) {
		$.ajax({
			type : tp,
			url : urls,
			dataType : 'json',
			contentType : 'application/json',
			success : function(data) {
				if (data.done == false) {
					alert("No record found");
				} else {
						UP.showUsersInfo(data);
				}
			},
			error : function() {
				alert("error");
			}
		});
};

AH.getUsersCollegeInfo = function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data == null) {
				alert("failed");
			} else {
				UP.getSimInfo(data);
			}
		},
		error : function() {
			alert("error");
		}
	});
};


AH.getUsersByCollege = function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data == null) {
				alert("failed");
			} else {
				UP.showUsersClgInfo(data);
			}
		},
		error : function() {
			alert("error");
		}
	});
};

AH.getAllDepts = function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data == null) {
				alert("failed");
			} else {
				UP.showDepts(data);
			}
		},
		error : function(data) {
			 alert("error");
		}
	});
};

AH.getQuestions = function(urls, tp) {
		$.ajax({
			type : tp,
			url : urls,
			dataType : 'json',
			contentType : 'application/json',
			success : function(data) {
				if (data == null) {
					alert("failed");
				} else {
					FB.showFeedbackQuestion(data);
				}
			},
			error : function(data) {
				 alert("error");
			}
		});
};

AH.saveFeedBackAnswer = function(urls, tp, json) {
		$.ajax({
			type : tp,
			url : urls,
			dataType : 'json',
			async : false,
			data : JSON.stringify(json),
			contentType : 'application/json',
			success : function(data) {
				if (data == null) {
					alert("failed");
				} else {
					FB.feedback(json.DEPT,json.LAB,json.EXP);
					alert(data.msg);
				}
			},
			error : function(data) {
				alert("error");
			}
		});
};

AH.saveUserAccessData = function(urls, tp) {
		$.ajax({
			type : tp,
			url : urls,
			dataType : 'json',
			async : false,
			contentType : 'application/json',
			success : function(data) {
				if (data == null) {
					alert("failed");
				} else {
					// alert(data.msg);
				}
			},
			error : function(data) {
				alert("error");
			}
		});
};

AH.saveUserEndTimeAccessData = function(urls, tp) {
		$.ajax({
			type : tp,
			url : urls,
			dataType : 'json',
			async : false,
			contentType : 'application/json',
			success : function(data) {
				if (data == null) {
					alert("failed");
				} else if (data.msg == "Invalid") {
					UP.closeWindow();
				} 
			},
			error : function(data) {
				alert("error");
			}
		});
};

AH.getsim = function(urls, tp,name,cName,id) {
		$.ajax({
			type : tp,
			url : urls,
			dataType : 'json',
			contentType : 'application/json',
			success : function(data) {
				if (data == null) {
					alert("failed");
				} else {
					UP.showSimDetails(data,name,cName,id);
				}
			},
			error : function() {
				 alert("error");
			}
		});
}; 

AH.getYearlyColgData = function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
				UP.displayColgYearlyUsageRecord(data);
		},
		error : function() {
//			alert("error");
		}
	});
};

AH.getYearlyColgDataWithLimit = function(urls, method) {
	$.ajax({
		type : method,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
				UP.displayColgYearlyUsageRecord(data);
		},
		error : function() {
//			alert("error");
		}
	});
};

AH.getColgTotalUsageReport = function(urls, method) {
	$.ajax({
		type : method,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
				UP.displayColgYearlyUsageRecord(data);
		},
		error : function() {
//			alert("error");
		}
	});
};

AH.getUserRoleFromAccount = function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data == null) {
				console.log("Fail to load. Please try again later.");
			} else {
				UP.searchInfo(data);
			}
		},
		error : function() {
//			alert("error");
		}
	});
};


// search Users by college name
AH.getUsersByClgName = function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data == null) {
				alert("failed");
			} else {
				if (data.done == true) {
					UP.showUsersSimDetailsByClgName(data);
				} else {
					alert(data.msg);
				}
			}
		},
		error : function() {
			 alert("error");
		}
	});
}; 

AH.getsimulator =  function(urls, tp) {
		$.ajax({
			type : tp,
			url : urls,
			dataType : 'json',
			contentType : 'application/json',
			success : function(data) {
				if (data == null) {
					alert("failed");
				} else {
					UP.showInfoBySim(data);
				}
			},
			error : function() {
				alert("error");
			}
		});
}; 

// new search 
AH.getsimulatorInfo  =  function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data.avail == false) {
				alert("failed");
			} else {
				UP.showInfoBySim(data.data);
			}
		},
		error : function() {
			alert("error");
		}
	});
}; 


AH.getFBReportData =  function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data == null) {
				alert("failed");
			} else {
				FB.feedbackReport(data);
			}
		},
		error : function() {
			alert("error");
		}
	});
}; 




AH.createClgInfo = function(urls, json, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		async : false,
		contentType : 'application/json',
		data : JSON.stringify(json),
		beforeSend : function() {
			// scope.startAjaxloader();
		},
		success : function(data) {
			if (data.done == true) {
				alert(data.msg);
				UP.collegeInfo(data);
			} else {
				alert(data.msg);

			}
		},
		error : function() {
			alert("error");
		}
	});
}; 



// to get user info on click

AH.getAllUserInfoView = function(urls, tp, vid, flag) {
	$.ajax({
	    type : tp,
	    url : urls,
	    dataType : 'json',
	    data : "&vlabId=" + vid,
	    contentType : 'application/json',
	    success : function(data) {

		if (data == null) {

		    UP.showCustomAlert("Error",
			    "Sorry ... Unable to fetch data...");
		} else {
		    
			UP.onViewUserInfo(data,flag);
		}
	    },
	});
    };

    
// to get final report
    
AH.getFinalReport  =  function(urls,tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data.avail == false) {
				alert("failed");
			} else {
				UP.showFinalReport(data);
			}
		},
		error : function() {
			alert("error");
		}
	});
}; 

// for get Labs FinalReport
AH.getLabsFinalReport  =  function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data.avail == false) {
				alert("failed");
			} else {
				UP.labs(data);
			}
		},
		error : function() {
			alert("error");
		}
	});
}; 



//for get exps FinalReport
AH.getExpsFinalReport  =  function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data.avail == false) {
				alert("failed");
			} else {
				UP.exps(data);
			}
		},
		error : function() {
			alert("error");
		}
	});
}; 


AH.getAllClgInfo  = function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',

		success : function(data) {
			if (data == null) {
				alert("failed");
			} else {
				
				UP.showClgList(data);
				com.coep.vlab.userProfile.clgData = data;
			}
		},
		error : function() {
			alert("error");
		}
	});
};

// to update college info
AH.updateClgInfo = function(urls, json, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		async : false,
		contentType : 'application/json',
		data : JSON.stringify(json),
		beforeSend : function() {
			// scope.startAjaxloader();
		},
		success : function(data) {
			if (data.done == true) {
				alert(data.msg);
				UP.clearDialogContent();
				UP.showCollegeInfo();
			} else {
				alert(data.msg);
			}
		},
		error : function() {
			alert("error");
		}
	});
}; 


AH.fetchUserInfo = function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',

		success : function(data) {
			if (data == null) {
				alert("failed");
			} else {
				UP.onViewUserDetails(data.userInfo);
			}
		},
		error : function() {
			alert("error");
		}
	});
	
	
	
	AH.updateUserInfo = function(url, tp, dt) {
		$.ajax({
		    type : tp,
		    url : url,
		    dataType : 'json',
		    async : false,
		    data : dt,
		    contentType : 'application/json',
		    beforeSend : function() {
			// scope.startAjaxloader();
		    },
		    success : function(data) {
			if (data == null) {
			    $('#errBlk').css('display', 'block');
			} else {
			    if (data.saved == true) {
				UP.fetchUserInfo(
					'../ajax/userProfile/fetchUserInfo', 'GET');
			    } else {
				$('#errBlk').css('display', 'block');
				$('#errBlk').html('Error :' + data.msg);
			    }
			}

		    }

		});
	    };
};


AH.getUsersList = function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data.done == false) {
				alert("No record found");
			} else {
					UP.rederAllUsers(data);
			}
		},
		error : function() {
			alert("error");
		}
	});
};

AH.disableOrEnableUser = function(urls, tp, json) {
	$.ajax({
		type : tp,
		url : urls,
		data: json,
		dataType : 'json',
		contentType : 'application/json',

		success : function(data) {
			if (data == null) {
				alert("failed");
			} else {
				 UP.clearConfirmDialogContent();
				 alert(data.msg);
				 UP.disableDeleteUser();
			}
		},
		error : function() {
			alert("error");
		}
	});
};

AH.deleteUser = function(urls, tp, vlabId) {
	$.ajax({
		type : tp,
		url : urls,
		data: "vlabId="+vlabId,
		dataType : 'json',
		contentType : 'application/json',

		success : function(data) {
			if (data == null) {
				alert("failed");
			} else {
				 UP.clearConfirmDialogContent();
				 alert(data.msg);
				 window.location.reload(true);
				// UP.disableDeleteUser();
			}
		},
		error : function() {
			alert("error");
		}
	});
};

//new
AH.getExperiment = function(urls) {
	$.ajax({
		type : "GET",
		url : urls,
		success : function(data) {
			UP.loadExperiment(data);
		},
		error : function() {
			alert("error");
		}
	});
};

AH.uploadQuesToDatabase = function(urls, qData, tp){
	$.ajax({
		type : tp,
		url : urls,
		data: qData,
		dataType : 'json',
		contentType : 'application/json',

		success : function(data) {
			if (data == null) {
				console.log("failed");
			} else {				
				 UP.clearQuesField(data);
			}
		},
		error : function() {
			alert("error");
		}
	});
}


AH.getFetchQuesFromThisExp = function(urls, dept, lab, exp,testType, tp){
	$.ajax({
		type : tp,
		url : urls,
		data: "dept="+dept+"&lab="+lab+"&exp="+exp+"&testType="+testType,
		dataType : 'json',
		contentType : 'application/json',

		success : function(data) {
			if (data.done != true) {
				alert(data.msg);
			} else {	
				UP.renderQues(data, testType);
			}
		},
		error : function() {
			alert("error");
		}
	});
}

AH.submitAnsToDatabase = function(url, givenAnswers, tp){
	$.ajax({
		type : tp,
		url : url,
		data: givenAnswers,
		dataType : 'json',
		contentType : 'application/json',

		success : function(data) {
			if (data == null) {
				console.log("failed");
			} else {
				alertify.alert(data.msg);
				AH.moveInstanceToCompletion('submit/moveToInstanceCompletion/', 'POST');
				
			}
		},
		error : function() {
			alert("error");
		}
	});
}

AH.moveInstanceToCompletion = function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data == null) {
				alert(data.msg);
			} else {
				AH.generateResult('result/generate/', 'POST');
			}
		},
			error : function() {
			alert("error");
		}
	});
};

AH.generateResult = function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data == null) {
				alert(data.msg);
			} else {
				UP.renderResultForCurrentTest(data);
			}
		},
			error : function() {
			alert("error");
		}
	});
};


AH.addPOToLab = function(urls, poData, tp){
	
	$.ajax({
		type : tp,
		url : urls,
		data: JSON.stringify(poData),
		dataType : 'json',
		contentType : 'application/json',

		success : function(data) {
			if (data == null) {
				console.log("failed");
			} else {		
				showToast.show(data.msg ,data.done);
				if(data.done == true)
					{
					 $('#deptList').val(-1);
					 $("#poName").val('');
					 $(".errorMsg").css("display" , "none");
					}
			}
		},
		error : function() {
			alert("error");
		}
	});
}

AH.addCOToLab = function(urls, poData, tp){
	
	$.ajax({
		type : tp,
		url : urls,
		data: JSON.stringify(poData),
		dataType : 'json',
		contentType : 'application/json',

		success : function(data) {
			if (data == null) {
				console.log("failed");
			} else {	
				
			//	$("#pocoMsg").html(data.msg).addClass("alert alert-success");
				showToast.show(data.msg ,data.done);
				if(data.done == true)
				{
			 $('#deptList').val(-1);
			 $("#labList").val(-1);
			$("#expList").val(-1);
			$("#labPO").val(-1);
			$("#coName").val('');
			 $(".errorMsg").css("display" , "none");
				}
				//alertify.alert('Message', data.msg , function(){ alertify.success(data.msg); });
			//	Run
			//	 Overloads
			}
		},
		error : function() {
			alert("error");
		}
	});
}

AH.updateTestConfig = function(urls, tp){
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data == null) {
				console.log("failed");
			} else {
				showToast.show(data.msg, data.done);
				$("#quesCount").val('');
			}
		},
			error : function() {
			alert("error");
		}
	});
}

AH.getCOListFromSelectedExp = function(urls, tp){

	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data == null) {
				alert("failed");
			} else {
				UP.addCoToexpCOList(data);
			}
		},
			error : function() {
			alert("error");
		}
	});
}

AH.getTestResForDeptLabExp = function(url, filterJson, method){
	$.ajax({
		type : method,
		url : url,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data.done != true) {
				$("#resultData").html(data.msg);
			} else {
				UP.renderResultTOStudent(data, filterJson);
			}
		},
			error : function() {
			alert("error");
		}
	});
}

AH.getAllDeptsForTest = function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data == null) {
				alert("failed");
			} else {
				UP.testModuleRender(data);
			}
		},
		error : function(data) {
			 alert("error");
		}
	});
};

AH.getAllDeptsForTestResult = function(urls, tp) {
	$.ajax({
		type : tp,
		url : urls,
		dataType : 'json',
		contentType : 'application/json',
		success : function(data) {
			if (data == null) {
				alert("failed");
			} else {
				UP.testResultsRender(data);
			}
		},
		error : function(data) {
			 alert("error");
		}
	});
};











	
})(com.coep.vlab.ajaxHandler, com.coep.vlab.userProfile, com.coep.vlab.feedback);