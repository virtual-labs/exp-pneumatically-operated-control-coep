/*!
 * @Author : Prashant Lokhande
 * @Designner : Sushant Pimple
 */
(function(AH, UP, FB, TM) {

    UP.ajaxCallTime = 180000; // 3 minutes 180000

    UP.user = 0;
    UP.clgData = 0;

    UP.States = {
	"1" : "Andaman and Nicobar",
	"2" : "Andhra Pradesh",
	"3" : "Arunachal Pradesh",
	"4" : "Assam",
	"5" : "Bihar",
	"6" : "Chandigarh",
	"7" : "Chhattisgarh",
	"8" : "Dadra and Nagar Haveli",
	"9" : "Daman and Diu",
	"10" : "Delhi",
	"11" : "Goa",
	"12" : "Gujarat",
	"13" : "Haryana",
	"14" : "Himachal Pradesh",
	"15" : "Jammu and Kashmir",
	"16" : "Jharkhand",
	"17" : "Karnataka",
	"18" : "Kerala",
	"19" : "Lakshadweep",
	"20" : "Madhya Pradesh",
	"21" : "Maharashtra",
	"22" : "Manipur",
	"23" : "Meghalaya",
	"24" : "Mizoram",
	"25" : "Nagaland",
	"26" : "Orissa",
	"27" : "Pondicherry",
	"28" : "Punjab",
	"29" : "Rajasthan",
	"30" : "Sikkim",
	"31" : "Tamil Nadu",
	"32" : "Telangana",
	"33" : "Tripura",
	"34" : "Uttaranchal",
	"35" : "Uttar Pradesh",
	"36" : "West Bengal"
    };

    UP.showCustomAlert = function(title, message) {
	alert(message);
    };

    UP.getYesNoButtonOnDialog = function() {
	var text = '<button class="btn btn-success" type="button" id="cfYes">Yes</button><button class="btn btn-danger"  type="button" id="cfNo">No</button>';
	return text;
    };

    UP.getCloseButtonOnDialog = function() {
	var text = '<button onClick="com.coep.vlab.userProfile.clearDialogContent();"  type="button" class="btn btn-danger">Close</button>';
	return text;
    };

    UP.clearDialogContent = function() {
	$('#myModalLabel').html('');
	$('#dlgBody').html('');
	$('#dlgFoot').html('');
	$('#testdialog').modal('hide');
    };

    UP.clearConfirmDialogContent = function() {
	$('#cModalLabel').html('');
	$('#cdlgBody').html('');
	$('#cdlgFoot').html('');
	$('#cdialog').modal('hide');
    };

	UP.updateRole = function(vid) {
		
//		var lax = vid;
//		var lax1 = (lax).split("-");
//		if (lax1.length == 2)
//			UP.user = lax1[1];
//		else if (lax1.length == 3)
//			UP.user = lax1[1] + "-" + lax1[2];
//		else
			UP.user = vid;


		AH.getAllRoles('getall/roles?nik=' + UP.user, 'GET');
		UP.user = '';
		
		
//		try {
//			AH.getAllUsers('getall/users', 'GET',vid);
//		} catch (e) {
//			var msg = "There was an error in execution of Code";
//			msg += "Error Description : " + e.message;
//			UP.showCustomAlert('Error', msg);
//		}
	};

	// search by user Id
	UP.getInfo = function() {
		try {
			AH.getUsersInfo('get/usersInfo', 'GET');
		} catch (e) {
			var msg = "There was an error in execution of Code";
			msg += "Error Description : " + e.message;
			UP.showCustomAlert('Error', msg);
		}
	};

    // search by college name
    // General
    UP.getCollegeInfo = function() {
	try {
	    AH.getUsersCollegeInfo('get/usersCollegeInfo', 'GET');
	} catch (e) {
	    var msg = "There was an error in execution of Code";
	    msg += "Error Description : " + e.message;
	    UP.showCustomAlert('Error', msg);
	}
    };

    // search user by college name
    UP.getCollegeList = function() {
	try {
	    AH.getUsersByCollege('get/usersCollegeInfo', 'GET');
	} catch (e) {
	    var msg = "There was an error in execution of Code";
	    msg += "Error Description : " + e.message;
	    UP.showCustomAlert('Error', msg);
	}
    };

	UP.showUsers = function(userData,vid) {
		
//		var boiler = "<tr><td><div class='radio-inline'><label style='font-weight:normal'><input type='radio' name='rls' id='rls-{%=VID%}'/>{%=FNM%} {%=LNM%}</label></div></td><td>{%=EML%}</td></tr>";
//		var userTable = '';
//		userTable = '<div id="user-div" style="overflow: auto; height: 400px" ><table class="table table-hover table-condensed"><tr><th>User Name</th><th>Email Id</th></tr>';
//		for ( var i = 0; i < userData.all.length; i++) {
//			userTable += TM.interpolate(boiler, userData.all[i]);
//		}
//		userTable += '</table></div>';
//		$('#myModalLabel').html('All users');
//		$('#dlgBody').html(userTable);
//
//		$('#dlgFoot')
//				.html(
//						'<button id="ass-rol" class="btn btn-success">Proceed</button><button id="btnCLs" class="btn btn-danger">Close</button>');
//		$('#testdialog').modal({
//			show : true
//		});
//
//		$('#btnCLs').bind('click', function() {
//			UP.clearDialogContent();
//		});
//
//		$('#ass-rol').bind('click', function() {
		
//			$("#dlgBody input:radio:checked").each(function() {
//				var lax = this.id;
				var lax = vid;
				var lax1 = (lax).split("-");
				if (lax1.length == 2)
					UP.user = lax1[1];
				else if (lax1.length == 3)
					UP.user = lax1[1] + "-" + lax1[2];
				else
					UP.user = vid;

//			});

//			userData.VID = UP.user;
//			if (UP.user == '') {
//				alert("Please Select User ");
//			} else {
				AH.getAllRoles('getall/roles?nik=' + UP.user, 'GET');
				UP.user = '';
//			}
//		});
	};
	
	UP.searchInfoFirst = function() {
		AH.getUserRoleFromAccount('getUser/role', 'GET');
	}

	UP.searchInfo = function(data) {
		$('#main-div').html('');
		$('#panel-sim').hide();
		$("#panel-sim2").hide();
		$('#simDetails').hide();
		$('#simDetails2').hide();

		var create = '<div class="form-horizontal tarm" role="form">';
		create += '<div class="form-group" ><label class="col-lg-2">Search By </label><div class="col-lg-4">'
			+'<select id="serInfo" name ="serInfo" class="large-selectBox" class="form-control" >'
			+'<option value="-1">---Select---</option>'
			+'<option value="1">User Id </option>'
			+'<option value="2">General</option>'
			+'<option value="3">College Name</option>'
			
			if(data.done == true){
				create +='<option value="4">Yearly Usage</option>'
					   +'<option value="5">Total Usage</option>'
			}
		create +='</select></div></div></div>';

		create += '<div id="container-div" class="form-horizontal tarm" role="form"></div><div id="subContainer-div" class="form-horizontal tarm" role="form"></div><div id="sub-div" class="form-horizontal tarm" role="form"></div>';

		$('#main-div').html(create);
//		$('#main-div select').css("width","500");
		$('#main-div select').chosen();

		$("#serInfo").change(function() {
			var id = $("#serInfo option:selected").val();
			if (id == 1) {
				UP.getInfo();
			} else if (id == 2) {
				UP.getCollegeInfo();
			} else if (id == 3) {
				UP.getCollegeList();
			}else if(id == 4) {
				UP.getYearlyColgUsageReport();
			}else if(id ==5) {
				UP.getTotalColgUsageReport();				
			}
			
//			$('.chosen-container').css("width","500");
		});
	};
	
	
	UP.getYearlyColgUsageReport = function() {
		$("#container-div").html('');
		$('#sub-div').html('');
		$("#subContainer-div").html('');
		$('#simDetails').hide();
		$("#panel-sim2").hide();
		$("#simDetails2").hide();
		
		colgYearReportHtm = '';
		
		colgYearReportHtm = '<div class="tab-pane active in" id="yearRp">'
		+'<div class="panel panel-black" id="panel-sim3" style="margin-top: 10px;">'
		+'<div id="yrp"  style="padding-left:20px;"><br/> <span style="padding:5px; font-size: 15px; font-weight: bold;">Select Year:</span><select id="yrDropDown" class="form-control">'
		+'<option value="-1">-----Select Year-----</option>'
		+'<option value="2013">2013-14</option>'
		+'<option value="2014">2014-15</option>'
		+'<option value="2015">2015-16</option>'
		+'<option value="2016">2016-17</option>'
		+'<option value="2017">2017-18</option>'
		+'<option value="2018">2018-19</option>'
		+'<option value="2019">2019-20</option>'
		+'</select></div>'
		+'<div class="panel-body"><div class="row"><div class="tab-content" id="yrColgReport"></div>'		
		+'</div></div></div></div>'
		$('#container-div').html(colgYearReportHtm);
		
		$("#yrDropDown").bind('change', function(){
			var yr = $("#yrDropDown").val();
			AH.getYearlyColgData('getall/simDetails/college/' + yr , 'GET');
		});
	}
	
	UP.getTotalColgUsageReport = function() {
		$("#container-div").html('');
		$('#sub-div').html('');
		$("#subContainer-div").html('');
		$('#simDetails').hide();
		$("#panel-sim2").hide();
		$("#simDetails2").hide();
		
		colgYearReportHtm = '';
		
		colgYearReportHtm = '<div class="tab-pane active in" id="yearRp">'
		+'<div class="panel panel-black" id="panel-sim3" style="margin-top: 10px;">'
		+'<div class="panel-body"><div class="row"><div class="tab-content" id="yrColgReport"></div>'		
		+'</div></div></div></div>'
		$('#container-div').html(colgYearReportHtm);
		
		AH.getColgTotalUsageReport('getall/simDetails/Total/' , 'GET');
	}

	// one touch report div
	UP.report = function() {
		$('#main-div').html('');
		$('#main-div').show();

		$('#panel-sim').hide();
		$("#panel-sim2").hide();
		$('#simDetails').hide();
		$('#simDetails2').hide();

		var create = '<div class="form-horizontal tarm" role="form">';
		create += '<div class="form-group" ></div>';
		$('#main-div').html(create);

		var arr = [];

		for (key in FB.departments) {
			arr.push(key);
		}
		AH.getFinalReport('get/finalReport', 'GET');

	};

	UP.showUsersInfo = function(userData) {
		$('#container-div').html('');
		$('#sub-div').html('');
		$("#subContainer-div").html('');
		$("#panel-sim").hide();
		$("#panel-sim2").hide();
		$("#simDetails2").hide();
		$("#simDetails").hide();

		var create = '<div class="form-group"><label class="col-lg-2">User Id</label><div class="col-lg-4"><select id="userInfo" name ="userInfo" class="large-selectBox"  class="form-control"><option value="-1">---Select---</option>';
		for ( var i = 0; i < userData.all.length; i++) {
			create += "<option id=" + i + " value=" + userData.all[i].VID + ">"
					+ (i + 1) + " - " + userData.all[i].FNM + " "
					+ userData.all[i].MNM + " " + userData.all[i].LNM
					+ "</option>";
		}
		create += '</select></div></div><div class="form-group"><div class="col-lg-4"><span id="errBlk" class="nru-error common-errors alert alert-danger" Style="display : none; margin-top : 75px;" ></span></div><div class="col-lg-4"><button type="button" class="btn btn-success btn3d" id="userIdBtn" style= " margin-top: 20px; width: 188px; margin-left: -224px;">Search</button></div></div>';
		
		$('#container-div').html(create);
		$('#main-div select').chosen();
		
		$("#userIdBtn").click(
				function(event) {
					$("#temp").show();
					var id = $("#userInfo").children(":selected").attr("id");
					if (id == null) {
						$(".nru-error").css('display', 'block');
						$(".nru-error").html("Please select the user");
					} else {
						
						var UserId = $("#userInfo").val();
						var name = userData.all[id].FNM + " "
								+ userData.all[id].LNM;
						var cName = userData.all[id].CNM;
						$('#username').html(name);
//						console.log("name :" + name + " cname :" + cName
//								+ " userid :" + UserId);
						AH.getsim('getall/simDetails?usr=' + UserId, 'GET',
								name, cName, UserId);
					}
				});
	};

	// get college Info
	// show college list for search by college name
	UP.showUsersClgInfo = function(userData) {
		$('#container-div').html('');
		$('#sub-div').html('');
		$("#subContainer-div").html('');
		$("#panel-sim").hide();
		$("#panel-sim2").hide();
		$("#simDetails2").hide();
		var create = '<div class="form-horizontal tarm" role="form">';
		create += '<div class="form-group" ><label class="col-lg-2">College Name</label><div class="col-lg-4"><select id="userClgInfo" name ="userInfo" class="large-selectBox"   class="form-control" ><option value="-1">---Select---</option>';
		for ( var i = 0; i < userData.dt.length; i++) {
			create += "<option value=" + userData.dt[i].CID + ">"
					+ userData.dt[i].CNM + "</option>";
		}
		create += '</select></div></div>';
		$('#container-div').html(create);
		$('#main-div select').chosen();
		$("#userClgInfo").change(
				function() {
					$("#sub-div").html('');
					var clgName = $('#userClgInfo :selected').text();
					var clgId = $('#userClgInfo').val();
					$('#username').html(clgName);
					AH.getUsersByClgName('../ajax/getUsersByClgName?cid='
							+ clgId, 'GET');
				});
	};

	// search by colleg name and college students
	UP.showUsersSimDetailsByClgName = function(userData) {
		$("#panel-sim").hide();
		$("#panel-sim2").hide();
		$("#simDetails2").hide();
		var create = '<div class="form-horizontal tarm" role="form">';
		create += '<div class="form-group" ><label class="col-lg-2">User Id</label><div class="col-lg-4"><select id="userClgUsersId" name ="userInfo" class="large-selectBox"  style=" left: 138px;"  ><option value="-1">---Select---</option>';
		for ( var i = 0; i < userData.all.length; i++) {
			create += "<option  id=" + i + " value=" + userData.all[i].VID
					+ ">" + (i + 1) + " - " + userData.all[i].FNM + " "
					+ userData.all[i].MNM + " " + userData.all[i].LNM
					+ "</option>";
		}
		create += '</select><span id="errBlk" class="nru-error common-errors alert alert-danger" Style="display : none; margin-top: 75px;"" ></span></div><button id="clgBtn" class="btn btn-success btn3d" style=" margin-top: 42px; width: 188px; margin-left: -433px;" type="button">Search</button></div>';
		$('#subContainer-div').html(create);
//		$('#main-div select').css("width","200");
		$('#main-div select').chosen();

		$("#clgBtn")
				.click(
						function(event) {

							var clgId = $("#userClgInfo").children(":selected")
									.attr("value");
							var id = $("#userClgUsersId").children(":selected")
									.attr("id");
							var vid = $("#userClgUsersId")
									.children(":selected").attr("value");

							if (id == null) {
								if (clgId == -1) {
									$(".nru-error").css('display', 'block');
									$(".nru-error").html(
											"Please select the college first");
								} else {
									if (userData.all.length == 0) {
										$(".nru-error").css('display', 'block');
										$(".nru-error")
												.html(
														"There are no user registered for selected college");
									} else {
										$(".nru-error").css('display', 'block');
										$(".nru-error").html(
												"Please select the user");
									}
								}

							} else {
								var name = userData.all[id].FNM + " "
										+ userData.all[id].LNM;
								var cName = userData.all[id].CNM;

								$('#username').html(name);
								AH.getsim('getall/simDetails?usr=' + vid,
										'GET', name, cName, vid);
							}
						});

	};

	// UP.getSimInfo changed to get General Info
	UP.getSimInfo = function(userData) {

		$("#container-div").html('');
		$('#sub-div').html('');
		$("#subContainer-div").html('');
		$('#simDetails').hide();
		$("#panel-sim2").hide();
		$("#simDetails2").hide();
		$('#userRecords')
				.html(
						'<span id="errBlk" class="gr-error common-errors alert alert-danger" Style="display : none" ></span>');
		var defaultOption = "<option value='-1'>---Any---</option>";
		var create = '';
		if (userData.done == true) {
			create = '<div class="form-horizontal tarm" role="form">';
			create += '<div class="form-group"><label class="col-lg-2" for = "clgnm">College Name</label><div class="col-lg-4"><select id="userClgName" name ="userClgName" class="large-selectBox"    ><option value="-1">---Any---</option>';
			for ( var i = 0; i < userData.dt.length; i++) {
				create += "<option value=" + userData.dt[i].CID + ">"
						+ userData.dt[i].CNM + ", " + userData.dt[i].DST
						+ "</option>";
			}
			create += '</select></div></div>';
			create += '<div class="form-group" ><label class="col-lg-2" for = "deptnm">Virtual Area :</label><div class="col-lg-4"><select id="deptnm" name ="department" class="large-selectBox" ><option value="-1">---Any---</option>';

			for ( var key in FB.departments) {
				create += "<option value=" + key + ">" + FB.departments[key]
						+ "</option>";
			}

			create += '</select></div></div>'
					+ '<div class="form-group"><label class="col-lg-2">Lab Name :</label><div class="col-lg-3"><span id = "tstspann"><select name = "lab" id = "selLabs" class="large-selectBox" >'
					+ defaultOption + '</select></span></div></div>';

			create += '<div class="form-group"><label class="col-lg-2">Experiment Name :</label><div class="col-lg-3"><span id = "expspann"><select name = "expt" id="selExp" class="large-selectBox" >'
					+ defaultOption + '</select></span></div></div>';

			create += '<div class="form-group" ><label class="col-lg-2">State Name</label><div class="col-lg-4"><select id = "state" name = "state" class = "large-selectBox"  ><option value = "-1">---Any---</option>';
			for ( var key in UP.States) {
				create += "<option value=" + UP.States[key] + ">"
						+ UP.States[key] + "</option>";
			}
			
			
			
			create += '</select></div></div>'
				+'<div class="form-group"><label class="col-lg-2">From date :</label><div class="col-lg-3"><input type="text" id ="strtDate" placeholder="DD/MM/YYYY"></div></div>'
				+'<div class="form-group"><label class="col-lg-2">To date :</label><div class="col-lg-3"><input type="text" id ="endDate"  placeholder="DD/MM/YYYY"></div></div>'
//				+'<span class="blink" style="font-weight:800;"><span style="color:red;">*Note:</span> The \'From date\' and \'To date\' must be in MM/DD/YYYY format.</span>'
				+'<div class="form-group"><label class="col-lg-2 control-label"></label><div class="col-lg-4"><button type="button" class="btn btn-success btn3d" id="searchBtn" style= " margin-top: 20px; width: 188px; margin-left: -134px;">Search</button></div></div>';
			create += '<div class="form-group"><div class="col-lg-4"><span id="errBlk" class="cn-error common-errors alert alert-danger" Style="display : none;  width: 440px;"  ></span></div></div><div class="form-group"><div class="col-lg-4"><span id="errBlk" class="nr-error common-errors alert alert-danger" Style="display : none" ></span></div></div>'
			'<div class="panel panel-black" id="panel-sim2" style="display:none"><div class="panel-heading"><h3 class="panel-title" id="SimLabelHit" style="height:15px"><label id="simLabel" class="pull-left">Total Simulator Time : <span id= "simTime"></span></label><label id="simHitLabel" class="pull-right">Total Simulator Hit : <span id= "simHit"></span></label></h3></div><div class="panel-body"><div class="row"><div id="simDetails2" class="col-md-12"></div></div></div></div>';

			$('#container-div').append(create);
			$('#main-div select').chosen();
			$('#simLabel').hide();
			$('#simHitLabel').hide();
		} else {
			$('#sub-div').html('');
			$(".gr-error").css('display', 'block');
			$(".gr-error").html("NO record found");

		}
		
		
		
		$("#strtDate").datepicker({
		    yearRange : "-10: +10",
		    changeMonth : true,
		    changeYear : true,
		    dateFormat : "dd/mm/yy",
		    maxDate : 1
		});
		
		$("#endDate").datepicker({
		    yearRange : "-10: +10",
		    changeMonth : true,
		    changeYear : true,
		    dateFormat : "dd/mm/yy",
		    maxDate : 1
		});
		
		$("#searchBtn")
				.click(
						function(event) {
							// $('#sub-div').html('');
							$("#errBlk").css('display', 'none');
							$('#simLabel').show();
							$("#SimLabelHit").show();
							$('#simHitLabel').show();

							var clgID = $("#userClgName option:selected").val();
							var dept = $("#deptnm option:selected").val();
							var lab = $("#selLabs option:selected").val();
							var exp = $("#selExp option:selected").val();
							var statenm = $("#state option:selected").val();
							
							var strtDate = 0;
							var endDate = 0;
							if($("#strtDate").val() == ""){
								strtDate = -1;
							}else{
//								var strtDate1 = new Date($("#strtDate").val());
//								strtDate = strtDate1.getTime();
								strtDate = $("#strtDate").datepicker("getDate").getTime();
							}
						
							if($("#endDate").val() == ""){
								endDate = -1;
							}else{
//								var endDate1 = new Date ($("#endDate").val());
//								endDate = endDate1.getTime();
								endDate = $("#endDate").datepicker("getDate").getTime();
							}
							
							var upTime = "0";
							var upTimeFirst = "0";
							var status = null;
							var upTimeAllFirst = "0";
							var upTimeAllLast = "0";

							if (clgID == -1 && dept == -1 && statenm == -1) {
								$("#errBlk").css('display', 'block');
								$("#errBlk")
										.html(
												"Please Select Either College Name or Department or State Name");
							} else {

								var json = {
									"CNM" : clgID,
									"DPT" : dept,
									"LAB" : lab,
									"EXP" : exp,
									"STE" : statenm,
									"UPDATE_TIME" : upTime,
									"status" : status,
									"upTimeFirst" : upTimeFirst,
									"upTimeAllFirst" : upTimeAllFirst,
									"upTimeAllLast" : upTimeAllLast,
									"strtDate" : strtDate,
									"endDate" : endDate
								};

								AH.getsimulatorInfo('getall/simulatorInfo/'
										+ JSON.stringify(json), 'GET');
							}

						});

		$("#deptnm")
				.change(
						function() {
							var deptname = $("#deptnm option:selected").val();
							var selT = '<select id="selLabs" class="large-selectBox"  style=""><option value="-1">---Any---</option>';
							$('#tstspann').html('');
							if (FB.labs != null) {
								for ( var key in FB.labs[deptname - 1]) {
									selT += '<option value="' + key + '" >'
											+ FB.labs[deptname - 1][key]
											+ '</option>';
								}
								$('#tstspann').html(selT + '</select>');
								$('#testinfo')
										.html(
												'<div class="alert alert-success">Please Select labs </div>');
								$('#selLabs').chosen();
							}

							$("#selLabs")
									.change(
											function() {
												var labname = $("#selLabs")
														.val();
												var selT = '<select id="selExp" class="large-selectBox"  style=""><option value="-1">---Any---</option>';
												$('#expspann').html('');

												if (FB.labExp != null) {
													for ( var key in FB.labExp[deptname - 1][labname - 1]) {
														selT += '<option value="'
																+ key
																+ '">'
																+ FB.labExp[deptname - 1][labname - 1][key]
																+ '</option>';
													}
													$('#expspann').html(
															selT + '</select>');
													$('#testinfo')
															.html(
																	'<div class="alert alert-success">Please Select experiment </div>');
												}
												$('#selExp').chosen();

											});
						});

	};

	UP.render = function(data) {
		console.log(data);
		try {
			var boiler = "<tr><td><div class='checkbox'><label><input type='checkbox' name='rls' id='rls-{%=RID%}'/>{%=RN%}</label></div></td><td>{%=RD%}</td></tr>";
			var roleTable = '';
			roleTable = '<div id="role-div"><table class="table table-hover table-condensed"><tr><th width="42%"> Role Name </th><th>Role Description</th></tr>';

			for ( var i = 0; i < data.all.length; i++) {
				roleTable += TM.interpolate(boiler, data.all[i]);
			}

			roleTable += '</table></div>';
			$('#myModalLabel').html('Assign Roles');
			$('#dlgBody').html(roleTable);

			for ( var j = 0; j < data.had.length; j++) {
				if (document.getElementById('rls-' + data.had[j]) != null) {
					$('#rls-' + data.had[j]).prop('checked', true);
				}
			}
			$('#dlgFoot')
					.html(
							'<button id="ass-rol" class="btn btn-success">Assign</button><button id="btnCLs" class="btn btn-danger">Close</button>');
			$('#testdialog').modal({
				show : true
			});

			$('#btnCLs').bind('click', function() {
				UP.clearDialogContent();
			});

	    $('#ass-rol')
		    .bind(
			    'click',
			    function() {
				var ms = '';
				if ($("#dlgBody input:checkbox:checked").length <= 0) {
				    ms = 'You are Withdrawing all Authorities from user.<br/>Are you sure to continue?';
				} else {
				    ms = 'Do you want to proceed?';
				}

				var htmlText = '';
				htmlText += '';
				htmlText += '' + ms + '';

				htmlText += '';

				$('#cModalLabel').html('Confirmation');
				$('#cdlgBody').html(htmlText);
				$('#cdlgFoot')
					.html(UP.getYesNoButtonOnDialog());
				$('#cdialog').modal({
				    show : true
				});

				$('#cfYes')
					.bind(
						'click',
						function() {

						    var roles = [];

						    $(
							    "#dlgBody input:checkbox:checked")
							    .each(
								    function() {
									roles
										.push((this.id)
											.split("-")[1]);
								    });
						    var sData = {
							"VID" : data.VID,
							"new" : roles
						    };

						    AH
							    .setUpdateRoles(
								    'update/setUpdateRoles',
								    'POST',
								    sData);
						});

				$('#cfNo').bind('click', function() {
				    UP.clearConfirmDialogContent();
				});

			    });
	} catch (e) {
	    var msg = "There was an error in execution of Code";
	    msg += "Error Description : " + e.message;
	    UP.showCustomAlert('Error', msg);
	}
    };

    UP.deptList = function(data) {
	if (data != null) {
	    if (data.deptid == null) {
		try {
		    UP.showDepts(data);
		} catch (e) {
		    var msg = "There was an error in execution of Code";
		    msg += "Error Description : " + e.message;
		    UP.showCustomAlert('Error', msg);
		}
	    } else if (data.labid == null) {
		UP.showLabs(data, data.deptid);
	    } else if (data != null) {
		UP.showExps(data, data.deptid, data.labid);
	    }
	} else {
	    UP.showError();
	}
    };

    UP.showDepts = function(userData) {
	$('#dept').show();
	var userTable = '';
	userTable = '<div id="user-div" ><ol class="breadcrumb"><li><a href="../auth/home">Home</a></li></ol><div class="page-header" style="font-size:36px;text-align:center;">Virtual Labs at COE PUNE</div><div class="panel panel-black"><div class="panel-heading" style="font-size:20px;">Departments</div><div class="panel-body"><table class="table table-hover table-condensed" style="font-size:20px;">';

	var boiler = '';
	boiler = '<tr><td><i class="fa fa-home pull-left" style="font-size:48px;margin-right:10px;"> </i><div class="row"><a href="../auth/home?dept={%=key%}" style="font-weight:bold;"> {%=id%}</a><br><div style="font-size:13px;font-weight:bold;">{%=id%}</div></div></td></tr>';

	var i = 1;
	for ( var key in userData.all) {
	    var json = {
		"i" : i,
		"id" : userData.all[key],
		"key" : key
	    };
	    userTable += TM.interpolate(boiler, json);
	    i++;
	    $('#dept').append(userTable);
	}
	userTable += '</table><div></div></div>';
	$('#dept').html(userTable);
    };

    UP.showLabs = function(userData, deptid) {
	$('#dept').show();
	var userTable = '';
	var json;
	userTable = '<div id="user-div" ><ol class="breadcrumb"><li><a href="../auth/home">Home</a></li><li><a href="../auth/home?dept={%=deptid%}">{%=deptName%}</a></li></ol><div class="page-header" style="font-size:36px;text-align:center;">{%=deptName%}</div><div class="panel panel-black"><div class="panel-heading" style="font-size:20px;">Labs</div><div class="panel-body"><table class="table table-hover table-condensed" style="font-size:20px;">';
	var boiler = '';
	boiler = '<tr><td><i class="fa fa-flask pull-left" style="font-size:48px;margin-right:10px;"> </i><div class="row"><a href="../auth/home?dept={%=deptid%}&lab={%=key%}" style="font-weight:bold;">{%=id%}</a><br><div style="font-size:13px;font-weight:bold;">{%=id%}</div></div></td></tr>';
	var i = 1;
	for ( var key in userData.all) {
	    json = {
		"i" : i,
		"id" : userData.all[key],
		"key" : key,
		"deptid" : deptid,
		"deptName" : userData.deptName
	    };
	    userTable = TM.interpolate(userTable, json);
	    userTable += TM.interpolate(boiler, json);

			i++;
			$('#dept').append(userTable);
		}
		userTable += '</table></div>';
		$('#dept').html(userTable);
	};

	UP.showExps = function(userData, deptId, labId) {
		$('#dept').show();
		var userTable = '';
		userTable = '<div id="user-div" ><ol class="breadcrumb"><li><a href="../auth/home">Home</a></li><li>'
				+ '<a href="../auth/home?dept={%=deptid%}">{%=deptName%}</a></li><li></a><a href="../auth/home?dept={%=deptid%}&lab={%=labid%}">{%=labName%}</a></li></ol>'
				+ '<div class="page-header" style="font-size:36px;text-align:center;">{%=labName%}</div>'
				+ '<div class="panel panel-black"><div class="panel-heading" style="font-size:20px;">Experiments</div><div class="panel-body">'
				+ '<table class="table table-hover table-condensed" style="font-size:20px;">';

		boiler = '<tr><td><i class="fa fa-laptop pull-left" style="font-size:48px;margin-right:10px;"> </i>'
				+ '<div class="row"><a href="javascript:com.coep.vlab.ajaxHandler.getExperiment('
				+ '\'../auth/home?dept={%=deptid%}&lab={%=labid%}&exp={%=key%}\')" style="font-weight:bold;">{%=id%}</a><br><div style="font-size:13px;font-weight:bold;">{%=id%}</div></div></td></tr>';

		var i = 1;
		for ( var key in userData.all) {
			var json = {
				"i" : i,
				"id" : userData.all[key],
				"key" : key,
				"deptid" : deptId,
				"deptName" : userData.deptName,
				"labid" : labId,
				"labName" : userData.labName
			};
			userTable = TM.interpolate(userTable, json);
			userTable += TM.interpolate(boiler, json);
			i++;
			$('#dept').append(userTable);
		}
		userTable += '</table></div>';
		$('#dept').html(userTable);
	};

	UP.msToHMS = function(ms) {
		// 1- Convert to seconds:
		var seconds = ms / 1000;
		// 2- Extract hours:
		var hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
		seconds = seconds % 3600; // seconds remaining after extracting hours
		// 3- Extract minutes:
		var minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
		// 4- Keep only seconds not extracted to minutes:
		seconds = seconds % 60;
		return hours + " : " + minutes + " : " + seconds.toFixed(0);
	};

    UP.showSimDetails = function(simData, name, cName, id) {
	$(".nru-error").css('display', 'none');
	$('#simDetails').show();
	var userTable = '';

	var boiler = '';
	boiler = '<tr><td>{%=deptnm%}</td><td>{%=labnm%}</td><td>{%=exptnm%}</td><td>{%=msToHMS%}</td></tr>'; // <td>{%=sim%}</td><td

	if (simData.deptnm.length != 0) {
	    userTable += '<table class="table table-hover table-condensed" style="font-size:15px;">';
	    userTable += '<tr><td width="20%"><b>Department</b></td><td width="20%"><b>Lab</b></td><td width="25%"><b>Experiment</b></td><td width="10%"><b>Total Time (hour:min:sec)</b></td></tr>';
	    for (var i = 0; i < simData.deptnm.length; i++) {
		var time = UP.msToHMS(simData.totaltime[i]);

		var json = {
		    "deptnm" : FB.departments[simData.deptnm[i]],
		    "labnm" : FB.labs[(simData.deptnm[i]) - 1][simData.labnm[i]],
		    "exptnm" : FB.labExp[(simData.deptnm[i]) - 1][(simData.labnm[i]) - 1][simData.exptnm[i]],
		    // "sim" :
		    // FB.labExp[(simData.deptnm[i])-1][(simData.labnm[i])-1][simData.exptnm[i]],
		    // "totaltime" : simData.totaltime[i]
		    "msToHMS" : time
		};
		userTable += TM.interpolate(boiler, json);
	    }

			UP.userTab(simData, name, cName, id);
		} else {
			$("#sub-div").html('');
			$(".nru-error").css('display', 'block');
			$(".nru-error").html("No record found for the selected user");
		}
		userTable += '</table></div>';
		$('#simDetails').html(userTable);
	};

	UP.showInfoBySim = function(simData) {
		$(".nr-error").css('display', 'none');
		$('#simDetails').show();
		var userTable = '';
		var time = 0;
		var boiler = '';
		boiler = '<tr><td><a href="javascript:com.coep.vlab.userProfile.onClickViewInfo(\'{%=vlabIdInfo%}\',false);">{%=vlabId%}</a></td><td>{%=deptnm%}</td><td>{%=labnm%}</td><td>{%=exptnm%}</td><td>{%=msToHMS%}</td></tr>';
		var simTotalTime = 0;
		if (simData.deptnm.length != 0) {
			userTable += '<div id="user-div" ><table class="table table-hover table-condensed" style="font-size:15px;">';
			userTable += '<tr><td width="25%"><b>User Id</b></td><td width="25%"><b>Department</b></td><td width="25%"><b>Lab</b></td><td width="30%"><b>Experiment</b></td><td width="20%"><b>Total Time (hour:min:sec)</b></td></tr>';

	    for (var i = 0; i < simData.deptnm.length; i++) {
		// var time = simData.totaltime[i].split(".");
		time = UP.msToHMS(simData.totaltime[i]);
		// .substring(simData.vlabId[i].indexOf("_") + 1)
		var json = {
		    "vlabId" : simData.vlabId[i].substring(simData.vlabId[i]
			    .indexOf("_") + 1),
		    "vlabIdInfo" : simData.vlabId[i], // use to get user Info
		    "deptnm" : FB.departments[simData.deptnm[i]],
		    "labnm" : FB.labs[(simData.deptnm[i]) - 1][simData.labnm[i]],
		    "exptnm" : FB.labExp[(simData.deptnm[i]) - 1][(simData.labnm[i]) - 1][simData.exptnm[i]],
		    "sim" : FB.labExp[(simData.deptnm[i]) - 1][(simData.labnm[i]) - 1][simData.exptnm[i]],
		    "msToHMS" : time
		};

		simTotalTime += simData.totaltime[i];
		userTable += TM.interpolate(boiler, json);
	    }

	    simTotalTime = UP.msToHMS(simTotalTime);
	    UP.tabs(simData);

	    $("#simTime").html(simTotalTime);
	    $("#simHit").html(simData.sim.length);
	    $("#totalSimTime").html(UP.msToHMS(simData.TotalSimTime));
	    $("#totalSimHit").html(simData.TotalSimHit);

		} else {
			$('#sub-div').html('');
			$("#SimLabelHit").hide();
			$(".nr-error").css('display', 'block');
			$(".nr-error").html("No record found for the selected option");
		}

	userTable += '<tr><td></td> <td></td> <td></td> <td></td> <td><ui class="pager"><li class="previous"><button id="btnPrev">Prev</button></li><li class="next"><button id="btnNext">Next</button></li></td></tr>';

	userTable += '</table></div>';
	$('#simDetails2').html(userTable);

	// To check first record and disable previous button
	if (simData.upTimeFirst == simData.upTimeAllFirst) {
	    $("#btnPrev").attr("disabled", true);
	} else {
	    $("#btnPrev").attr("disabled", false);
	}

	// To check last record and disable next button
	if (simData.upTime == simData.upTimeAllLast) {
	    $("#btnNext").attr("disabled", true);
	} else {
	    $("#btnNext").attr("disabled", false);
	}

	$("#btnNext").click(
		function() {

		    var clgID = $("#userClgName option:selected").val();
		    var dept = $("#deptnm option:selected").val();
		    var lab = $("#selLabs option:selected").val();
		    var exp = $("#selExp option:selected").val();
		    var statenm = $("#state option:selected").val();
		    var strtDate = 0;
			var endDate = 0;
			if($("#strtDate").val() == ""){
				strtDate = -1;
			}else{
//				var strtDate1 = new Date($("#strtDate").val());
//				strtDate = strtDate1.getTime();
				strtDate = $("#strtDate").datepicker("getDate").getTime();
			}
		
			if($("#endDate").val() == ""){
				endDate = -1;
			}else{
//				var endDate1 = new Date ($("#endDate").val());
//				endDate = endDate1.getTime();
				endDate = $("#endDate").datepicker("getDate").getTime();
			}
		    
		    var upTime = simData.upTime;
		    var status = "next";
		    var upTimeFirst = simData.upTimeFirst;
		    var upTimeAllFirst = simData.upTimeAllFirst;
		    var upTimeAllLast = simData.upTimeAllLast;

		    var json = {
			"CNM" : clgID,
			"DPT" : dept,
			"LAB" : lab,
			"EXP" : exp,
			"STE" : statenm,
			"UPDATE_TIME" : upTime,
			"status" : status,
			"upTimeFirst" : upTimeFirst,
			"upTimeAllFirst" : upTimeAllFirst,
			"upTimeAllLast" : upTimeAllLast,
			"strtDate" : strtDate,
			"endDate" : endDate
		    };

		    AH.getsimulatorInfo('getall/simulatorInfo/'
			    + JSON.stringify(json), 'GET');
		});

	$("#btnPrev").click(
		function() {

		    var clgID = $("#userClgName option:selected").val();
		    var dept = $("#deptnm option:selected").val();
		    var lab = $("#selLabs option:selected").val();
		    var exp = $("#selExp option:selected").val();
		    var statenm = $("#state option:selected").val();
		    var strtDate = 0;
			var endDate = 0;
			if($("#strtDate").val() == ""){
				strtDate = -1;
			}else{
//				var strtDate1 = new Date($("#strtDate").val());
//				strtDate = strtDate1.getTime();
				strtDate = $("#strtDate").datepicker("getDate").getTime();
			}
		
			if($("#endDate").val() == ""){
				endDate = -1;
			}else{
//				var endDate1 = new Date ($("#endDate").val());
//				endDate = endDate1.getTime();
				endDate = $("#endDate").datepicker("getDate").getTime();
			}
		    
		    var upTime = simData.upTime;
		    var upTimeFirst = simData.upTimeFirst;
		    var status = "prev";
		    var upTimeAllFirst = simData.upTimeAllFirst;
		    var upTimeAllLast = simData.upTimeAllLast;

		    var json = {
			"CNM" : clgID,
			"DPT" : dept,
			"LAB" : lab,
			"EXP" : exp,
			"STE" : statenm,
			"UPDATE_TIME" : upTime,
			"status" : status,
			"upTimeFirst" : upTimeFirst,
			"upTimeAllFirst" : upTimeAllFirst,
			"upTimeAllLast" : upTimeAllLast,
			"strtDate" : strtDate,
			"endDate" : endDate
		    };

		    AH.getsimulatorInfo('getall/simulatorInfo/'
			    + JSON.stringify(json), 'GET');
		});

	};

	// to show final on click record
	UP.showFinalReport = function(simData) {

		$('#main-div').html('');
		$('#simDetails').show();

		var naviJson = {
			"report" : "Report"
		};
		var link = '<div id="user-div" ><ol class="breadcrumb"><li><span id="rpHome" style="cursor: pointer">{%=report%}</span></li></div><br><span id="errBlk" class="fr-error common-errors alert alert-danger" Style="display : none" ></span>';
		link = TM.interpolate(link, naviJson);
		$('#main-div').html(link);
		var time = 0;
		var simTotalTime = 0;
		var userTable = '';
		if (simData.deptnm != 0) {

			userTable += '<br><br><table class="table table-hover table-condensed"><tr><th>Departments</th><th style ="text-align: center;">Total Time (hour:min:sec)</th></tr>';

	    for (var j = 0; j < simData.deptnm; j++) {
		time = UP.msToHMS(simData.totaltime[j]);
		json = {
		    "msToHMS" : time
		};

		simTotalTime += simData.totaltime[j];
	    }
	    simTotalTime = UP.msToHMS(simTotalTime);
	    UP.tabs1(simData);

	    $("#simTime").html(simTotalTime);
	    $("#simHit").html(simData.exptnm);

	    for ( var key in FB.departments) {
		userTable += "<tr><td ><a name='" + key
			+ "' class='anchor' style='cursor: pointer'>"
			+ FB.departments[key] + "</a></td><td align='center'>"
			+ simData.data[key - 1] + "</td></tr>";
	    }
	    userTable += '</table>';

		} else {
			$("#SimLabelHit").hide();
			$(".fr-error").css('display', 'block');
			$(".fr-error").html("No record found for the selected option");
		}

		$('#simDetails2').html(userTable);
		$('.anchor').click(function() {

			var deptId = $(this).attr("name");
			if (deptId == 0) {

				//alert("Data not available");
			} else {
				AH.getLabsFinalReport('get/finalReport/' + deptId, 'GET');
			}
		});

	};

	// /// to show exps final record

	UP.labs = function(simData) {
		$("#main-div").html('');
		$('#simDetails').show();
		var deptId = simData.deptId;
		var naviJson = {
			"report" : "Report",
			"deptName" : FB.departments[deptId]
		};

		var link = '<div id="user-div" ><ol class="breadcrumb"><li><span id="rpHome" style="cursor: pointer" >{%=report%}</span></li><li><span id="deptName" style="cursor: pointer">{%=deptName%}</span></li></div>';
		link = TM.interpolate(link, naviJson);
		$('#main-div').html(link);

	$("#rpHome").click(function() {
	    AH.getFinalReport('get/finalReport', 'GET');
	});
	var time = 0;
	var simTotalTime = 0;
	var userTable = '';
	if (FB.departments.length != 0) {

	    userTable += '<br><br><table class="table table-hover table-condensed"><tr><th>Labs</th><th style ="text-align: center;">Total Time (hour:min:sec)</th></tr>';
	    for (var j = 0; j < simData.deptnm; j++) {
		time = UP.msToHMS(simData.totaltime[j]);
		json = {
		    "msToHMS" : time
		};

		simTotalTime += simData.totaltime[j];
	    }

	    simTotalTime = UP.msToHMS(simTotalTime);
	    UP.tabs1(simData);

	    $("#simTime").html(simTotalTime);
	    $("#simHit").html(simData.exptnm);

			for ( var key in FB.labs[deptId - 1]) {
				userTable += "<tr><td ><a name='" + key
						+ "' class='anchor' style='cursor: pointer'>"
						+ FB.labs[deptId - 1][key]
						+ "</a></td><td align='center'>"
						+ simData.data[key - 1] + "</td></tr>";
			}
			userTable += '</table>';

		} else {
			$("#SimLabelHit").hide();
			$(".nr-error").css('display', 'block');
			$(".nr-error").html("No record found for the selected option");
		}

		$('#simDetails2').html(userTable);
		$('.anchor').click(
				function() {
					var labId = $(this).attr("name");
					if (labId == 0) {
						alert("Data Not available");
					} else {
						AH.getExpsFinalReport('get/finalReport/' + deptId + '/'
								+ labId, 'GET');
					}
				});

	};

	// /// to show exps final record

	UP.exps = function(simData) {
		$("#main-div").html('');
		$('#simDetails').show();
		var deptId = simData.deptId;
		var labId = simData.labId;

		var naviJson = {
			"report" : "Report",
			"deptName" : FB.departments[deptId],
			"labName" : FB.labs[deptId - 1][labId]
		};

		var link = '<div id="user-div" ><ol class="breadcrumb"><li><span id="rpHome" style="cursor: pointer">{%=report%}</span></li><li><span id="deptName" style="cursor: pointer">{%=deptName%}</span></li><li><span id="labName" style="cursor: pointer">{%=labName%}</span></li></div>';
		link = TM.interpolate(link, naviJson);
		$('#main-div').html(link);

	$("#rpHome").click(function() {
	    AH.getFinalReport('get/finalReport', 'GET');
	});

	$("#deptName").click(function() {
	    AH.getLabsFinalReport('get/finalReport/' + deptId, 'GET');
	});

	var time = 0;
	var simTotalTime = 0;
	var userTable = '';
	if (FB.departments.length != 0) {

	    userTable += '<br><br><table class="table table-hover table-condensed"><tr><th>Experiments</th><th style ="text-align: center;">Total Time (hour:min:sec)</th></tr>';

	    for (var j = 0; j < simData.deptnm; j++) {
		json = {
		    "msToHMS" : time
		};

		simTotalTime += simData.totaltime[j];
	    }
	    simTotalTime = UP.msToHMS(simTotalTime);
	    UP.tabs1(simData);

	    $("#simTime").html(simTotalTime);
	    $("#simHit").html(simData.exptnm);

	    for ( var key in FB.labExp[deptId - 1][labId - 1]) {
		userTable += "<tr><td >"
			+ FB.labExp[deptId - 1][labId - 1][key]
			+ "</td><td align='center'>" + simData.data[key - 1]
			+ "</td></tr>";
	    }
	    userTable += '</table>';

		} else {
			$("#SimLabelHit").hide();
			$(".nr-error").css('display', 'block');
			$(".nr-error").html("No record found for the selected option");
		}

	$('#simDetails2').html(userTable);

    };

	UP.userTab = function(simData, name, cName, id) {
		$('#DataTable').hide();

		var uTab = '<div id="tab" class="col-md-12 well"><ul class="nav nav-tabs"><li class="active"><a href="#static" data-toggle="tab" style="text-align:center; padding-top:14px;">'
				+'<i class="fa fa-table"></i><br>Statistical View</a></li>'
				+ '<li><a href="#dyanamic" data-toggle="tab" style="text-align:center;"><i class="fa fa-bar-chart-o"></i> <br>Graphical View</a></li></ul>'
				+ '<div id="myTabContent" class="tab-content"><div class="tab-pane active in" id="static"><div class="panel panel-black" id="panel-sim" style="margin-top: 10px;">'
				+'<div class="panel-heading"><h7><label id="username" ></label></h7><h7><label id="collegeName" class="pull-right"></label></h7></div>'
				+'<div class="panel-body"><div class="row"><div id="simDetails" class="col-md-12"></div></div></div></div></div>'
				+ '<div class="tab-pane fade" id="dyanamic"><div id="Navigation" style="margin-top: 9px;"></div><div class="row">'
				+'<div id="usergraph" class = "col-md-6" style="width: 600px;"></div><div id="DataTable"  class = "col-md-6" style="float:right"; ></div></div></div>'
				+ '</div>' + '</div>';
		$("#sub-div").html(uTab);
		$('#panel-sim').show();
		$('#username').html(name);
		$('#username').append(
				' ( <a href="javascript:com.coep.vlab.userProfile.onClickViewInfo(\''
						+ id + '\',false);"> info </a> )');
		$('#collegeName').text(cName);
		$('#collegeName').append(
				' ( <a href="javascript:com.coep.vlab.userProfile.onClickViewInfo(\''
						+ id + '\',true);"> info </a> )');
		UP.userDeptData(simData);

    };

    UP.userDeptData = function(simData) {
	var graphJson = [];
	var userDept = [];
	var userdeptnm = [];
	var series = '', dname = '';

		for ( var key in FB.departments) {
			for ( var i = 0; i < simData.deptnm.length; i++) {
				if (simData.deptnm[i] == key) {
					dname = FB.departments[key];
				}
			}
			if (dname != '') {
				userdeptnm.push(dname);
				dname = '';
			}
		}
		for ( var key in userdeptnm) {
			var min = 0, sec = 0, hrs = 0;
			var time = 0;
			var time2 = 0;
			for ( var i = 0; i < simData.deptnm.length; i++) {
				if (FB.departments[simData.deptnm[i]] == userdeptnm[key]) {
					time = UP.msToHMS(simData.totaltime[i]);
					time2 = time.split(":");
					hrs += parseInt(time2[0]);
					min += (parseInt(time2[1]) % 60);
					sec += parseInt(time2[2]);

		    hrs += parseInt(min / 60);
		    min = min % 60;
		    min += (parseInt(sec / 60));
		    sec = sec % 60;
		}
	    }

	    userDept.push(hrs + "." + min + "." + (sec % 60));
	    graphJson.push(parseFloat(hrs + "." + min));
	}
	var naviJson = {
	    "graph" : "Graph"
	};

	var link = '<div id="user-div" ><ol class="breadcrumb"><li><span id="fbHome" style="cursor: pointer">{%=graph%}</span></li></div>';
	link = TM.interpolate(link, naviJson);
	$('#Navigation').html(link);

	series = "Departments";
	UP.graphs(series, userdeptnm, graphJson); // graph of Dept vs Time

	var Table = '<table class="table table-hover table-condensed"><tr><th>Departments</th><th style =" text-align: center;">Time (hrs:min:sec)</th></tr>';
	var deptBoiler = "<tr><td ><a class='anchor' name='{%=deptnm%}' style='cursor: pointer'>{%=deptnm%}</a></td><td align='center'>{%=hrs%} : {%=min%} : {%=sec%}</td></tr>";

	for ( var key in userdeptnm) {
	    var t = userDept[key].toString().split(".");
	    var deptJson = {
		"deptnm" : userdeptnm[key],
		"hrs" : t[0],
		"min" : t[1],
		"sec" : t[2]
	    };
	    Table += TM.interpolate(deptBoiler, deptJson);
	}
	$('#DataTable').html(Table);
	$('#DataTable').show();
	$('.anchor').click(function() {
	    var dnm = $(this).attr("name");
	    UP.userLabData(simData, dnm);
	});
    };

    UP.userLabData = function(simData, dnm) {
	var graphJson = [];
	var lbJson = [];
	var lbnmJson = [];
	var series = "";
	var lname = '';

	var deptId = 0;
	for ( var key in FB.departments) {
	    if (FB.departments[key] == dnm) {
		deptId = key;
		break;
	    }
	}

	for ( var key in FB.labs[deptId - 1]) {
	    for (var i = 0; i < simData.deptnm.length; i++) {
		if ((simData.deptnm[i] == deptId) && (simData.labnm[i] == key)) {
		    lname = FB.labs[deptId - 1][key];
		    break;
		}
	    }

	    if (lname != '') {

		lbnmJson.push(lname);
		lname = '';
	    }
	}
	for ( var key in lbnmJson) {
	    var min = 0, sec = 0;
	    hrs = 0;
	    var time = 0;
	    var time2 = 0;
	    for (var i = 0; i < simData.deptnm.length; i++) {
		if (FB.labs[simData.deptnm[i] - 1][simData.labnm[i]] == lbnmJson[key]) {

		    time = UP.msToHMS(simData.totaltime[i]);
		    time2 = time.split(":");
		    hrs += parseInt(time2[0]);
		    min += (parseInt(time2[1]) % 60);
		    sec += parseInt(time2[2]);

		    hrs += parseInt(min / 60);
		    min = min % 60;
		    min += (parseInt(sec / 60));
		    sec = sec % 60;
		}
	    }
	    lbJson.push(hrs + "." + min + "." + (sec % 60));
	    graphJson.push(parseFloat(hrs + "." + min));
	}
	var naviJson = {
	    "graph" : "Graph",
	    "deptName" : FB.departments[deptId]
	};

	var link = '<div id="user-div" ><ol class="breadcrumb"><li><span id="Home" style="cursor: pointer" >{%=graph%}</span></li><li><span id="deptName" style="cursor: pointer">{%=deptName%}</span></li></div>';
	link = TM.interpolate(link, naviJson);
	$('#Navigation').html(link);

	$("#Home").click(function() {
	    UP.userDeptData(simData);
	});

	series = "Labs";
	UP.graphs(series, lbnmJson, graphJson); // graph of lab vs time

	var Table = '<table class="table table-hover table-condensed"><tr><th>Labs</th><th style =" text-align: center;">Time (min:sec)</th></tr>';
	var labBoiler = "<tr><td ><a class='anchor' name='{%=labnm%}' style='cursor: pointer'>{%=labnm%}</a></td><td align='center'>{%=hrs%} :{%=min%} : {%=sec%}</td></tr>";
	for ( var key in lbnmJson) {
	    var t = lbJson[key].toString().split(".");
	    var labJson = {
		"labnm" : lbnmJson[key],
		"hrs" : t[0],
		"min" : t[1],
		"sec" : t[2]
	    };
	    Table += TM.interpolate(labBoiler, labJson);
	}
	$('#DataTable').html(Table);

	$('#DataTable').show();
	$('.anchor').click(function() {
	    var lnm = $(this).attr("name");
	    UP.userexpData(simData, deptId, lnm);
	});
    };

    UP.userexpData = function(simData, deptId, lnm) {
	var graphJson = [];
	var exJson = [];
	var exnmJson = [];
	var series = "";
	var ename = '';
	for ( var key in FB.labs[deptId - 1]) {
	    if (FB.labs[deptId - 1][key] == lnm) {
		labId = key;
		break;
	    }
	}

	for ( var key in FB.labExp[deptId - 1][labId - 1]) {
	    for (var i = 0; i < simData.deptnm.length; i++) {
		if ((simData.deptnm[i] == deptId)
			&& (simData.labnm[i] == labId)
			&& (simData.exptnm[i] == key)) {
		    ename = FB.labExp[deptId - 1][labId - 1][key];
		    break;
		}
	    }
	    if (ename != '') {
		exnmJson.push(ename);
		ename = '';
	    }
	}

	for ( var key in exnmJson) {
	    var min = 0, sec = 0;
	    hrs = 0;
	    var time = 0;
	    var time2 = 0;
	    for (var i = 0; i < simData.deptnm.length; i++) {
		if (FB.labExp[simData.deptnm[i] - 1][simData.labnm[i] - 1][simData.exptnm[i]] == exnmJson[key]) {

		    time = UP.msToHMS(simData.totaltime[i]);
		    time2 = time.split(":");
		    hrs += parseInt(time2[0]);
		    min += (parseInt(time2[1]) % 60);
		    sec += parseInt(time2[2]);

		    hrs += parseInt(min / 60);
		    min = min % 60;
		    min += (parseInt(sec / 60));
		    sec = sec % 60;
		}
	    }
	    exJson.push(hrs + "." + min + "." + (sec % 60));
	    graphJson.push(parseFloat(hrs + "." + min));
	}

	series = "Experiments";
	UP.graphs(series, UP.userExp(exnmJson), graphJson); // graph of exp vs

	var Table = '<table class="table table-hover table-condensed"><tr><th style="width : 8%">No</th><th>Experiments</th><th style =" text-align: center;">Time (min:sec)</th></tr>';

	var expBoiler = "<tr><td>{%=no%}</td><td><span class='anchor' name='{%=expnm%}' style='cursor: pointer'>{%=expnm%}</span></td><td align='center'>{%=hrs%} : {%=min%} : {%=sec%}</td></tr>";
	for ( var key in exnmJson) {
	    var t = exJson[key].toString().split(".");
	    var expJson = {
		"no" : parseInt(key) + 1,
		"expnm" : exnmJson[key],
		"hrs" : t[0],
		"min" : t[1],
		"sec" : t[2]
	    };
	    Table += TM.interpolate(expBoiler, expJson);
	}

	$('#DataTable').html(Table);
	$('#DataTable').show();

	var naviJson = {
	    "graph" : "Graph",
	    "deptName" : FB.departments[deptId],
	    "labName" : FB.labs[deptId - 1][labId]
	};

	var link = '<div id="user-div" ><ol class="breadcrumb"><li><span id="Home" style="cursor: pointer">{%=graph%}</span></li><li><span id="deptName" style="cursor: pointer">{%=deptName%}</span></li><li><span id="labName" style="cursor: pointer">{%=labName%}</span></li></div>';
	link = TM.interpolate(link, naviJson);
	$('#Navigation').html(link);

	$("#deptName").click(function() {
	    UP.userLabData(simData, FB.departments[deptId]);
	});

	$("#Home").click(function() {
	    UP.userDeptData(simData);
	});
    };

    UP.userExp = function(exnmJson) {
	// generate an array of random data
	var data = [];
	for ( var key in exnmJson) {
	    data.push(parseInt(key) + 1);
	}
	return data;
    };

    // highcharts by user
    UP.graphs = function(series, xData, yData) {
	$("#usergraph").highcharts({
	    chart : {
		type : 'column'
	    },
	    title : {
		text : 'Graph'
	    },

	    xAxis : {
		categories : xData,
		type : 'linear',
		title : {
		    text : series
		},
	    },
	    yAxis : {
		min : 0,
		title : {
		    text : 'Time (Hours)'
		}
	    },

	    plotOptions : {
		column : {
		    pointPadding : 0.2,
		    borderWidth : 0
		}
	    },
	    series : [ {
		name : 'Total time',
		data : yData

	    } ]
	});

    };

    // only for general info
    UP.msToHM = function(ms) {
	// 1- Convert to seconds:
	var seconds = ms / 1000;
	// 2- Extract hours:
	var hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
	seconds = seconds % 3600; // seconds remaining after extracting hours
	// 3- Extract minutes:
	var minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
	// 4- Keep only seconds not extracted to minutes:
	// seconds = seconds % 60;
	return hours + "." + minutes;
    };

    // highcharts by simulator
    UP.tabs = function(simData) {
	var json = [];
	var dt = [];
	for (var i = 0; i < simData.deptnm.length; i++) {

	    json
		    .push({
			"exptnm" : FB.labExp[(simData.deptnm[i]) - 1][(simData.labnm[i]) - 1][simData.exptnm[i]],
		    });
	    dt.push(json[i].exptnm);
	}
	var tabs = '<div class="col-md-12 well"><ul class="nav nav-tabs"><li class="active"><a href="#static" data-toggle="tab" style="text-align:center;padding-top:14px;"><i class="fa fa-table"></i><br>Statistical View</a></li>'
		+ '<li><a href="#dyanamic" data-toggle="tab" style="text-align:center;"><i class="fa fa-bar-chart-o"></i> <br>Graphical View</a></li></ul>'
		+ '<br><div  class="panel-heading"><label id="simLabel1" class="pull-left">Total Simulator Time : <span id= "totalSimTime"></span></label><label id="simHitLabel1" class="pull-right"> Total Simulator Hit : <span id= "totalSimHit"></span></label></div><br>'
		+ '<div id="myTabContent" class="tab-content"><div class="tab-pane active in" id="static"><div class="panel panel-black" id="panel-sim2" style="margin-top: 10px;"><div class="panel-heading"><h3 class="panel-title" id="SimLabelHit" style="height:15px"><label id="simLabel" class="pull-left">Simulator Time : <span id= "simTime"></span></label><label id="simHitLabel" class="pull-right"> Simulator Hit : <span id= "simHit"></span></label></h3></div><div class="panel-body"><div class="row"><div id="simDetails2" class="col-md-12"></div></div></div></div></div>'
		+ '<div class="tab-pane fade" id="dyanamic" ><div id="graph" ></div></div>'
		+ '</div>' + '</div>';

		$("#sub-div").html(tabs);
		$("#panel-sim2").show();
		$("#simDeatails2").show();

	$('#graph')
		.highcharts(
			{
			    chart : {
				borderColor : '#2F7ED8',
				borderWidth : 2,
				type : 'bar',
				height : 520,
				width : screen.width - 120,
			    },
			    title : {
				text : "Graph"
			    },
			    xAxis : {
				categories : dt,
				type : 'linear',
				title : {
				    text : "Experiments"
				},

			    },
			    yAxis : {
				hrs : 0,
				title : {
				    text : "Time (Hours)"
				}
			    },
			    tooltip : {
				headerFormat : '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat : '<tr><td style="color:{series.color};padding:0">{series.name}: </td>'
					+ '<td style="padding:0"><b>{point.y:.1f} Hours</b></td></tr>',
				footerFormat : '</table>',
				shared : true,
				useHTML : true
			    },
			    plotOptions : {
				column : {
				    pointPadding : 0.2,
				    borderWidth : 0
				}
			    },
			    series : [ {
				name : "Total Time",
				data : (function() {
				    var data = [], i;
				    for (i = 0; i < simData.deptnm.length; i++) {
					data
						.push([ parseFloat(UP
							.msToHM(simData.totaltime[i])) ]);
				    }
				    return data;
				})()

			    } ]
			});

    };

    // new tabs func for one click record

    UP.tabs1 = function(simData) {
	var data = [];
	var deptId = simData.deptId;
	var labId = simData.labId;
	if (deptId == false) {

	    for ( var key in FB.departments) {
		data.push(FB.departments[key]);
	    }
	} else if (deptId > 0 && labId == false) {

	    for ( var key in FB.labs[deptId - 1]) {
		data.push(FB.labs[deptId - 1][key]);
	    }
	} else if (deptId > 0 && labId > 0) {
	    for ( var key in FB.labExp[deptId - 1][labId - 1]) {
		data.push(key);
	    }
	}

	var tabs = '<div class="col-md-12 well"><ul class="nav nav-tabs"><li class="active" id="stat"><a href="#static" data-toggle="tab" style="text-align:center; padding-top:14px;"><i class="fa fa-table"></i><br>Statistical View</a></li>'
		+ '<li id="dynam"><a href="#dyanamic" data-toggle="tab" style="text-align:center;"><i class="fa fa-bar-chart-o"></i> <br>Graphical View</a></li>'
		+ '<li><a href="#yearRp" class="clickToShowDropDown" data-toggle="tab" style="text-align:center;"><i class="fa fa-table"></i> <br>Yearly Report</a></li>'
		+'</ul>'
		+ '<div id="myTabContent" class="tab-content"><div class="tab-pane active in" id="static">'
		+'<div class="panel panel-black" id="panel-sim2" style="margin-top: 10px;">'
		+'<div class="panel-heading"><h3 class="panel-title" id="SimLabelHit" style="height:15px">'
		+'<label id="simLabel" class="pull-left">Total Simulator Time : <span id= "simTime"></span></label>'
		+'<label id="simHitLabel" class="pull-right">Total Simulator Hit : <span id= "simHit"></span></label></h3></div>'
		+'<div class="panel-body"><div class="row"><div id="simDetails2" class="col-md-12"></div></div></div></div></div>'
		+'<div class="tab-pane fade" id="dyanamic" ><div id="graph" ></div></div>'
		
		+'<div class="tab-pane active in" id="yearRp">'
		+'<div class="panel panel-black" id="panel-sim3" style="margin-top: 10px;">'
		+'<div id="" style="padding-left:20px;"><br/><span style="padding:5px 5px 5px 50px; font-size: 15px; font-weight: bold;">From date: &emsp; '
//		+'<input type="date" id="frmDateYr"></span>'
		+'<input type="text" required id="frmDateYr" class="input-md" placeholder="DD/MM/YYYY" autocomplete="on"></span>'
		+'<span style="padding:5px 5px 5px 50px; font-size: 15px; font-weight: bold;">To date: &emsp; '
//		+'<input type="date" id="toDateYr"></span>'
		+'<input type="text" required id="toDateYr" class="input-md" placeholder="DD/MM/YYYY" autocomplete="on"></span>'
		+'<button type="submit" style="padding: 5px 25px 5px 25px; margin-left: 50px;" id="getDataFromLimitbtn">Get Record</button></div>'
//		+'<br/><span class="blink" style="font-weight:800; margin-left:68px;"><span style="color:red;">*Note:</span> The \'From date\' and \'To date\' must be in MM/DD/YYYY format.</span>'
		+'<div class="panel-body"><div class="row"><div class="tab-content" id="yrColgReport"></div>'		
		+'</div></div></div></div>'
		+ '</div>' + '</div>';

		$("#main-div").append(tabs);
		$("#panel-sim2").show();
		$("#simDeatails2").show();
		$('#yearRp').hide();
		
		$("#frmDateYr").datepicker({
		    yearRange : "-10: +10",
		    changeMonth : true,
		    changeYear : true,
		    dateFormat : "dd/mm/yy",
		    maxDate : 1
		});
		
		$("#toDateYr").datepicker({
		    yearRange : "-10: +10",
		    changeMonth : true,
		    changeYear : true,
		    dateFormat : "dd/mm/yy",
		    maxDate : 1
		});
		
		$("#stat").bind('click', function() {
			$('#yearRp').hide();
		});
		
		$("#dynam").bind('click', function() {
			$('#yearRp').hide();
		});

		$(".clickToShowDropDown").bind('click', function() {
			$("#yearRp").show();
		});
		
		
		$("#getDataFromLimitbtn").bind('click', function() {
			
			if(!($("#frmDateYr").val() == "") && !($("#toDateYr").val() == "")){
				var strtDate = 0;
				var endDate = 0;
				var dateJSON = {};
				if($("#frmDateYr").val() == ""){
					strtDate = -1;
				}else{
					strtDate = $("#frmDateYr").datepicker("getDate").getTime();
				}
			
				if($("#toDateYr").val() == ""){
					endDate = -1;
				}else{
					endDate = $("#toDateYr").datepicker("getDate").getTime();
				}
				
				dateJSON = {
						"strtDateYr" : strtDate,
						"endDateYr" : endDate
				}
				AH.getYearlyColgDataWithLimit('getall/simDetails/limited/'+JSON.stringify(dateJSON), 'GET');
			}else {
				$("#yrColgReport").html("<span class='cn-error common-errors alert alert-danger'>Please select from and to date</span>");
			}
		});
		
		
	$('#graph')
		.highcharts(
			{
			    chart : {
				// borderColor : '#2F7ED8',
				// borderWidth : 2,
				type : 'column',
				height : 520,
				width : 800,
			    },
			    title : {
				text : "Graph"
			    },
			    xAxis : {
				categories : data,
				type : 'linear',
				title : {
				    text : "Virtual Areas"
				},

			    },
			    yAxis : {
				hour : 0,
				title : {
				    text : "Time (hours)"
				}
			    },
			    tooltip : {
				headerFormat : '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat : '<tr><td style="color:{series.color};padding:0">{series.name}: </td>'
					+ '<td style="padding:0"><b>{point.y:.1f} hours</b></td></tr>',
				footerFormat : '</table>',
				shared : true,
				useHTML : true
			    },
			    plotOptions : {
				column : {
				    pointPadding : 0.2,
				    borderWidth : 0
				}
			    },
			    series : [ {
				name : "Total Time",
				data : (function() {
				    var data = [], i;
				    for (i = 0; i < simData.data.length; i++) {
					var time = simData.data[i].replace(":",
						".");
					
					// UP.msToHMS(simData.data[i]);
					// UP.msToHMS(simData.totaltime[j])
					var t = time.replace(/ /g, '');
					data.push([ parseFloat($.trim(t)) ]);
				    }
				    return data;
				})()

			    } ]
			});

    };
    
    UP.displayColgYearlyUsageRecord = function(data) {
    	var displayColgUsageHtm = '';
    		if(data.done == true){
    			displayColgUsageHtm = '<span style="float:left; background-color:#333; color:#fff; padding:10px; margin-left:26px; font-size:15px; font-weight:bold;"> Total hit counter : '
    			+ data.TOTHIT + '</span><span style="float:right; background-color:#333; color:#fff; padding:10px; margin-right:26px; font-size:15px; font-weight:bold;">'
    			+'Total usage this year by all college : '+ data.ALLSIMTIME +' </span> <br/>'
    			+'<table style="width: 96%;margin:2%;">'
    			+'<tr style=" width:100%; "><th style="width:65%;  background-color:#333; color:#fff; padding:15px;">College Name</th>'
    			+'<th style="width:10%;  background-color:#333; color:#fff; padding:15px;">Hit Counter</th>'
    			+'<th style="width:25%; background-color:#333; color:#fff; padding:15px; text-align:center;">Usage this year ( hour : min : sec )</th></tr>'
    			for(var d=0; d < data.COLGID.length; d++){
    				displayColgUsageHtm += '<tr style="border-bottom:1px solid #cac5c5; width:96%; padding:2%;"><td style=" padding:7px; ">'+ data.COLGNM[d] 
    				+'</td><td style=" padding:7px; ">'+ data.HITCNT[d] +'</td><td style="padding:7px; text-align:center;">'+ data.TOTTIME[d] +'</td></tr>'
    			}
    			}else {
    			displayColgUsageHtm = '<center><span class="nru-error common-errors alert alert-danger">No data available</span></center>'
    		}
    		displayColgUsageHtm += '</table>';
    		
    	$("#yrColgReport").html(displayColgUsageHtm);
    };

    UP.validateEmail = function(inputText) {
	var ans = $("#email").val();
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (ans == "") {
	    $("#email").focus();
	} else {
	    if (ans.match(mailformat)) {
		$("#email").focus();
		return true;
	    } else {
		alert("You have entered an invalid email address!");
		$("#email").focus();
		return false;
	    }
	}
    };

    // new
    UP.validateClgName = function(inputText) {
	var ans = $("#collegeName option:selected").val();
	if (ans == "NONE") {
	    $("#collegeName").focus();
	    alert("Please Select College Name!");
	    location.reload(true);
	    return false;
	} else {
	    return true;
	}
    };

    FB.fbReportData = function() {
	try {
	    AH.getFBReportData('get/feedbackInfo', 'GET');
	} catch (e) {
	    var msg = "There was an error in execution of Code";
	    msg += "Error Description : " + e.message;
	    UP.showCustomAlert('Error', msg);
	}
    };

	FB.fbHighchart = function(dept, fbdata) {

		$('#chart').highcharts({
			chart : {
				type : 'bar',
				width : 630,
				height : 350
			},
			title : {
				text : 'Feedback Analysis'
			},

			xAxis : [ {
				categories : dept,
				title : {
					text : null
				}
			} ],
			yAxis : {
				min : 0,
				title : {
					text : 'Feedback',
					align : 'high'
				},
				labels : {
					overflow : 'justify'
				}
			},
			tooltip : {
				valueSuffix : ''
			},
			plotOptions : {
				bar : {
					dataLabels : {
						enabled : true
					}
				},
				series : {
					cursor : 'pointer',
					colorByPoint : true
				}
			},
			legend : {
				align : 'right',
				x : -40,
				y : 100,
				backgroundColor : 'black',
			},
			credits : {
				enabled : false
			},
			series : [ {
				name : 'Feedback',
				data : fbdata
			} ]
		});
	};

	FB.feedbackReport = function(data) {
		$('#simDetails').hide();
		if (data.dept.length == 0) {
			$('#main-div').html('');
			$('#main-div').html('FeedBack data not available');
		//	 alert("FeedBack data not available");
		} else {
			$('#main-div').html('');

			var fbJson = [];
			for ( var key in FB.departments) {
				fbJson.push({
					key : 0
				});
			}

	    for (var i = 0; i < data.dept.length; i++) {
		var deptid = data.dept[i];
		fbJson[deptid - 1].key++;
	    }

	    var total = 0;
	    for (var i = 0; i < fbJson.length; i++) {
		total += fbJson[i].key;
	    }

			var naviJson = {
				"feedback" : "Feedback"
			};
			var link = '<div id="user-div" ><ol class="breadcrumb"><li><span id="fbHome" style="cursor: pointer">{%=feedback%}</span></li></div>';
			link = TM.interpolate(link, naviJson);
			$('#main-div').html(link);

			var tempdiv = '<div class="col-md-6" id = "chart">';
			$('#main-div').append(tempdiv);

			FB.fbHighchart(FB.fbDept(), FB.fbdata(fbJson));

			var fbTable = '<br><br><div class="col-md-6"><table class="table table-hover table-condensed"><tr><th>Departments</th><th style ="text-align: center;">Total Feedback</th><th style =" text-align: center;">Percentage</th></tr>';
			for ( var key in FB.departments) {
				fbTable += "<tr><td ><a name='" + key
						+ "' class='anchor' style='cursor: pointer'>"
						+ FB.departments[key] + "</a></td><td align='center'>"
						+ fbJson[key - 1].key + "</td><td align='center'>"
						+ parseInt(((fbJson[key - 1].key / total) * 100))
						+ "</td></tr>";
			}
			fbTable += '</table></div>';

			$('#main-div').append(fbTable);
			$('.anchor').click(function() {
				var deptId = $(this).attr("name");
				if (fbJson[deptId - 1].key == 0) {
					//$("#chart").html("Data Not available");
					alert("Feedback data Not available");
				} else {
					com.coep.vlab.feedback.fbLabs(data, deptId);
				}
			});
		}
	};

	FB.fbDept = function() {
		// generate an array of random data
		var data = [];
		for ( var key in FB.departments) {
			data.push(FB.departments[key]);
		}
		return data;
	};

	FB.fbLabs = function(data, deptid) {
		var labJson = [];
		for ( var key in FB.labs[deptid - 1]) {
			labJson.push({
				key : 0
			});
		}

	for (var i = 0; i < data.dept.length; i++) {
	    if (data.dept[i] == deptid) {
		var labId = data.lab[i];
		labJson[labId - 1].key++;
	    }
	}

		var total = 0;
		for ( var i = 0; i < labJson.length; i++) {
			total += labJson[i].key;
		}

		var naviJson = {
			"feedback" : "Feedback",
			"deptName" : FB.departments[deptid]
		};

		var link = '<div id="user-div" ><ol class="breadcrumb"><li><span id="fbHome" style="cursor: pointer" >{%=feedback%}</span></li><li><span id="deptName" style="cursor: pointer">{%=deptName%}</span></li></div>';
		link = TM.interpolate(link, naviJson);

		$('#main-div').html(link);

		var tempdiv = '<div class="col-md-6" id = "chart">';
		$('#main-div').append(tempdiv);

		FB.fbHighchart(FB.fblab(deptid), FB.fbdata(labJson));

		$("#fbHome").click(function() {
			FB.feedbackReport(data);
		});
		var fbTable = '<br><br><div class="col-md-6"><table  class="table table-hover table-condensed"><tr><th>Labs</th><th style ="text-align: center;">Total Feedback</th><th style =" text-align: center;">Percentage</th></tr>';
		for ( var key in FB.labs[deptid - 1]) {
			fbTable += "<tr><td ><a  name='" + key
					+ "' class='anchor' style='cursor: pointer'>"
					+ FB.labs[deptid - 1][key] + "</a></td><td align='center'>"
					+ labJson[key - 1].key + "</td><td align='center'>"
					+ parseInt(((labJson[key - 1].key / total) * 100))
					+ "</td></tr>";
		}
		fbTable += '</table>';

		$('#main-div').append(fbTable);
		$('.anchor').click(function() {
			var labId = $(this).attr("name");
			if (labJson[labId - 1].key == 0) {
				alert("Feedback data not available");
			} else {
				com.coep.vlab.feedback.fbExpt(data, deptid, labId);
			}
		});
	};

    FB.fblab = function(deptid) {
	// generate an array of random data
	var data = [];
	for ( var key in FB.labs[deptid - 1]) {
	    data.push(FB.labs[deptid - 1][key]);
	}
	return data;
    };

	FB.fbExpt = function(data, deptid, labid) {
		var expJson = [];
		for ( var key in FB.labExp[deptid - 1][labid - 1]) {
			expJson.push({
				key : 0
			});
		}

	for (var i = 0; i < data.dept.length; i++) {
	    if (data.dept[i] == deptid && data.lab[i] == labid) {
		var expId = data.exp[i];
		expJson[expId - 1].key++;
	    }
	}

		var total = 0;
		for ( var i = 0; i < expJson.length; i++) {
			// expJson[i].key /= len;
			total += expJson[i].key;
		}
		var naviJson = {
			"feedback" : "Feedback",
			"deptName" : FB.departments[deptid],
			"labName" : FB.labs[deptid - 1][labid]
		};
		var link = '<div id="user-div" ><ol class="breadcrumb"><li><span id="fbHome" style="cursor: pointer">{%=feedback%}</span></li><li><span id="deptName" style="cursor: pointer">{%=deptName%}</span></li><li><span id="labName" style="cursor: pointer">{%=labName%}</span></li></div>';
		link = TM.interpolate(link, naviJson);
		$('#main-div').html(link);

		$("#fbHome").click(function() {
			FB.feedbackReport(data);
		});

		var tempdiv = '<div class="col-md-6" id = "chart">';
		$('#main-div').append(tempdiv);

		FB.fbHighchart(FB.fbExp(deptid, labid), FB.fbdata(expJson));

		$("#deptName").click(function() {
			FB.fbLabs(data, deptid);
		});
		var fbTable = '<div class="col-md-6"><table class="table table-hover table-condensed"><tr><th>Experiments</th><th style ="text-align: center;">Total Feedback</th><th style =" text-align: center;">Percentage</th></tr>';

		for ( var key in FB.labExp[deptid - 1][labid - 1]) {
			fbTable += "<tr><td ><a name='" + key
					+ "' class='anchor' style='cursor: pointer'>"
					+ FB.labExp[deptid - 1][labid - 1][key]
					+ "</a></td><td align='center'>" + expJson[key - 1].key
					+ "</td><td align='center'>"
					+ parseInt(((expJson[key - 1].key / total) * 100))
					+ "</td></tr>";
		}
		fbTable += '</table>';
		$('#main-div').append(fbTable);

		$('.anchor').click(function() {
			var expId = $(this).attr("name");
			if (expJson[expId - 1].key == 0) {
				alert("Feedback data not available");
			} else {
				com.coep.vlab.feedback.fbQuesAns(data, deptid, labid, expId);
			}
		});
	};

	FB.fbExp = function(deptid, labid) {
		// generate an array of random data
		var data = [];
		for ( var key in FB.labExp[deptid - 1][labid - 1]) {
			data.push(key);
		}
		return data;
	};

	FB.fbQuesAns = function(data, deptid, labid, expid) {
		$("#main-div").html('');
		var tempdiv = '<div class="col-md-6" id = "chart">';
		$('#main-div').append(tempdiv);

		var naviJson = {
			"feedback" : "Feedback",
			"deptName" : FB.departments[deptid],
			"labName" : FB.labs[deptid - 1][labid],
			"expName" : FB.labExp[deptid - 1][labid - 1][expid]
		};
		var link = '<div id="user-div" ><ol class="breadcrumb"><li><span id="fbHome" style="cursor: pointer">{%=feedback%}</span></li><li><span id="deptName" style="cursor: pointer">{%=deptName%}</span></li><li><span id="fblabName" style="cursor: pointer">{%=labName%}</span></li><li><span id="expName" style="cursor: pointer">{%=expName%}</span></li></div>';
		link = TM.interpolate(link, naviJson);
		$('#main-div').html(link);

	$("#fbHome").click(function() {
	    FB.feedbackReport(data);
	});

	$("#deptName").click(function() {
	    FB.fbLabs(data, deptid);
	});

	$("#fblabName").click(function() {
	    FB.fbExpt(data, deptid, labid);
	});

	for ( var key in FB.feedbackQues) {
	    FB.fbQues(data, deptid, labid, expid, key);
	}
    };

	FB.fbQues = function(data, deptid, labid, expid, QId) {

		var ansJson = [];
		for ( var key in FB.FeedbackAnswers) {
			ansJson.push({
				key : 0
			});
		}

	for (var i = 0; i < data.dept.length; i++) {
	    if (data.dept[i] == deptid && data.lab[i] == labid
		    && data.exp[i] == expid) {
		for (var j = 0; j < data.Ques[i].length; j++) {
		    if (data.Ques[i][j].QID == QId) {
			var ansId = data.Ques[i][j].FBK;
			ansJson[ansId - 1].key++;
		    }
		}
	    }
	}

	var total = 0;
	for (var i = 0; i < ansJson.length; i++) {
	    // ansJson[i].key /= len;
	    total += ansJson[i].key;
	}

		var category = FB.fbAns();
		var ansData = FB.fbdata(ansJson);
		// var barColors = FB.fbColor();
		var fbTable = '<div class = "col-md-12"><legend>'
				+ QId
				+ ') '
				+ FB.feedbackQues[QId]
				+ '</legend><div class = "row"><div id = "fbGraph'
				+ QId
				+ '" class = "col-md-6"></div><div class = "col-md-6"><table class="table table-hover table-condensed"><tr><th>Labs</th><th style ="text-align: center;">Total Feedback</th><th style =" text-align: center;">Percentage</th></tr>';
		for ( var key in FB.FeedbackAnswers) {
			fbTable += "<tr><td ><span id = 'fbl-" + key + "' name='" + key
					+ "' style='cursor: pointer'>" + FB.FeedbackAnswers[key]
					+ "</span></td><td align='center'>" + ansJson[key - 1].key
					+ "</td><td align='center'>"
					+ parseInt(((ansJson[key - 1].key / total) * 100))
					+ "</td></tr>";
		}
		fbTable += '</table></div></div></div><hr>';

		$('#main-div').append(fbTable);

		var chart = $('#fbGraph' + QId).highcharts(
				{
					chart : {
						type : 'bar',
						width : 630,
						height : 220
					},
					title : {
						text : null
					},

					xAxis : [ {
						categories : category,
						title : {
							text : null
						}
					} ],
					yAxis : {
						min : 0,
						title : {
							text : 'Feedback',
							align : 'high'
						},
						labels : {
							overflow : 'justify'
						}
					},
					tooltip : {
						valueSuffix : ''
					},
					plotOptions : {
						bar : {
							dataLabels : {
								enabled : true
							}
						},
						series : {
							cursor : 'pointer',
							colorByPoint : true
						}
					},
					colors : [ [ "darkgreen" ], [ "ForestGreen" ],
							[ "LightGreen" ], [ "IndianRed" ], [ "red" ] ],
					legend : {
						align : 'right',
						x : -40,
						y : 100,
						backgroundColor : 'black',
					},
					credits : {
						enabled : false
					},
					series : [ {
						name : 'Feedback',
						data : ansData
					} ]
				});
		$('#fbGraph' + QId).append(chart);
	};

	FB.fbAns = function() {
		// generate an array of random data
		var data = [];
		for ( var key in FB.FeedbackAnswers) {
			data.push(FB.FeedbackAnswers[key]);
		}
		return data;
	};

	FB.fbdata = function(fbJson) {
		// generate an array of random data
		var data = [];
		for ( var i = 0; i < fbJson.length; i++) {
			data.push(fbJson[i].key);
		}
		return data;
	};

    UP.showError = function() {
	$('#dept').show();
	var div = '<div id="user-div" ><ol class="breadcrumb"><li><a href="../auth/home">Home</a></li></ol></div><div  style="margin-top: 30px;"><div class="row"><div class="col-md-12"><div class="jumbotron" style="text-align: center; margin-left: auto; margin-right: auto; margin-bottom: auto; margin-top: auto;"><h1>Page Not Available <small></small></h1>';
	$('#dept').html(div);
    };

    UP.showHome = function() {
	$('#dept').show();
	var div = '<div id="user-div" ><ol class="breadcrumb"><li><a href="../auth/home">Home</a></li></ol></div>';
	$('#home').html(div);
    };

    UP.navigatioBar = function(data) {
	var link = '<div id="user-div" ><ol class="breadcrumb"><li><a href="../auth/home">Home</a></li><li><a href="../auth/home?dept={%=deptid%}">{%=deptName%}</a></li><li><a href="../auth/home?dept={%=deptid%}&lab={%=labid%}">{%=labName%}</a></li><li><a href="../auth/home?dept={%=deptid%}&lab={%=labid%}&exp={%=exptid%}">{%=exptName%}</a></li></ol><br></div>';
	link = TM.interpolate(link, data);
	$('#navigation').html(link);
    };

	UP.collegeInfo = function() {
		$('#main-div').html('');
		$('#simDetails').hide();

		var create = '';

		create += '<fieldset id = "fieldset1"><legend>Add College</legend><div class="form-horizontal">'
				+ '<div class="form-group"><label class="col-lg-2 control-label" for ="clgnm">Enter College Name</label><div class="col-lg-4"><input type="text" class = "blk form-control input-md" id="clgnm"  style="width:50%"/></div></div><div class="form-group"><div class="col-lg-4"><span id="errBlk" class="cn-error common-errors alert alert-danger" Style="display : none" >Enter College Name</span></div></div>'
				+ '<div class="form-group"><label class="col-lg-2 control-label" for ="clgId">Enter College Code</label><div class="col-lg-4"><input type="text" class = "blk form-control input-md" id="clgId"  style="width:50%"/></div></div><div class="form-group"><div class="col-lg-4"><span id="errBlk" class="cid-error common-errors alert alert-danger" Style="display : none"  >Enter College Code</span></div></div>'
				+ '<div class="form-group"><label class="col-lg-2 control-label" for ="clgAdd">Address</label><div class="col-lg-4"><input type="text" class = "blk form-control input-md" id="clgAdd"  style="width:50%"/></div></div><div class="form-group"><div class="col-lg-4"><span id="errBlk" class="ca-error common-errors alert alert-danger" Style="display : none"  >Enter College Address</span></div></div>'
				+ '<div class="form-group"><label class="col-lg-2 control-label" for ="district">District</label><div class="col-lg-4"><input type="text" class = "blk form-control input-md" id="dist"  style="width:50%"/></div></div><div class="form-group"><div class="col-lg-4"><span id="errBlk" class="ds-error common-errors alert alert-danger" Style="display : none" >Enter District</span></div></div>'
				+ '<div class="form-group"><label class="col-lg-2 control-label" for ="state">State</label><div class="col-lg-4" Style = "left: 6px;"><select id="state" class="large-selectBox" style="width: 209px;"><option value="-1">---Select---</option>';
		for ( var key in UP.States) {
			create += "<option value=" + UP.States[key] + ">" + UP.States[key]
					+ "</option>";
		}
		create += '</select></div></div><div class="form-group"><div class="col-lg-4"><span id="errBlk" class="st-error common-errors alert alert-danger" Style="display : none" >Please select state</span></div></div>';
		create += '<div class="form-group"><label class="col-lg-2 control-label"></label><div class="col-lg-4"><button class="btn btn-success btn3d" id="submit" style="margin-top: 30px; width: 188px; margin-left: -134px;">Submit</button></div></div>'
				+ '</div>' + '</fieldset>';

		$('#main-div').append(create);
		$('#main-div select').chosen();

		$("#submit").click(function() {
			var valid = true;
			$(".blk").each(function() {
				var c = $("#clgnm").val();
				if (c.trim() == '') {
					$('.cn-error').css('display', 'block');
					valid = valid && false;
				} else {
					$('.cn-error').css('display', 'none');
					valid = valid && true;
				}

		var ci = $("#clgId").val();
		if (ci.trim() == '') {
		    $('.cid-error').css('display', 'block');
		    valid = valid && false;
		} else {
		    $('.cid-error').css('display', 'none');
		    valid = valid && true;
		}

		var a = $("#clgAdd").val();
		if (a.trim() == '') {
		    $('.ca-error').css('display', 'block');
		    valid = valid && false;
		} else {
		    $('.ca-error').css('display', 'none');
		    valid = valid && true;
		}

		var dt = $("#dist").val();
		if (dt.trim() == '') {
		    $('.ds-error').css('display', 'block');
		    valid = valid && false;
		} else {
		    $('.ds-error').css('display', 'none');
		    valid = valid && true;
		}

		var st = $("#state option:selected").text();
		if (st.trim() == -1) {
		    $('.st-error').css('display', 'block');
		    valid = valid && false;
		} else {
		    $('.st-error').css('display', 'none');
		    valid = valid && true;
		}
	    });

	    if (valid == true) {

		var cn = $('#clgnm').val();
		var cid = $('#clgId').val();
		var add = $('#clgAdd').val();
		var dst = $('#dist').val();
		var st = $("#state option:selected").text();

		var json = {
		    "CNM" : cn,
		    "CCD" : cid,
		    "ADD" : add,
		    "DST" : dst,
		    "STE" : st
		};

		AH.createClgInfo('../ajax/createClgInfo', json, 'POST');
	    }
	});
    };

    // FullCollegeList
    UP.showCollegeInfo = function() {
	try {
	    AH.getAllClgInfo('../ajax/getFullClgInfo', 'GET');
	} catch (e) {
	    var msg = "There was an error in execution of Code";
	    msg += "Error Description : " + e.message;
	    UP.showCustomAlert('Error', msg);
	}
    };

	// / to show list of colleges
	UP.showClgList = function(data) {

		$('#main-div')
				.html(
						'<span id="errBlk" class="clg-error common-errors alert alert-danger" Style="display : none" ></span>');
		$(".clg-error").css('display', 'none');
		$('#simDetails').hide();

		var boiler = '<tr><td>{%=SRN%}</td><td>{%=CNM%}</td><td>{%=CCD%}</td><td>{%=ADD%}</td><td>{%=DST%}</td><td>{%=ST%}</td><td><a href="javascript:com.coep.vlab.userProfile.onClickEditClgInfo(\'{%=CID%}\');"><button id="EditBtn{%=CID%}" class="tempBtn btn btn-link" type="button"><i class="fa fa-lg fa-edit"></i></button></a></td></tr>';

		if (data.done == true) {
			var userTable = '';
			userTable += '<div><table class="table table-hover table-condensed" style="font-size:15px;">';
			userTable += '<tr><td width="10%"><b>Sr No.</b></td><td width="70%"><b>College Name</b></td><td width="40%"><b>College Code</b></td><td width="50%"><b>Address</b></td><td width="30%"><b>District</b></td><td width="30%"><b>State</b></td><td width="25%"><b>Edit</b></td></tr>';

			for ( var i = 0; i < data.dt.length; i++) {
				userTable += TM.interpolate(boiler, data.dt[i]);
			}

			userTable += '</table><span id="errBlk" class="clg-error common-errors alert alert-danger" Style="display : none" ></span></div>';

			$('#main-div').html(userTable);
		} else {

	    $(".clg-error").css('display', 'block');
	    $(".clg-error").html("No record found");

	}

    };

    UP.onClickEditClgInfo = function(clgId) {
	var data = {};

	for (var k = 0; k < UP.clgData.dt.length; k++) {
	    data = UP.clgData.dt[k];
	    if (data.CID == clgId) {
		break;
	    }
	}

	var dialogTxt = '<div id = "editClg" class="form form-horizontal">'
		+ '<div class="form-group"><label class="col-lg-3">College Name</label><div class="col-lg-8"><input type="text" class="blk input-md form-control" id="cName" value= "'
		+ data.CNM
		+ '" maxlength="1000"/><span id="errBlk" class="cn-error common-errors alert alert-danger" Style="display : none" >Enter College Name</span></div></div>'
		+ '<div class="form-group"><label class="col-lg-3">College Code</label><div class="col-lg-8"><input type="text" class="blk input-md form-control" id="clgCd" readonly value= "'
		+ data.CCD
		+ '" maxlength="100"/><span id="errBlk" class="cid-error common-errors alert alert-danger" Style="display : none"  >Enter College Code</span></div></div>'
		+ '<div class="form-group"><label class="col-lg-3">Address</label><div class="col-lg-8"><input type="text" class="blk input-md form-control" id="add" value= "'
		+ data.ADD
		+ '" maxlength="500"/><span id="errBlk" class="ca-error common-errors alert alert-danger" Style="display : none"  >Enter College Address</span></div></div>'
		+ '<div class="form-group"><label class="col-lg-3">District</label><div class="col-lg-8"><input type="text" id="dist" class="blk input-md form-control" value= "'
		+ data.DST
		+ '" maxlength="100"/><span id="errBlk" class="ds-error common-errors alert alert-danger" Style="display : none" >Enter District</span></div></div>'
		+ '<div class="form-group"><label class="col-lg-3">State</label><div class="col-lg-8"><select id="cstate" class="large-selectBox  form-control input-sm">'
	for ( var key in UP.States) {
	    dialogTxt += "<option value=" + UP.States[key] + ">"
		    + UP.States[key] + "</option>";
	}
	// + data[clgId-1].ST
	dialogTxt += '</select></div></div>' + '</div>';

	var laxExportBtn = '';
	if (eval(com.coep.vlab.userProfile.canexport) == true) {
	    laxExportBtn = '<a href="../auth/export/settings/college/'
		    + data.CCD + '"><button type="button">Export</button></a>'
	}

	var mbfoot = '<span id="errBlk" class="common-errors"></span><button type="button" id = "updateBtn">Update</button>'
		+ laxExportBtn
		+ com.coep.vlab.userProfile.getCloseButtonOnDialog();

		UP.CallDialogBoxForViewUserInfo(dialogTxt, "UPDATE COLLEGE INFO");
		$('#cstate option[value="' + data.ST + '"]').prop('selected', true);
		$('#dlgFoot').html(mbfoot);

	$("#updateBtn").click(
		function() {

		    var valid = true;
		    $(".blk").each(function() {

			var c = $("#cName").val();
			if (c.trim() == '') {
			    $('.cn-error').css('display', 'block');
			    valid = valid && false;
			} else {
			    $('.cn-error').css('display', 'none');
			    valid = valid && true;
			}

			var ci = $("#clgCd").val();
			if (ci.trim() == '') {
			    $('.cid-error').css('display', 'block');
			    valid = valid && false;
			} else {
			    $('.cid-error').css('display', 'none');
			    valid = valid && true;
			}

			var a = $("#add").val();
			if (a.trim() == '') {
			    $('.ca-error').css('display', 'block');
			    valid = valid && false;
			} else {
			    $('.ca-error').css('display', 'none');
			    valid = valid && true;
			}

			var dt = $("#dist").val();
			if (dt.trim() == '') {
			    $('.ds-error').css('display', 'block');
			    valid = valid && false;
			} else {
			    $('.ds-error').css('display', 'none');
			    valid = valid && true;
			}

			// var st = $("#state option:selected").val();
			// if (st.trim() == -1) {
			// $('.st-error').css('display', 'block');
			// valid = valid && false;
			// } else {
			// $('.st-error').css('display', 'none');
			// valid = valid && true;
			// }
		    });

		    if (valid == true) {

			var cn = $('#cName').val();
			// var cid = $('#clgCd').val();
			var add = $('#add').val();
			var dst = $('#dist').val();
			var st = $("#cstate option:selected").text();

			var json = {
			    "CNM" : cn,
			    // "CCD" : cid,
			    "ADD" : add,
			    "DST" : dst,
			    "STE" : st
			};

			AH.updateClgInfo('../ajax/updateClgInfo/' + clgId,
				json, 'POST');
		    }
		});

    };

    // default profile photo

    UP.changeProfilePhoto = function() {
	try {
	    var photo = $('#hiddenFrame').contents().find('body').html();
	    if (photo != '') {
		photo = JSON.parse(photo);
		if (photo.done == true) {

		    $(".user-pic").prop(
			    "src",
			    "../ajax/userProfile/get/ownProfilePic?"
				    + new Date().getTime());
		    $('#hiddenFrame').contents().find('body').html("");
		    // EF.clearDialogContent();
		}
	    }
	} catch (e) {
	    var msg = "There was an error in execution of Code";
	    msg += "Error Description : " + e.message;
	    AH.showCustomAlert('', msg);
	}
    };

    // to get user info by vlabId
    UP.onClickViewInfo = function(vid, flag) {
	try {
	    AH.getAllUserInfoView('../ajax/userProfile/get/fetchUserInfoById',
		    'GET', vid, flag);
	} catch (e) {
	    var msg1 = "There was an error in execution of Code";
	    msg1 += "Error Description : " + e.message;
	    UP.showCustomAlert('', msg1);
	}
    };

    // to get user info and college info
    UP.onViewUserInfo = function(data, flag) {
	if (flag == false) {
	    var dialogView = ' <div id="dialog-form" title="User Info">'
		    + '  <div class="badger-left badger-success" value="'
		    + data.userInfo.FNM
		    + ' '
		    + data.userInfo.LNM
		    + '">'
		    + '  <form><fieldset id = "fieldset1">'
		    + '<table class="tarm table table-condenced table-bordered">'
		    + '<tr><td width="30%"><label for = "vlabId">Vlab ID</label></td><td>'
		    + data.userInfo.VID
		    + '</td></tr>'
		    + '<tr><td><label for = "UserName">User Name</label></td><td>'
		    + data.userInfo.FNM
		    + ' '
		    + data.userInfo.LNM
		    + '</td>'
		    + '<tr><td><label for = "mobNo">Mobile No</label></td><td>'
		    + data.userInfo.MOB
		    + '</td>'
		    + '<tr><td><label for = "clgName">College Name</label></td><td>'
		    + data.userInfo.CI.CNM
		    + '</td>'
		    + '<tr><td><label for = "email">Email ID</label></td><td>'
		    + data.userInfo.EML + '</td>';
	    +'</table>' + '</fieldset>';
	    +' </form>' + '</div>';
	    UP.CallDialogBoxForViewUserInfo(dialogView, "USER INFO");
	} else {
	    var dialogView = ' <div id="dialog-form" title="College Info">'
		    + '  <div class="badger-left badger-success" value="'
		    + data.userInfo.CI.CNM
		    + '">'
		    + '  <form><fieldset id = "fieldset1">'
		    + '<table class="tarm table table-condenced table-bordered">'
		    + '<tr><td width="30%"><label for = "clgName">College Name</label></td><td>'
		    + data.userInfo.CI.CNM
		    + '</td></tr>'
		    + '<tr><td><label for = "clgCode">College Code</label></td><td>'
		    + data.userInfo.CI.CCD
		    + '</td>'
		    + '<tr><td><label for = "Address">College Address</label></td><td>'
		    + data.userInfo.CI.ADD + '</td>'
		    + '<tr><td><label for = "dist">District</label></td><td>'
		    + data.userInfo.CI.DST + '</td>'
		    + '<tr><td><label for = "state">State</label></td><td>'
		    + data.userInfo.CI.STE + '</td>';
	    +'</table>' + '</fieldset>';
	    +' </form>' + '</div>';
	    UP.CallDialogBoxForViewUserInfo(dialogView, "COLLEGE INFO");
	}

    };

    UP.CallDialogBoxForViewUserInfo = function(mesg, title) {

	try {
	    var ttl = 'USER INFO';
	    if (title == null || title == undefined || title.trim() == "") {
		ttl = 'USER INFO';
	    } else {
		ttl = title;
	    }
	    var innerHtmlText = mesg;

	    $('#myModalLabel').html(ttl);

	    $('#dlgBody').html('');

	    $('#dlgBody').html(innerHtmlText);
	    // $("#dlgBody table tr td").css("text-align", "center");

	    $('#dlgFoot').html(UP.getCloseButtonOnDialog());

	    $('#testdialog').modal({
		show : true
	    });

	} catch (e) {
	    var msg = "There was an error in execution of Code";
	    msg += "Error Description : " + e.message;
	    AH.showCustomAlert('Error', msg);
	}

    };

    // set image in profile pic
    UP.callOnloadProfilePicture = function() {
	$('.user-pic').prop('src', '../ajax/userProfile/get/ownProfilePic?')
		+ new Date().getTime();

	$('.changePhotoBtn').live("click",
			function() {

			    var mHtm = '<div id = "imageDialog"><form  method="post" action="../form/userProfile/updatePhoto" enctype="multipart/form-data" target="hiddenFrame">'
				    + 'Select File : <input type="file" name="file" required="true" id="profilePicfile"></input>'
				    + '</form>'
				    + '<span style="color:red" id="errorblk"></span></div>';
			    var mFoot = '<button type=button id="addDoc" class="btn btn-success" >Upload</button>'
				    + com.coep.vlab.userProfile
					    .getCloseButtonOnDialog();
			    $('#myModalLabel').html('Change Profile Picture');

			    $('#dlgBody').html(mHtm);

			    $('#dlgFoot').html(mFoot);

			    // .click(function(){
			    $('#addDoc')
				    .bind(
					    'click',
					    function() {

						/*
						 * 1.change the user's
						 * profile photo 2.before
						 * submit,check the valid file
						 * format 3.before submit,check
						 * the file size (shouldn't be >
						 * 5 MB)
						 */

						var fl = document
							.getElementById('profilePicfile');
						if (fl.files[0] == undefined
							|| fl.files[0] == null) {
						    $('#errorblk').html(
							    'No file Selected');
						} else {
						    $('#errorblk').html('');

						    var input, fileSize, fileType;
						    var max = 5;
						    input = document
							    .getElementById('profilePicfile');
						    fileSize = input.files[0].size / 1024 / 1024;
						    fileType = input.files[0].type;

						    if (fileType == "image/jpeg"
							    || fileType == "image/png"
							    || fileType == "image/bmp") {

						    } else {
							$("#errorblk")
								.html(
									"<br>Invalid file format");
							return false;
						    }

						    if (fileSize > max) {

							$("#errorblk")
								.html(
									"<br>Can not uplaod photo having size more than "
										+ max
										+ " MB<br>Your photo size is "
										+ fileSize
											.toFixed(2)
										+ "MB");
							return false;
						    }
						    $("#errorblk").html("");

						    $('#imageDialog form')
							    .submit();
						    com.coep.vlab.userProfile
							    .clearDialogContent();
						}
					    });

			    $("#testdialog").modal();

			});
    };

    UP.fetchUserInfo = function() {
	AH.fetchUserInfo('../ajax/userProfile/fetchUserInfo', 'GET');

    };

    UP.onViewUserDetails = function(data) {
	UP.data = data;

	if (data.MNM == null) {
	    data.MNM = "";
	}

	var roleText = '';
	for (var i = 0; i < data.RLE.length; i++) {

	    roleText += '<span class = "p2" title = "' + data.RLE[i].RD + '">'
		    + data.RLE[i].RN + ' </span> ,';
	}

	// //////////////
	var dialogTxt = '<div class="container"><div class="row well"><div class="form form-horizontal">'
		+ '<div class="col-md-12"><div class="panel-img panel"><img class="pic img-circle" src="../ajax/userProfile/get/ownProfilePic?'
		+ new Date().getTime()
		+ '" alt="..." style="cursor:pointer;">'
		+ '<div class="name"><small>'
		+ data.FNM
		+ ' '
		+ data.MNM
		+ ' '
		+ data.LNM
		+ '</small></div></div>'

		+ '<div class="col-md-10 col-md-offset-1" style="margin-top:50px;"><ul class="nav nav-tabs"><li class="active"><a href="#basic" data-toggle="tab" style="text-align:center;"><i class="fa fa-user"></i> User Info</a></li>'
		+ '</ul>'
		+ '<div id="myTabContent" class="tab-content"><div class="tab-pane active in" id="basic" style="padding:20px 10px"><div class="pull-right" style="margin-top:-20px; margin-right:-30px"><button type="button" id = "profileEditBtn" class="tempBtn btn btn-link"><i class="fa fa-lg fa-edit"></i></button></div>	'

		+ '<p title="Date of Birth">Date of Birth: <label>'
		+ data.DOB
		+ '</label></p>'
		+ '<p title="Mobile Number">Mobile Number: <label>'
		+ data.MOB
		+ '</label></p>'
		+ '<p title="Email Address">Email Address: <label>'
		+ data.EML
		+ '</label></p>'
		+ '<p title="College Name">College Name: <label>'
		+ data.CI.CNM
		+ '</label></p>'
		+ '<p title="Roles">Roles: <label>'
		+ roleText
		+ '</label></p></div>';

	dialogTxt += '</select></div></div>' + '</div>';

	var mbfoot = '<span id="errBlk" class="common-errors"></span>'
		+ com.coep.vlab.userProfile.getCloseButtonOnDialog();

	UP.CallDialogBoxForViewUserInfo(dialogTxt, "EDIT USER INFO");
	$('#cstate option[value="' + data.ST + '"]').prop('selected', true);
	// $('#editClg select#cstate').chosen();
	$('#dlgFoot').html(mbfoot);

	// / edit user info
	$("#profileEditBtn")
		.bind(
			"click",
			function() {

			    var dt = UP.data;

			    var dialogTxt = '<div class="form form-horizontal">'
				    + '<div class="form-group"><label class="col-lg-3">First Name</label><div class="col-lg-8"><input type="text" class="blk input-md form-control" id="fName" value= "'
				    + dt.FNM
				    + '" maxlength="100"/><span class="common-errors alert alert-danger"  Style="display:none;">Invalid First Name</span></div></div>'
				    + '<div class="form-group"><label class="col-lg-3">Middle Name</label><div class="col-lg-8"><input type="text" class="blk input-md form-control" id="mName" value= "'
				    + dt.MNM
				    + '" maxlength="100"/><span class="common-errors alert alert-danger"  Style="display:none;">Invalid Middle Name</span></div></div>'
				    + '<div class="form-group"><label class="col-lg-3">Last Name</label><div class="col-lg-8"><input type="text" class="blk input-md form-control" id="lName" value= "'
				    + dt.LNM
				    + '" maxlength="100"/><span class="common-errors alert alert-danger"  Style="display:none;">Invalid Last Name</span></div></div>'
				    + '<div class="form-group"><label class="col-lg-3">DOB</label><div class="col-lg-8"><input type="text" id="dob"  class="blk input-md form-control" value= "'
				    + dt.DOB
				    + '" maxlength="100"/></div></div>'
				    + '<div class="form-group"><label class="col-lg-3">Mobile No</label><div class="col-lg-8"><input type="text" id="mobile" class="blk numBox input-md form-control" value= "'
				    + dt.MOB
				    + '" maxlength="10"/><span class="common-errors alert alert-danger"  Style="display:none;">Invalid Mobile Number</span></div></div>'
				    + '<div class="form-group"><label class="col-lg-3">Email Id</label><div class="col-lg-8"><input type="text" id="email" readonly class="blk input-md form-control" value= "'
				    + dt.EML
				    + '" maxlength="100"/><span class="common-errors alert alert-danger"  Style="display:none;">Invalid Email Address</span></div></div></div>';

			    /*
			     * enctype='multipart/form-data is an encoding type
			     * that allows files to be sent through a POST.
			     * Quite simply, without this encoding the files
			     * cannot be sent through POST. multipart/form-data
			     * is used when a form requires binary data, like
			     * the contents of a file, to be uploaded
			     */
			    var mbfoot = '<span id="errBlk" class="common-errors"></span><button type="button" id = "submitBtn">OK</button>'
				    + com.coep.vlab.userProfile
					    .getCloseButtonOnDialog();

			    $('#myModalLabel').html('Update Basic Information');

			    $('#dlgBody').html(dialogTxt);

			    $('#dlgFoot').html(mbfoot);

			    $("#testdialog").modal();
			    /*
			     * TODO Function to open & customize the dialog box
			     * Allow only numeric value...disable character
			     * on Edit menu text-box
			     */
			    $(".numBox").bind(
				    "keypress",
				    function(evt) {
					var charCode = (evt.which) ? evt.which
						: evt.keyCode;
					var lax1 = charCode >= 58;
					var lax2 = charCode <= 47;
					if (lax1 || lax2 && charCode != 8
						&& charCode != 9
						&& charCode != 46
						&& charCode != 45) {
					    return false;
					}
				    });

			    /*
			     * 1.generate the json with updated user's info
			     * 2.Update the User table with these values
			     */

			    $("#submitBtn")
				    .bind(
					    "click",
					    function() {

						var valid = true;
						$(".blk")
							.each(
								function() {
								    var t = $(
									    this)
									    .val();
								    if (t
									    .trim() == '') {
									$(this)
										.parent()
										.parent()
										.find(
											'span')
										.css(
											'display',
											'block');
									valid = valid && false;

								    } else {
									$(this)
										.parent()
										.parent()
										.find(
											'span')
										.css(
											'display',
											'none');
									valid = valid && true;
								    }

								});

						if (UP
							.validateEmail($(
								"#email").val())) {
						    valid = valid && true;
						    $("#email").parent()
							    .parent().find(
								    'span')
							    .css('display',
								    'none');
						    valid = valid && true;
						} else {
						    valid = valid && false;
						    $("#email").parent()
							    .parent().find(
								    'span')
							    .css('display',
								    'block');
						}

						if (valid) {
						    var updatedVal = {
							"prefix" : $("#prefix")
								.val(),
							"fName" : $("#fName")
								.val(),
							"mName" : $("#mName")
								.val(),
							"lName" : $("#lName")
								.val(),
							"dob" : $("#dob").val(),
							"mobile" : $("#mobile")
								.val(),
							"email" : $("#email")
								.val()
						    };
						    com.coep.vlab.userProfile
							    .clearDialogContent();
						    $('#main-div').html("");
						    AH
							    .updateUserInfo(
								    '../ajax/userProfile/updateUserInfo',
								    'POST',
								    JSON
									    .stringify(updatedVal));
						}

					    });

			    /*
			     * TODO generate jquery datepicker from previous 65
			     * yrs to next 10 yrs from current year
			     */
			    $("#dob").datepicker({
				changeMonth : true,
				changeYear : true,
				yearRange : "-65: +10",
				dateFormat : "dd/mm/yy"
			    });

			    $("#testdialog select").chosen();
			});

    };

    //
    UP.disableDeleteUser = function() {
	try {
	    // AH.getAllUsers('getall/users', 'GET',approveRole);
	    AH.getUsersList('get/usersList', 'GET');
	} catch (e) {
	    var msg = "There was an error in execution of Code";
	    msg += "Error Description : " + e.message;
	    UP.showCustomAlert('Error', msg);
	}
    };

	UP.rederAllUsers = function(data) {
	//	console.log(data);
		$('#main-div').html('');
		$('#main-div')
				.html(
						'<span id="errBlk" class="clg-error common-errors alert alert-danger" Style="display : none" ></span>');
		$(".clg-error").css('display', 'none');

		$('#simDetails').hide();

		if (data.done == true) {
			var userTable = '';
			userTable += '<div id="div2"><table class="table table-hover table-condensed" style="font-size:15px;">';
			userTable += '<tr><td width="15%"><b>Sr.No.</b></td><td width="40%"><b>User Name</b></td><td width="50%"><b>Email Id</b></td><td width="30%"><b>Enable/Disable</b></td><td width="30%"><b>Delete</b></td><td width="30%"><b>Approve Role</b></td></tr>';
			for ( var i = 0; i < data.all.length; i++) {
				if (data.all[i].AL == true) {
					userTable += '<tr><td>'
							+ (i + 1)
							+ '</td><td><a href="javascript:com.coep.vlab.userProfile.onClickViewInfo(\''+ data.all[i].VID + '\',false);" title="Click here to see users Info">'
							+ data.all[i].FNM
							+ ' '
							+ data.all[i].MNM
							+ ' '
							+ data.all[i].LNM
							+ '</a></td><td>'
							+ data.all[i].EML
							+ '</td><td><button id="enableBtn" onClick="com.coep.vlab.userProfile.disableOrEnableUser(\''
							+ data.all[i].VID
							+ '\','
							+ data.all[i].AL
							+ ');"  type="button" class="btn btn-submit" >Enable</button></td>'
							+ '<td><button onClick="com.coep.vlab.userProfile.deleteDuplicateUser(\''
							+ data.all[i].VID
							+ '\');"  type="button" class="btn btn-danger">Delete</button></td>'
							+ '<td><button onClick="com.coep.vlab.userProfile.updateRole(\''+ data.all[i].VID + '\')(\''
							+ data.all[i].VID
							+ '\');"  type="button" class="btn">Approve Role</button></td>'
							+'</tr>';
				} else {
					userTable += '<tr><td>'
							+ (i + 1)
							+ '<td><a href="javascript:com.coep.vlab.userProfile.onClickViewInfo(\''+ data.all[i].VID + '\',false);" title="Click here to see users Info">'
							+ data.all[i].FNM
							+ ' '
							+ data.all[i].MNM
							+ ' '
							+ data.all[i].LNM
							+ '</a></td><td>'
							+ data.all[i].EML
							+ '</td><td><button id="disableBtn" onClick="com.coep.vlab.userProfile.disableOrEnableUser(\''
							+ data.all[i].VID
							+ '\','
							+ data.all[i].AL
							+ ');"  type="button" class="btn btn-submit" >Disable</button></td>'
							+ '<td><button onClick="com.coep.vlab.userProfile.deleteDuplicateUser(\''
							+ data.all[i].VID
							+ '\');"  type="button" class="btn btn-danger">Delete</button></td>'
							+ '<td><button onClick="com.coep.vlab.userProfile.updateRole(\''+ data.all[i].VID + '\')(\''
							+ data.all[i].VID
							+ '\');"  type="button" class="btn">Approve Role</button></td>'
							+'</tr>';
				}

			}

			userTable += '</table><span id="errBlk" class="clg-error common-errors alert alert-danger" Style="display : none" ></span></div>';

			$('#main-div').html(userTable);

	} else {

	    $(".clg-error").css('display', 'block');
	    $(".clg-error").html("No record found");

	}

    };

    UP.disableOrEnableUser = function(vlabId, flag) {
	var ms = '';
	// if ($("#dlgBody input:checkbox:checked").length <= 0) {
	// ms = 'You are Withdrawing all Authorities from user.<br/>Are you sure
	// to continue?';
	// } else {
	ms = 'Do you want to proceed?';
	// }

	var htmlText = '';
	htmlText += '';
	htmlText += '' + ms + '';

	htmlText += '';

	$('#cModalLabel').html('Confirmation');
	$('#cdlgBody').html(htmlText);
	$('#cdlgFoot').html(UP.getYesNoButtonOnDialog());
	$('#cdialog').modal({
	    show : true
	});

	$('#cfYes').bind(
		'click',
		function() {
		    var json = {
			"vlabId" : vlabId,
			"flag" : flag
		    };
		    AH.disableOrEnableUser('disableEnableUser/', 'POST', JSON
			    .stringify(json));
		});

	$('#cfNo').bind('click', function() {
	    UP.clearConfirmDialogContent();
	});

    };

    UP.deleteDuplicateUser = function(vlabId) {

	var ms = '';
	// if ($("#dlgBody input:checkbox:checked").length <= 0) {
	// ms = 'You are Withdrawing all Authorities from user.<br/>Are you sure
	// to continue?';
	// } else {
	ms = 'Do you want to Delete this User permanently?';
	// }

	var htmlText = '';
	htmlText += '';
	htmlText += '' + ms + '';

	htmlText += '';

	$('#cModalLabel').html('Confirmation');
	$('#cdlgBody').html(htmlText);
	$('#cdlgFoot').html(UP.getYesNoButtonOnDialog());
	$('#cdialog').modal({
	    show : true
	});

	$('#cfYes').bind('click', function() {
	    AH.deleteUser('deleteUser/', 'GET', vlabId);
	});

	$('#cfNo').bind('click', function() {
	    UP.clearConfirmDialogContent();
	});

    };

	// new
	UP.loadExperiment = function(data) {

		$("#swapdiv").html(data);
		var navBar = $("#user-div>ol.breadcrumb").html();
		var exptName = $('div.col-md-offset-1>legend');
		exptName.css("style", "margin-top:20px;");
		var parDiv = exptName.parent();

		var lax = $("#swapdiv>.container>.well").html();
		$("#swapdiv").html('');
		$("#main-div")
				.html(
						"<div class='row col-md-offset-0 col-md-12 '> <ol class='breadcrumb'>"
								+ navBar
								+ "</ol></div>"
								+ "<div class='col-md-10 col-md-offset-1' style=margin-top:40px;>"
								+ parDiv.html()
								+ "</div>"
								+ "<div  class='col-md-10 col-md-offset-1 well'>"
								+ lax + "</div>");

	};
  /* Added By Laxmikant */
    UP.myOnLoad = function() {
	UP.callOnloadProfilePicture();
	//UP.getMetaData();
    };

    UP.getMetaData = function() {
	$.ajax({
	    type : "get",
	    url : "../ajax/get/metadata",

	    contentType : 'application/json',

	    success : function(data) {
		if (data == null) {
		    alert("failed");
		} else {
		    UP.renderDepartmentsNew(data);
		}
	    },
	    error : function() {
		alert("error");
	    }
	});
    };

    UP.renderDepartmentsNew = function(data) {

    };

    UP.createData = function() {
	var html = '';
	html += '<div> <radio name = "choice" selected value=0>Department</radio> <br/><radio name = "choice"  value=1>Labs</radio> <br/><radio name = "choice"  value=2>Experiment</radio> <br/><radio name = "choice"  value=4>Tabs</radio></div>';
	html += '<div id ="renderdetails"></div>';

	$("#main-div").html(html);

	var dpartment = "";
	dpartment += "<div> Create Department </div>";
	dpartment += "<div>";
	dpartment += "Enter Department name : <input type='text' id='deptname' maxlength = '1000'/> <span class='errBlk' id='deptname-spn'/>";
	dpartment += "Enter Department number : <input type='text' id='deptno' maxlength = '2'/> <span class='errBlk' id='deptno-spn'/>";
	dpartment += "<button id='btnDeptSub'>Create</button> ";
	dpartment += "</div>";

	var labs = '';
	labs += '<div>Create Lab</div>';

	if (UP.deptlist.length() == 0) {
	    labs += 'No Department created. To create lab first create department.';
	} else {

	    labs += '<div>';
	    labs += "Select department name : <select type='text' id='seldept' >";

	    for (var i = 0; UP.deptlist.length(); i++) {
		var lpk=UP.deptlist[i];
		labs +='<option value="'+lpk["deptId"]+'">'+lpk["name"]+'</option>';
	    }

	    labs += "</select><span class='errBlk' id='seldept-spn'/>"

	    labs += "Enter Lab name : <input type='text' id='labname' maxlength = '1000'/> <span class='errBlk' id='labname-spn'/>";
	    labs += "Enter Lab no : <input type='text' id='labno' maxlength = '1000'/> <span class='errBlk' id='labno-spn'/>";
	    dpartment += "<button id='btnLabSub'>Create</button> ";
	    labs += '</div>';
	}
    }
    
    UP.resetPasswordAjax = function() {
    	AH.getTotalUsers('getall/totalUsers' , 'GET');
    }
    
    UP.resetPassword = function(data){
    	usersList = [];
    	
    	for(var i = 0; i<data.data.length; i++){
			usersList[i] = data.data[i].EML;
		}
    	
    	
    	var renderResetPassMailIdHtm = '';
    	renderResetPassMailIdHtm = '<div id="emailBlock"><label class="col-lg-2" style="font-size: 18px; width:12%; text-align:right;">Email Id : </label>'
    							+'<div class="col-lg-3"><ul id="selUsers"  class="tagit ui-widget ui-widget-content ui-corner-all "></ul></div>'
    							+'<button id="resetPass" class="btn btn-success" > Reset </button>'
    							+'</div>'
    							+'<div class="col-lg-3" id="sucsBlk"><span id="successBlk" class="nru-error common-errors alert" style="display: block; margin-top: 75px;">'
    							+'</span></div>';
    	
    	$("#main-div").html(renderResetPassMailIdHtm);
    	
    	 $('#selUsers').tagit({
				availableTags : usersList
			    });
    	 
    	 $("#resetPass").bind('click', function(){
    		 var userId = {};
    		 var userIds = $("#selUsers").tagit("assignedTags");
    		 userId = {
    				 "mailId" : userIds
    		 }

    		 if(userIds.length != 0){
    			 AH.getResetUserPass('reset/userPass' , 'POST', userId);
    		 }else{
    			 $("#successBlk").removeClass("alert-success").addClass("alert-danger").html("Please select Email Id to reset password");
    		 }
    	 });
    }
    
    UP.resetPassSuccess = function(data){
    	if(data.notFound.length == 0){
    		$("#successBlk").removeClass("alert-danger").addClass("alert-success").html(data.msg);
    	}else{
    		$("#successBlk").removeClass("alert-success").addClass("alert-danger").html("Fail to update password for :" + data.notFound);
    	}
    }
    
    
    function blink_text() {
	    $('.blink').fadeOut(1000);
	    $('.blink').fadeIn(200);
	}
	setInterval(blink_text, 2000);
	
	/*
	 * TODO Test module.
	 */
	
	UP.testModule = function() {
			AH.getAllDeptsForTest('getall/dept', 'GET');
		}
		
	UP.testModuleRender = function(data){	
		var selectTestOptionHtm = '';
		
		selectTestOptionHtm = '<div id="TitletestModeOpt"><span id="msgSpan"></span><br> <h1>Select Test Mode Option</h1><select id="testModeOpt" class="form-control">'
						+ '<option value="0">----- Select Option -----</option>'
						+ '<option value="1">Add PO</option>'
						+ '<option value="2">Add CO</option>'
						+ '<option value="3">Update question configuration</option>'
						+ '<option value="4">Upload Test Question</option>'
//						+ '<option value="5">Fetch Test</option>'
						+ '</select>'
						+ '</div>'
						+ '<div id="selectedModel"></div>'
						
						
		$('#main-div').html(selectTestOptionHtm);
		
		$("#testModeOpt").bind('change', function() {
			var id = $("#testModeOpt").val();
			
			if(id == 1){
				$("#msgSpan").html('');
				UP.addPO(data);
			}else if(id == 2){
				$("#msgSpan").html('');
				UP.addCO(data);
			}else if(id == 3){
				$("#msgSpan").html('');
				UP.updateTestConfig();
			}else if(id == 4){
				$("#msgSpan").html('');
				UP.uploadQuestions(data);
			}else if(id == 5){
				$("#msgSpan").html('');
				UP.getFetchQues(6,1,1,1);
			}else {
				$("#selectedModel").html('');
				$("#msgSpan").html("Please select the option");
			}
		});
	};
	
	
	UP.updateTestConfig = function(){
		testConfigHtm = '';
		
		testConfigHtm = '<div><span id="updateMsg"></span><h1>Update Question Configuration</h1><p>Enter value to update number of questions you need to fetch for pre and post test.</p><p>Questions for test : <input type="Text" id="quesCount"></p>'
					+ '<button id="btnUpdateConfig">Update</button>'
					+ '</div>'
			
		$('#selectedModel').html('');
		$('#selectedModel').html(testConfigHtm);
			
		
		$("#btnUpdateConfig").bind("click", function(){
			var quesCount = $("#quesCount").val();
			if(quesCount != ""){
				AH.updateTestConfig('updateTestConfig?quesCount='+ quesCount, 'POST');
			}else{
				showToast.show("Please enter test configuration in text field", false);
			}
		})
		
	}
	
	UP.addPO = function(data){
		var addPOHtm = '';
		dept = data.all;
		
		addPOHtm = '<div id="addPO"><span id="poAddMsg"></span>'
			     +'<h1>Add PO</h1>'
				+ '<p>Department  <select id="deptList" class="form-control">'
				+'<option value="-1"> ----- Select -----</option>'
			
				for (var id in dept) {
					addPOHtm+= '<option value="'+id+'">'+dept[id]+'</option>'
				}
			
			addPOHtm+= '</select></p>'
				+'<span class="errorMsg deptList-errorMsg" >Select the Department</span>'
				+ '<p>Enter PO Name :<input type="text" class="form-control" id="poName"/></p>'
				+'<span class="errorMsg poName-errorMsg" >Enter the PO name</span>'
				+ '</br><button id="btnAddPO">Add PO </button>'
				+ '</div>'
				
				$('#selectedModel').html('');
				$('#selectedModel').html(addPOHtm);
				
				 POValidation = function() {
					 var POValidationJSON ={};
					 flag = false;
					 
					    if($('#deptList').val() == -1) {
					       POValidationJSON["deptList"]= false;
					     
					    }else if($('#deptList').val() > -1) {
					    	 POValidationJSON["deptList"]= true;
					       }
					    
					    if($("#poName").val() == '') {
					    	  POValidationJSON["poName"]= false;
					    }else if($("#poName").val() != ''){
					    	  POValidationJSON["poName"]= true;
					    	$(".errorMsg").css("display" , "none");
					    }
					    
					    return POValidationJSON;
				}
				
				$("#deptList").bind('change', function() {
					var deptId = $('#deptList').val();
					AH.getLabOfThisDept('getall/labs?dept=' + deptId, 'GET');
				});
				
				
				$("#btnAddPO").bind("click", function(){
					var POValidationJSON = POValidation();
					var check = false;
					var count = 0;
					
					for (  var key in POValidationJSON){
						if(POValidationJSON[key] == true){
							count++;
							$("."+key+"-errorMsg").css("display" , "none");
							
							
						}else{
							$("."+key+"-errorMsg").css("display" , "block");
							$("."+key+"-errorMsg").addClass("errorMsg");
						}
					}
					
					if(count ==  Object.keys(POValidationJSON).length){

						var deptId = $('#deptList').val();
						var poName = $("#poName").val();
						
						poData = {};
						poData = {
								"deptId" : deptId,
								"poName" : poName
							}
						
						AH.addPOToLab('PO', poData, 'POST');
					}
				});
	}
	
	UP.addCO = function(data){
		var addCOHtm = '';
		dept = data.all;
		
		addCOHtm = '<div><span id="pocoMsg"></span>'
			    + '<h1>Add CO</h1>'
				+ '<p>Department  <select id="deptList" class="form-control">'
				+ '<option value="-1"> ----- Select -----</option>'
			
				for (var id in dept) {
					addCOHtm+= '<option value="'+id+'">'+dept[id]+'</option>'
				}
			
			addCOHtm+= '</select></p>'	
				+'<span class="errorMsg deptList-errorMsg" >Select the Department name</span>'
			
				+ '<p>Lab  <select id="labList" class="form-control"><option value="-1">----- select -----</option></select></p>' 
				+'<span class="errorMsg labList-errorMsg" >Select the Lab name</span>'
				+ '<p>Lab PO <select id="labPO" class="form-control"><option value="-1">----- select -----</option></select></p>'
				+'<span class="errorMsg labPO-errorMsg" >Select the Lab PO name</span>'
				+ '<p>Experiment  <select id="expList" class="form-control"><option value="-1"> ----- Select -----</option></select></p>'
				+'<span class="errorMsg expList-errorMsg" >Select the Experiment name</span>'
				+ '<p> Enter CO Name:<input type="text" class="form-control" id="coName"/></p>'
				+'<span class="errorMsg coName-errorMsg" >Enter the CO name</span>'
				+ '</br><button id="btnAddCO">Add CO </button>'
				+ '</div>'
				
				$('#selectedModel').html('');
				$('#selectedModel').html(addCOHtm);
				
				COValidation = function() {
					
					var COValidationJSON = {};
					 flag = false;
					 
					    if($('#deptList').val() == -1) {
					    	COValidationJSON["deptList"] = false;
					    }else if($('#deptList').val() > -1) {
					    	COValidationJSON["deptList"] = true;
					    }
					    if( $("#labList").val() == -1) {
					    	COValidationJSON["labList"] = false;
					    }else  if( $("#labList").val() > -1) {
					    	COValidationJSON["labList"] = true;
					    }
					    if($("#expList").val() == -1) {
					    	COValidationJSON["expList"] = false;
					    }else if($("#expList").val() > -1){
					    	COValidationJSON["expList"] = true;
					    }
					    if($("#labPO").val() == -1) {
					    	COValidationJSON["labPO"] = false;
					    }else  if($("#labPO").val() > -1){
					    	COValidationJSON["labPO"] = true;
					    }
					    if($("#coName").val() == '') {
					    	COValidationJSON["coName"] = false;
					    }else  if($("#coName").val() != ''){
					    	COValidationJSON["coName"] = true;
					    }

					    return COValidationJSON;
					    
				}


				$("#deptList").bind('change', function() {
					var deptId = $('#deptList').val();
					AH.getLabOfThisDept('getall/labs?dept=' + deptId, 'GET');
				});
				
				$("#labList").bind('change', function() {
					var labId = $('#labList').val();
					var deptId = $('#deptList').val();
					AH.getExpOfThisDeptLabWithPO('getall/expFromDeptLabWithPO', labId, deptId, 'GET');
				});
				
				
				$("#btnAddCO").bind("click", function(){
					var COValidationJSON = COValidation();
					var check = false;
					var count = 0;
					
					for (  var key in COValidationJSON){
						if(COValidationJSON[key] == true){
							count++;
							$("."+key+"-errorMsg").css("display" , "none");
							
							
						}else{
							$("."+key+"-errorMsg").css("display" , "block");
							$("."+key+"-errorMsg").addClass("errorMsg");
						}
						
						
					}
					if (count ==  Object.keys(COValidationJSON).length)
					{
					var deptId = $('#deptList').val();
					var labId = $("#labList").val();
					var expId = $("#expList").val();
					var poId = $("#labPO").val();
					var coName = $("#coName").val();
					
					coData = {};
					coData = {
							"deptId" : deptId,
							"labId" : labId,
							"expId" : expId,
							"poId" : poId,
							"coName" : coName
						}
					
					AH.addCOToLab('CO', coData, 'POST');
					}
				});
	}

	UP.uploadQuestions = function(data){
		dept = data.all;
		
		var questionUploadHtm = '';
		var wopt = 2;
		var ropt = 2;
		var noOfOpt = 0;
		
		questionUploadHtm = '<div id="quesUploadDiv">'
			+ '<h1>Upload Question</h1>'
			+ '<p>Department  <select id="deptList" class="form-control"><option value="0"> ----- Select -----</option>'
			for (var id in dept) {
				questionUploadHtm+= '<option value="'+id+'">'+dept[id]+'</option>'
			}
			
		questionUploadHtm+= '</select></p>'		
			+'<span class="errorMsg deptList-errorMsg">Select the Department name</span>'
			+ '<p>Lab  <select id="labList" class="form-control"><option value="0">----- select -----</option></select></p>' 
			+'<span class="errorMsg labList-errorMsg" >Select the Lab </span>'
			+ '<p>Experiment  <select id="expList" class="form-control"><option value="0"> ----- Select -----</option></select></p>'
			+'<span class="errorMsg expList-errorMsg" >Select the Lab Experiment name</span>'
			+ '<p>Experiment CO  <select id="expCOList" class="form-control"><option value="0"> ----- Select ----- </option></select></p>'
			+'<span class="errorMsg expCOList-errorMsg" >Select the Experiment CO </span>'
			+ '<p>Answer Type  <select id="anstype" class="form-control"><option value="0"> ----- Select -----</option>'
			+'<option value="1">Singular Correct Answer</option><option value="2">Multiple Correct Answers</option><option value="3">True or False</option>'
			+'</select></p>'
			+'<span class="errorMsg anstype-errorMsg" >Select the Answer Type </span>'
			+ '<p>Media Type  <select id="mtype" class="form-control"><option value="0"> ----- Select -----</option><option value="1">Text</option>'
			//+'<option value="1">Text</option>'
			+'<option value="2">Image</option>'
			+'<option value="3">Audio</option>'
			+'<option value="4">Video</option>'
			+'</select></p>'
			+'<span class="errorMsg mtype-errorMsg" >Select the Media Type  </span>'
			+ '<p>Complexity Level <select id="level" class="form-control"><option value="0"> ----- Select -----</option><option value="1">1</option><option value="2">2</option></select></p>'
			+'<span class="errorMsg level-errorMsg" >Select the Complexity Level  </span>'
			+ '<p>Test Type <select id="testType" class="form-control"><option value="0"> ----- Select -----</option><option value="1">Pre-Test</option><option value="2">Post-Test</option></select></p>'
			+'<span class="errorMsg testType-errorMsg" >Select the Test Type  </span>'
			+ '<p>Time <select id="timeMin" class="form-control" style="width:40%;"><option value="0"> ----- Minutes -----</option>'
			for(var i=0; i<=10; i++){
				questionUploadHtm+= '<option value="'+i+'">'+i+'</option>'
			}
		
		questionUploadHtm+='</select><select id="timeSec" class="form-control" style="width:40%;"><option value="0"> ----- Seconds -----</option>'
		
			for(var i=0 ; i <= 60; i++){
				questionUploadHtm+= '<option value="'+i+'">'+i+'</option>'
			}
		questionUploadHtm +='</select></p>'
			+'<span class="errorMsg time-errorMsg" >Select the Time in (Minutes & Seconds) </span>'
			+ '<p>Question <input type="text" class="form-control" id="qContent"/></p>'
			+'<span class="errorMsg qContent-errorMsg" >Enter The Question </span>'
			+ '<p id="mediaPart" hidden>Upload Image <input type="file" id="uploadImage" class="form-control" name="uploadImage"></p>'
			
			questionUploadHtm += '<span id="wrAns"></span>'							
							+ '</br><button id="addWrongOpt" style="margin-left: 16px;" hidden>+Add Option</button>'
							
							+ '<span id="rgtAns"></span>'
							+ '</br><button id="addRightOpt" style="margin-left: 16px;" hidden>+Add Option</button>'
							+ '<p><button id="uploadQues">Upload</button></p>'
							
							+ '<span id="resultMsg"></span>'
		 
		$('#selectedModel').html('');
		$('#selectedModel').html(questionUploadHtm);
		
		$("#anstype").bind('change', function(){
			
			if($("#anstype").val() == 1){
				wopt = 3;
				noOfOpt = 5;
				$("#addRightOpt").hide();
				$("#addWrongOpt").show();
				var htm =  '<p>Wrong Option1 <input type="text" class="form-control" id="wOpt1"/></p>'
				+'<span class="errorMsg wOpt1-errorMsg" >Enter The First option </span>'
				+ '<p>Wrong Option2 <input type="text" class="form-control" id="wOpt2"/></p>'
				+'<span class="errorMsg wOpt2-errorMsg" >Enter The Secound option </span>'
				+ '<p>Wrong Option3 <input type="text" class="form-control" id="wOpt3"/></p>'
				+'<span class="errorMsg wOpt3-errorMsg" >Enter The Third option </span>'
				
				$("#wrAns").html(htm);
				
				var htm1 =  '<p>Right Option1 <input type="text" class="form-control" id="rOpt1"/></p>'
				+ '<span class="errorMsg rOpt1-errorMsg" >Enter The Right Option </span>'
				
				$("#rgtAns").html(htm1);
			}else if($("#anstype").val() == 2){
				wopt = 1, ropt = 1, noOfOpt = 3;
				$("#addRightOpt").show();
				$("#addWrongOpt").show();
				var htm =  '<p>Wrong Option1 <input type="text" class="form-control" id="wOpt1"/></p>'
					+'<span class="errorMsg wOpt1-errorMsg" >Enter The First option </span>'
//					
					$("#wrAns").html(htm);
					
					var htm1 =  '<p>Right Option1 <input type="text" class="form-control" id="rOpt1"/></p>'
					+ '<span class="errorMsg rOpt1-errorMsg" >Enter The Right Option </span>'
					$("#rgtAns").html(htm1);
			}else if($("#anstype").val() == 3){
				wopt = 1, ropt = 1, noOfOpt = 3;
				$("#addRightOpt").hide();
				$("#addWrongOpt").hide();
				var htm =  '<p>Wrong Option1 <input type="text" class="form-control" id="wOpt1"/></p>'
					+'<span class="errorMsg wOpt1-errorMsg" >Enter The First option </span>'
//					
					$("#wrAns").html(htm);
					
					var htm1 =  '<p>Right Option1 <input type="text" class="form-control" id="rOpt1"/></p>'
					+ '<span class="errorMsg rOpt1-errorMsg" >Enter The Right Option </span>'
					$("#rgtAns").html(htm1);
			}
		})
		
		$("#mtype").bind('change', function(){
			if($("#mtype").val() == 2 || $("#mtype").val() == 3 ||$("#mtype").val() == 4){
				$("#mediaPart").show();
			}else{
				$("#mediaPart").hide();
			}
		});
		
		$("#addWrongOpt").bind("click", function(){
			if($("#anstype").val() == 1){
				wopt++;
				if(wopt <= 4 && noOfOpt <= 5){
					noOfOpt++;
					htm = '<p>Wrong Option'+wopt+' <input type="text" class="form-control" id="wOpt'+wopt+'"/></p>'
					+'<span class="errorMsg wOpt'+wopt+'-errorMsg">Enter the option </span>'
					
					$("#wrAns").append(htm);					
				}else{$("#addWrongOpt").hide();}
			}else if($("#anstype").val() == 2){
			wopt++;
			if(wopt <= 3 && noOfOpt <= 5){
				noOfOpt++;
				htm = '<p>Wrong Option'+wopt+' <input type="text" class="form-control" id="wOpt'+wopt+'"/></p>'
				+'<span class="errorMsg wOpt'+wopt+'-errorMsg">Enter the option </span>'
				
				$("#wrAns").append(htm);				
			}else{$("#addWrongOpt").hide();}
			}
		});
		
		$("#addRightOpt").bind("click", function(){
			ropt++;
			if(ropt <= 3 && noOfOpt <= 5){
				noOfOpt++;
				htm = '<p>Right Option'+ropt+' <input type="text" class="form-control" id="rOpt'+ropt+'"/></p>'
				+'<span class="errorMsg rOpt'+ropt+'-errorMsg">Enter the option </span>'
				$("#rgtAns").append(htm);
				
			}else
			$("#addRightOpt").hide();
		});

		$("#deptList").bind('change', function() {
			var deptId = $('#deptList').val();
			AH.getLabOfThisDept('getall/labs?dept=' + deptId, 'GET');
		});

		$("#labList").bind(
				'change',
				function() {
					var labId = $('#labList').val();
					var deptId = $('#deptList').val();
					AH.getExpOfThisDeptLab('getall/expFromDeptLab', labId,
							deptId, 'GET');
				});
		
		$("#expList").bind("change", function(){
			var deptId = $('#deptList').val();
			var labId = $('#labList').val();
			var expId = $("#expList").val();
			
			coList = {};
			coList = {
					"dept" : deptId,
					"lab" : labId,
					"exp" : expId
				}
			
			AH.getCOListFromSelectedExp('getExp/coList?deptId='+deptId+'&labId='+labId+'&expId='+expId, 'GET');
			
		});
		
		convertInSeconds = function (min,sec)
		{
			return((min*60+sec));
		}
		
		AddQueValidation =  function()
		{
			var AddQueValidationJSON = {};
			 flag = false;
			 
			    if($('#deptList').val() == 0) {
			    	AddQueValidationJSON["deptList"] = false;
			    }else  if($('#deptList').val() > 0){
			    	AddQueValidationJSON["deptList"] = true;
			    }
			    if( $("#labList").val() == 0) {
			    	  AddQueValidationJSON["labList"] = false;
			    }else if( $("#labList").val() > 0){
			    	AddQueValidationJSON["labList"] = true;
			    }
			    if($("#expList").val() == 0) {
			    	  AddQueValidationJSON["expList"] = false;
			    }else  if($("#expList").val() > 0) {
			    	AddQueValidationJSON["expList"] = true;
			    }
			    if($("#expCOList").val() == 0) {
			    	  AddQueValidationJSON["expCOList"] = false;
			    }else  if($("#expCOList").val() > 0){ 
			    	AddQueValidationJSON["expCOList"] = true;
			    }
			    if($("#anstype").val() == 0) {
			    	  AddQueValidationJSON["anstype"] = false;
			    }else  if($("#anstype").val() > 0){
			    	AddQueValidationJSON["anstype"] = true;
			    }
			    if($("#mtype").val() == 0) {
			    	  AddQueValidationJSON["mtype"] = false;
			    }else  if($("#mtype").val() > 0){
			    	AddQueValidationJSON["mtype"] = true;
			    }
			    if($("#level").val() == 0) {
			    	  AddQueValidationJSON["level"] = false;
			    }else  if($("#level").val() > 0){
			    	AddQueValidationJSON["level"] = true;
			    }
			    if($("#testType").val() == 0) {
			    	  AddQueValidationJSON["testType"] = false;
			    }else  if($("#testType").val() > 0){
			    	AddQueValidationJSON["testType"] = true;
			    }
			    if($("#timeMin").val() == 0 && $("#timeSec").val() == 0) {
			    	  AddQueValidationJSON["time"] = false;
			    }else  if($("#timeMin").val() > 0 && $("#timeSec").val() > 0){
			    	AddQueValidationJSON["time"] = true;
			    }
			    if($("#qContent").val() == '' ) 
			    {
			    	  AddQueValidationJSON["qContent"] = false;
			    }else if($("#qContent").val() != ''){
			    	AddQueValidationJSON["qContent"] = true;
			    }
			    if($("#wOpt1").val() == ''  )
			    {
			    	  AddQueValidationJSON["wOpt1"] = false;
			    }else  if($("#wOpt1").val() != ''  ){
			    	AddQueValidationJSON["wOpt1"] = true;
			    }
			    if($("#wOpt2").val() == '' )
			    {
			    	  AddQueValidationJSON["wOpt2"] = false;
			    }else  if($("#wOpt2").val() != '' ){
			    	AddQueValidationJSON["wOpt2"] = true;
			    }
			    if($("#wOpt3").val() == '' )
			    {
			    	  AddQueValidationJSON["wOpt3"] = false;
			    }else  if($("#wOpt3").val() != '' )
			    	{
			    	AddQueValidationJSON["wOpt3"] = true;
			    }
			    if($("#wOpt4").val() == '' )
			    {
			    	  AddQueValidationJSON["wOpt4"] = false;
			    }else if($("#wOpt4").val() != '' ){
			    	AddQueValidationJSON["wOpt4"] = true;
			    }
			    if($("#rOpt1").val() == ''  )
			    {
			    	  AddQueValidationJSON["rOpt1"] = false;
			    }else   if($("#rOpt1").val() != ''  ){
			    	AddQueValidationJSON["rOpt1"] = true;
			    }
			    return AddQueValidationJSON;
			    
		}
		
		$('#uploadImage')
		.change(
				function() {
					(document.getElementById("uploadImage").files.length > 0) ? isFileLinked = 1
							: isFileLinked = 0;
					checkLength(this, 'filetype');
				});
		
		
		var mediaId = "";
		checkLength = function(inputValue, param2) {
			inputVal = $(inputValue).val();
			inputVal = $.trim(inputVal);
			if (param2 == 'filetype') {
				if (isFileLinked == 1) {
					
					var file = $('#uploadImage');

					var filename = $.trim(file.val());

					var formData = new FormData();
					formData.append('file', $('input[type=file]')[0].files[0]);
					
					if (filename != "" || filename.length != 0) {
//					var ext = filename.split('.').pop();
//					var fileSize = ($('input[type=file]')[0].files[0].size / 1024 / 1024)
//					var valid_extensions = /(\.mp4|\.mpeg|\.avi)$/i;
//					if(ext == "mp4" || ext == "avi" || ext == "mpeg"){
					if (filename != null || filename != undefined)
//						if (valid_extensions.test(filename) && fileSize <= CW.maxSizeVideo) {	
							
						mediaId = quesMediaFileUplaod("question/media",
								"POST", formData);
//						} 
//						else {
//							showToast.show('Please make sure that your file size must be less than ' 
//									+ CW.maxSizeVideo + ' MB and in (mp4/mpeg/avi) format', false);
//						}
//					}
//					else if(fileSize <= CW.maxSizeDoc){
//						var mediaId = CW.chatMediaFileUplaod(ST.baseURL + "chat/media",
//								"POST", formData, CW.UserGroupId);
//					}else {
//						showToast.show('Please make sure that your file size must be less than ' 
//								+ CW.maxSizeDoc + ' MB', false);
//					}
						
				}
				}
			}
		};
		
		quesMediaFileUplaod = function(url, methodType, formData) {

			$.ajax({
				url : url,
//				beforeSend : function() {
//				AH.animateAjaxLoaderStart('loading data.. please wait..');
//				},
				type : methodType,
				data : formData,
				enctype : "multipart/form-data",
				processData : false,
				contentType : false,
				dataType : 'json',
			}).done(function(data) {
				
				if (data.done == false) {
					//console.log('File upload failed ...');
				}else{
					mediaId = data.URL;
					//console.log('File uploaded ...' + id);
				}
			}).complete(function() {
//				AH.animateAjaxLoaderStop();
			});

			return mediaId;
		}
		
		
		$("#uploadQues").bind('click', function(){
			var AddQueValidationJSON = AddQueValidation();
			var check = false;
			var count = 0;
			
			for (  var key in AddQueValidationJSON){
				if(AddQueValidationJSON[key] == true){
					count++;
					$("."+key+"-errorMsg").css("display" , "none");
					
					
				}else{
					$("."+key+"-errorMsg").css("display" , "block");
					$("."+key+"-errorMsg").addClass("errorMsg");
				}
				
				
			}
			if (count ==  Object.keys(AddQueValidationJSON).length)
			{	
				
				var dept = $("#deptList").val();
				var lab = $("#labList").val();
				var exp = $("#expList").val();
				var ansType = $("#anstype").val();
				var mType = $("#mtype").val();
				var level = $("#level").val();
				var coId = $("#expCOList").val();
				var minute = $("#timeMin").val();
				var second = $("#timeSec").val();
				var testType = $("#testType").val();
				var qContent = $("#qContent").val();
//				var mediaURL = mediaId;
				var time = convertInSeconds(parseInt(minute), parseInt(second));
				
				var wop = [];
				for(var l=1; l <= wopt; l++){
					if($("#wOpt"+l).val() != undefined){
						wop.push({"content" : $("#wOpt"+l).val(), "isRightAnswer": false});
						wop.push();
					}
				}
				
				var rop = [];
				if($("#anstype").val() == 1){
					rop.push({"content" : $("#rOpt1").val(), "isRightAnswer": true});
				}else if($("#anstype").val() == 2){
					for(var l=1; l <= ropt; l++){
						if($("#rOpt"+l).val() != undefined){
							rop.push({"content" : $("#rOpt"+l).val(), "isRightAnswer": true});
							rop.push();
						}
					}
				}else if($("#anstype").val() == 3){
					for(var l=1; l <= ropt; l++){
						if($("#rOpt"+l).val() != undefined){
							rop.push({"content" : $("#rOpt"+l).val(), "isRightAnswer": true});
							rop.push();
						}
					}
				}
				
				var uploadQuesJSON = {};
				var woption = {};
				
				uploadQuesJSON.dept = dept;
				uploadQuesJSON.lab = lab;
				uploadQuesJSON.exp = exp;
				uploadQuesJSON.coId = coId;
				uploadQuesJSON.ansType = ansType;
				uploadQuesJSON.mType = mType;
				uploadQuesJSON.level = level;
				uploadQuesJSON.time = time;
				uploadQuesJSON.qContent = qContent;
				uploadQuesJSON.wOption = wop;
				uploadQuesJSON.rOption = rop;
				uploadQuesJSON.testType = testType;
				uploadQuesJSON.mediaURL = mediaId;
				
				AH.uploadQuesToDatabase('question/uploadQues/' , JSON.stringify(uploadQuesJSON), 'POST');
			}
		});
		
	}

	UP.renderLabOfSelectedDept = function(data) {
		labs = data.all;
		var renderLab = '';
		renderLab =  '<option value="-1">----- select -----</option>'
		for ( var id in labs) {
			renderLab += '<option value="' + id + '">' + labs[id] + '</option>'
		}
		$("#labList").html(renderLab);
	}

	UP.renderExpOfSelectedDeptLab = function(data) {
		exp = data.all;
		var renderExp = '';
		renderExp += '<option value="-1">----- select -----</option>'
		for ( var id in exp) {
			renderExp += '<option value="' + id + '">' + exp[id] + '</option>'
		}
		$("#expList").html(renderExp);
	}
	
	UP.addPOTodropDown = function(data){
		if(data.done == true){
			$("#pocoMsg").html('');
			var renderPO = '';
			renderPO += '<option value="-1">----- select -----</option>'
			for (var i=0; i < data.PO.length; i++) {
				renderPO += '<option value="' + data.poId[i] + '">' +data.PO[i] + '</option>'
			}
			$("#labPO").html(renderPO);
		}else{
			showToast.show(data.msg ,data.done);
		}
		UP.renderExpOfSelectedDeptLab(data.exp);
	}
	
	UP.addCoToexpCOList = function(data){
		if(data.done == true){
			$("#resultMsg").html('');
			var renderCO = '';
			renderCO += '<option value="-1">----- select -----</option>'
			for (var i=0; i < data.COID.length; i++) {
				renderCO += '<option value="' + data.COID[i] + '">' +data.CONAME[i] + '</option>'
			}
			$("#expCOList").html(renderCO);
		}else{
			$("#resultMsg").html(data.msg);
		}
	}
	
	
	UP.clearQuesField = function(data){
		if(data.done == true){
			showToast.show(data.msg ,data.done);
			
			$("#deptList").val(0);
			 $("#labList").val(-1);
			$("#expList").val(-1);
			 $("#anstype").val(-1);
			 $("#mtype").val(0);
			 $("#level").val(0);
			 $("#expCOList").val(0);
			$("#timeMin").val(0);
			 $("#timeSec").val(0);
			 $("#testType").val(0);
			 $("#qContent").val('');
			 $("#wOpt1").val('');
			 $("#wOpt2").val('');
			 $("#wOpt3").val('');
			 $("#wOpt4").val('');
			 $("#rOpt1").val('');
			
		}else{
			showToast.show(data.msg ,data.done);
		}
	}

	UP.getFetchQues = function(dept, lab, exp, testType){
		
		html = '';
		
		html = '<div id="quesDiv">'
			+ '<div id="quesSpan"></div>'
			+ '</div>'
			
		$('#selectedModel').html('');
		$('#selectedModel').html(html);
		
			AH.getFetchQuesFromThisExp('question/fetchQues/', dept, exp, lab, testType, 'GET');
		
	}
	
	
	UP.renderQues = function(data, testType){
//		console.log(data);
		if(testType == 1){
			$('#btnPreTest').hide();
			alertify.alert("You can not start post test while pre test is running !!");
			$('#post').css('pointer-events','none');
		}else{
			$('#btnPostTest').hide();
			alertify.alert("You can not start pre test while post test is running !!");
			$('#pre').css('pointer-events','none');
		}
		
		
		htm = ''
		var count = 1;
		
		htm = '<div class="outer-div">'
			if(testType == 1){
				htm += '<span id="timeClock" class="time-counter"></span>'
					+ '<p id="timerMsg"></p>'
			}else{
				htm += '<span id="timeClock1" class="time-counter"></span>'
					+ '<p id="timerMsg1"></p>'
			}
			
		for(var i=0; i< data.ques.length; i++){
			if(count <= data.QCNT){

				htm += '<div><span class="" style="background-color:#076f9a; padding:5px 10px; color:#fff; font-size: 20px; border-radius: 10px; font-family: Cambria, Georgia, serif;" > Question No '+ (i+1) + '</span>'
				if(data.ques[i].URL != undefined){
					if(data.ques[i].MEDIATYPE == 2){
					ImageSrc = 'question/getImage?mediaID='+ data.ques[i].URL;
					htm += '<div style="padding:10px 0 0 20px; font-family: Cambria, Georgia, serif; color:#000;"><p id="'+data.ques[i].QID+'">'+ data.ques[i].QCONTENT + '</p>'
					       + '<img src='+ImageSrc+' id="imgQues" width="600px" height="500px">'
					}else if(data.ques[i].MEDIATYPE == 3){
						audioSrc = 'question/getImage?mediaID='+ data.ques[i].URL;
						htm += '<div style="padding:10px 0 0 20px; font-family: Cambria, Georgia, serif; color:#000;"><p id="'+data.ques[i].QID+'">'+ data.ques[i].QCONTENT + '</p>'
							+ '<audio controls> '
							+ '<source src='+audioSrc+' type="audio/ogg"> '
							+ '<source src='+audioSrc+' type="audio/mpeg">'
							+ 'Your browser does not support the audio element.'
							+ '</audio>'
						
					}else if(data.ques[i].MEDIATYPE == 4){
						videoSrc = 'question/getImage?mediaID='+ data.ques[i].URL;
						htm += '<div style="padding:10px 0 0 20px; font-family: Cambria, Georgia, serif; color:#000;"><p id="'+data.ques[i].QID+'">'+ data.ques[i].QCONTENT + '</p>'
							+ '<video width="320" height="240" controls>'
							+ '<source src='+videoSrc+' type="video/mp4">'
							+ '<source src='+videoSrc+' type="video/ogg">'
							+ 'Your browser does not support the video tag.'
							+ '</video>'
					}
				}else{
					htm += '<div style="padding:10px 0 0 20px; font-family: Cambria, Georgia, serif; color:#000;"><p id="'+data.ques[i].QID+'">'+ data.ques[i].QCONTENT + '</p>'
				}
				
				if(data.ques[i].ANSTYPE == 1){
					for(var j=0; j< data.ques[i].options.length; j++){
						htm += '<p style="padding:0 0 0 30px; font-family: Cambria, Georgia, serif; color:#424141;"><input type="radio" id="'+data.ques[i].optAnsId[j]+'" name="'+data.ques[i].tiId[j]+'" style="margin-right:5px">'
						+ data.ques[i].options[j].toString().split('#$', 1)
						+ '</p>'
					}
				}else if(data.ques[i].ANSTYPE == 2){
					for(var j=0; j< data.ques[i].options.length; j++){
						htm += '<p style="padding:0 0 0 30px; font-family: Cambria, Georgia, serif; color:#424141;"><input type="checkbox" id="'+data.ques[i].optAnsId[j]+'" name="'+data.ques[i].tiId[j]+'" style="margin-right:5px">'
						+ data.ques[i].options[j].toString().split('#$', 1)
						+ '</p>'
					}
				}else if(data.ques[i].ANSTYPE == 3){
					for(var j=0; j< data.ques[i].options.length; j++){
						htm += '<p style="padding:0 0 0 30px; font-family: Cambria, Georgia, serif; color:#424141;"><input type="radio" id="'+data.ques[i].optAnsId[j]+'" name="'+data.ques[i].tiId[j]+'" style="margin-right:5px">'
						+ data.ques[i].options[j].toString().split('#$', 1)
						+ '</p>'
					}
				}
				htm += '</div>'
				count++;
			}	
		}
		
		
		htm+= '<button id="btnSubmitTest">Submit</button></div>'
		
			if(testType == 1){
				$("#quesSpan").html(htm);
			}else{
				$("#quesSpan1").html(htm);
			}
		
//		funBtnImg = function(url){
//			console.log("getURL");
//			$("#imgQues").attr("src", '/question/getImage?mediaID='+url);
//		};
		
		UP.startTimer(data.TIME, testType);
		
		$("#btnSubmitTest").bind("click", function(){

			$('#post').css('pointer-events','');
			$('#pre').css('pointer-events','');
			var qcnt = data.QCNT;
			var totQues = data.ques.length;
			var cnt = 0;
			
			if(qcnt > totQues){
				cnt = totQues;
			}else{
				cnt = qcnt;
			}
			
			givenAnsJSON = {};			
			givenAnsArr = [];
			
			for(var i=0; i<cnt ;i++){
				if(data.ques[i].ANSTYPE == 1 || data.ques[i].ANSTYPE == 3){
				for(var j=0; j< data.ques[i].options.length; j++){
					
						id = $('input[type=radio][id='+data.ques[i].optAnsId[j]+']:checked').attr('name');
						isChecked = $('input[type=radio][name='+data.ques[i].tiId[j]+']:checked').attr('name')?true:false;
					
					if(id != undefined){
						var givenAns = data.ques[i].options[j].toString().split('#$',2);
						ansJSON = {};
						
						ansJSON = {
								"tiId" : id,
								"ansStatus" : givenAns[1] ,
								"ansId" : data.ques[i].optAnsId[j].toString(),
								"isChecked" : isChecked
								}
						givenAnsArr.push(ansJSON);
					}
				}
				}else if(data.ques[i].ANSTYPE == 2){
					var arr1 = [];
					var arr = [];
//					var ansID = [];
					
					for(var k=0; k< data.ques[i].options.length; k++){
						id = $('input[type=checkbox][id='+data.ques[i].optAnsId[k]+']:checked').attr('name');
						isChecked = $('input[type=checkbox][name='+data.ques[i].tiId[k]+']:checked').attr('name')?true:false;
						
						if(id != undefined){
							var tiId =  id;
							var ansID = data.ques[i].optAnsId[k].toString();
							var isCheckedStatus = isChecked;
							givenAnsAr = data.ques[i].options[k].toString().split('#$',2);
							
							if(givenAnsAr[1] == "true"){
								arr.push(givenAnsAr[0]);
							}
						}
						
						givenAnsAr1 = data.ques[i].options[k].toString().split('#$',2);
						if(givenAnsAr1[1] == "true"){
							arr1.push(givenAnsAr1[0]);
						}
					}
					
//					console.log(arr.length, arr1.length);
					if(arr.length == arr1.length){
						ans = "true";
					}else{
						ans = "false";
					}
					
					if(tiId != undefined){
						ansJSON = {};
						ansJSON = {
								"tiId" : tiId,
								"ansStatus" : ans ,
								"ansId" : ansID,
								"isChecked" : isCheckedStatus
								}
						givenAnsArr.push(ansJSON);
					}
				}
			}
			
			givenAnsJSON = {
					"givenAns" : givenAnsArr,
					"tisId" : data.tisId
					}
			
//			console.log(givenAnsJSON);
			AH.submitAnsToDatabase('submit/test/', JSON.stringify(givenAnsJSON), 'POST');
		});
		
	}
	
	
	/*
	 * TODO Test module Result
	 */
	
	UP.testResults = function(){
		AH.getAllDeptsForTestResult('getall/dept', 'GET');
	}
	
	
	UP.testResultsRender = function(data){
	dept = data.all;
	var testResultHtm = '';
	
	testResultHtm = '<div id="TestResult">'
		+ '<h1>Test Result</h1>'
		+ '<span id="resultMsg"></span>'
		+ '<p>Department  <select id="deptList" class="form-control"><option value="-1"> ----- Select -----</option>'
		for (var id in dept) {
			testResultHtm+= '<option value="'+id+'">'+dept[id]+'</option>'
		}
		
	testResultHtm+= '</select></p>'		
		+ '<p>Lab  <select id="labList" class="form-control"><option value="-1">----- select -----</option></select></p>' 
		+ '<p>Experiment  <select id="expList" class="form-control"><option value="-1"> ----- Select -----</option></select></p>'
		+ '<p>Date <input type="text" required id="filterDate" class="form-control" placeholder="DD/MM/YYYY" autocomplete="on"></span></p>'
		+ '<button id="btnGetTestRes">Get Result</button>'
		+ '<div id="resultData"> </div>'
		+ '</div>'
	
	
	$('#main-div').html(testResultHtm);
	
	$("#filterDate").datepicker({
	    yearRange : "-10: +10",
	    changeMonth : true,
	    changeYear : true,
	    dateFormat : "dd/mm/yy",
	    maxDate : 1
	});
	
	
	$("#deptList").bind('change', function() {
		var deptId = $('#deptList').val();
		AH.getLabOfThisDept('getall/labs?dept=' + deptId, 'GET');
	});
	
	$("#labList").bind('change', function() {
		var labId = $('#labList').val();
		var deptId = $('#deptList').val();
		AH.getExpOfThisDeptLab('getall/expFromDeptLab', labId, deptId, 'GET');
	});
	
	
	$("#btnGetTestRes").bind("click", function(){
		var deptId = $('#deptList').val();
		var labId = $('#labList').val();
		var expId = $('#expList').val();
		var filterDate = 0;
		if($("#filterDate").val() == ""){
			filterDate = -1;
		}else{
			filterDate = $("#filterDate").datepicker("getDate").getTime();
		} 
				
		filterJson = {};
		
		filterJson = {
				"dept" : $("#deptList option:selected").text(),
				"deptId" : $("#deptList option:selected").val(),
				"lab" : $("#labList option:selected").text(),
				"labId" : $("#labList option:selected").val(),
				"exp" : $("#expList option:selected").text(),
				"expId" : $("#expList option:selected").val()
			}
		
		AH.getTestResForDeptLabExp('result/selectedExp?deptId='+deptId+'&labId='+labId+'&expId='+expId+'&filterDate='+filterDate, filterJson, 'GET');		
	});
	
	
	UP.renderResultTOStudent = function(data, filterJson) {
		
		renderResultHtm = '';
		
		for(var i=0; i < data.result.length; i++){
				if(filterJson.deptId != -1){
					renderResultHtm += '<p>Department : ' + filterJson.dept + '</p>'
				}else{
					renderResultHtm += '<p>Department : ' + data.result[i].dept + '</p>'
				}
				if(filterJson.labId != -1){
					renderResultHtm += '<p>Lab : ' + filterJson.lab + '</p>'
				}else{
					renderResultHtm += '<p>Lab : ' + data.result[i].lab + '</p>'
				}
				
				if(filterJson.expId != -1){
					renderResultHtm += '<p>Experiment : ' + filterJson.exp + '</p>'
				}else{
					renderResultHtm += '<p>Experiment : ' + data.result[i].exp + '</p>'
				}
			renderResultHtm += '<p>Test Type : '
							if(data.result[i].testType == 1){
								renderResultHtm += 'Pre - Test'
							}else{
								renderResultHtm += 'Post - Test'
							}
		renderResultHtm += '</p><p>Test Date : '
						+ data.result[i].testDate
						+ '</p><p>Total Questions : '
						+ data.result[i].totQues
						+ '</p><p>Attempted Questions : '
						+ data.result[i].attempted
						+ '</p><p>Total given correct answers : '
						+ data.result[i].totCorrect
						+ '</p><p>Percentage : '
						+ data.result[i].percent
						+ '</p><hr>'
		}
		
		
		$("#resultData").html(renderResultHtm);
		}
	}
	
	UP.renderResultForCurrentTest = function(data) {
		
		renderResultHtm = '';
		
		renderResultHtm += '</p><section style="border:1px solid #666; padding:10px; font-size:20px; font-weight:bold; font-family: "Open Sans Condensed","Arial Narrow", serif; "><p>Test Type : '
							if(data.result.testType == 1){
								renderResultHtm += '<b>Pre - Test Result</b>'
							}else{
								renderResultHtm += '<b>Post - Test Result</b>'
							}
		renderResultHtm += '</p><hr style="border:1px solid #05938f"></hr><p><b>Test Date :</b> '
						+'<i style="color:#f52411">'+ data.result.testDate +'</i>'
						+ '</p><p><b>Total Questions :</b> '
						+ '<i style="color:#f52411">'+data.result.totQues +'</i>'
						+ '</p><p><b>Attempted Questions : </b>'
						+ '<i style="color:#f52411">'+data.result.attempted +'</i>'
						+ '</p><p><b>Total given correct answers :</b> '
						+ '<i style="color:#f52411">'+data.result.totCorrect +'</i>'
						+ '</p><p><b>Percentage :</b> '
						+ '<i style="color:#f52411">'+data.result.percent +'</i>'
						+ '</p></section><hr>'
		
		
		if(data.result.testType == 1){
			$("#quesSpan").html(renderResultHtm);
		}else{
			$("#quesSpan1").html(renderResultHtm);
		}
	}	
	
	//TODO startTimer
	UP.startTimer = function(duration, testType) {

		var timer = duration;
		var minutes = 0, interval = 0;
		
		interval = setInterval(function() {
			
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);

			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
			if(minutes < 2){
				var html = '';
				html = '<span>'+minutes+'</span> : <span>'+ seconds +'</span>';
				if(testType == 1){
					$("#timeClock").html(html);
				}else{
					$("#timeClock1").html(html);
				}
//				var time = (parseInt(minutes) * 60) + parseInt(seconds);
				if(seconds < 59){
					if(testType == 1){
						$("#timerMsg").text('Hurry up !! ' +minutes + ":" + seconds + ' time is left');
					}else{
						$("#timerMsg1").text('Hurry up !! ' +minutes + ":" + seconds + ' time is left');
					}
				}
			}else{
				html ='';
				html = '<span>'+minutes+'</span> : <span>'+ seconds +'</span>';
				if(testType == 1){
						$("#timeClock").html(html);
					}else{
						$("#timeClock1").html(html);
					}
//				var time = (parseInt(minutes) * 60) + parseInt(seconds);
			}
			if (--timer < 0) {
				timer = 0;
				clearInterval(interval);
				$("#btnSubmitTest").click();
			}
		}, 1000);
}

	

})(com.coep.vlab.ajaxHandler, com.coep.vlab.userProfile,
	com.coep.vlab.feedback, com.coep.template);