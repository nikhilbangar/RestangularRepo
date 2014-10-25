"use strict"
var qaApp = angular.module('qaApp',['ui.router','ngResource','wijspread','ui.bootstrap','dialogs','qaControllers','qaServices']);
qaApp.config(['$stateProvider','$urlRouterProvider',
    function ($stateProvider,$urlRouterProvider) {
    
	$urlRouterProvider.otherwise('/modules');
	
	$stateProvider.
        state('login', {
        	url: '/login',
            templateUrl: 'views/login.html'
        }).
        state('signup', {
        	url: '/signup',
            templateUrl: 'views/signup.html'
        }).
        state('modules', {
        	url: '/modules',
            templateUrl: 'views/modules.html'
        });
	
}]);