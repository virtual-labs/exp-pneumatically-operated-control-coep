
	var LGf = 0.50;
	var dInch = 3;
	var sumLK = (1.5 * Math.pow((1 - ((3*3)/(8*8))),2)).toFixed(2);
	var LN2 = 890;
	var fpValLiquidFinal = 0;
	var FinalCVFlag  = 0;
	var LCv = 121;
	var liquidFlag = 0;
	var CvLiquidFlag = 0;
	var NPSVal = 0;
//	var CDInch = 8;
	var LN1 = 1;
	var deltapL = 0;
	
	var volumeRateOfFlowLiquid = {
					
			"0" : "400",
			"1" : "500",
			"2"	: "600",
			"3" : "700",
			"4" : "800",
			"5" : "900",
			"6"	: "1000"
	};
	
	var LP1 = {
			
			"0" : "200",
			"1" : "400",
			"2" : "600",
			"3"	: "800",
			"4" : "1000",
			
	};
	
	var LP2 = {
			"0" : "200",
			"1" : "400",
			"2" : "600",
			"3"	: "800",
			"4" : "1000",
			
	};
	
	var LT1 = {
			"0" : "50",
			"1" : "100",
			"2" : "150",
			"3"	: "200",
			"4" : "250",
			
	};
	
	
	var LinearCharacteristicsArrayLiquid = [
			6.53,
			14.2,
			17.4,
			33.4,
			56.2,
			82.7,
			121,
			203,
			808,
			957
	];
	
	var LinearCharacteristicsJsonLiquid = {
			
		"6.53" : "0.5",
		"14.2" : "0.75",
		"17.4" : "1.25",
		"33.4" : "1.5",
		"56.2" : "2",
		"82.7" : "2.5",
		"121"  : "3",
		"203"  : "4",
		"808"  : "6",
		"957"  : "8"
	};
	
