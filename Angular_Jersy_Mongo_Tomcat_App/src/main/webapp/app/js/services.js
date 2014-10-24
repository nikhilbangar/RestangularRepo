'use strict'
/*services*/
var qaServices = angular.module('qaServices', []);

qaServices.factory('QAScriptFactory' , function ($http) {
	var factory={};
	factory.getSheetData=function(){
		return $http.get("/ngdemo/rest/qascript");
	};
	factory.postSheetData=function(scriptData){
		return $http.post("/ngdemo/rest/qascript", scriptData);
	};
	return factory;
	/*return $resource('/ngdemo/rest/qascript', {});*/
	
	/*return $resource('/ngdemo/rest/qascript' , {} , {
		post : {
					method : 'POST'
				}	
		});*/
});