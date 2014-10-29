'use strict'
/* services */

var userInfo;
var qaServices = angular.module('qaServices', []);

qaServices.factory('QAScriptFactory', function($http, $q, $window) {
	var factory = {};
	factory.getSheetData = function() {
		return $http.get("/Angular_Jersy_Mongo_Tomcat_App/rest/qascript/get");
	};
	factory.postSheetData = function(scriptData) {
		return $http.post("/ngdemo/rest/qascript", scriptData);
	};

	return {
		register : function(user, success, error) {

			$http.post('/Angular_Jersy_Mongo_Tomcat_App/rest/qascript/post',
					user).success(function(res) {
				success();
			}).error(error);
		},
		login : function(user, success, error) {
			// var deferred = $q.defer();
			console.log(JSON.stringify(user));
			$http.post("/Angular_Jersy_Mongo_Tomcat_App/rest/qascript/login",
					user).success(function(result) {
						console.log(result.data+" :result ");
				userInfo = {
					//accessToken : result.data.access_token,
					//email : result.data.email
				};
				success();
				$window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
				// deferred.resolve(userInfo);
			}).error(error);

			// return deferred.promise;
		}
	}


	factory.getUserInfo = function() {
		return userInfo;
	}

	return factory;
});
