/*!
 * @author: Laxmikant Kumbhare
 * @Date: 19 Sep 2013
 * Class for handling html template operations 
 * Dependency on UnderScore
 * 
 * Syntax for replaceable   text is {%= <propery_name>%}  
 * 
 * 
 * 
 */
(function(scope, underScore) {

	underScore.templateSettings = {
		evaluate:/\{%([\s\S]+?)%\}/g,interpolate:/\{%=([\s\S]+?)%\}/g
	};
	
	/**
	 * Method to interpolate HTML templates
	 * 
	 * 
	 * @param boilerplate : html template string 
	 * @param data : object holding data to be replaced in html template 
	 * @return : interpolated html string  
	 * @throws Exception
	 */
	scope.interpolate = function(bolilerPlateText, data) {
    	var interPolatedString = bolilerPlateText;
		try {
			interPolatedString =  underScore.template(bolilerPlateText, data);
		} catch(e) {
			throw "Error which processing html tmplate cause : "+e.message;
		}
		return interPolatedString;
	};
	
})(com.coep.template, _);