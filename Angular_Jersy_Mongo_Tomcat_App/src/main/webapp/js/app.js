"use strict"
var qaApp = angular.module('qaApp',['ui.router','ngResource','wijspread','ui.bootstrap','dialogs','qaControllers','qaServices']);
qaApp.config(['$stateProvider','$urlRouterProvider',
    function ($stateProvider,$urlRouterProvider) {
    
	$urlRouterProvider.otherwise('/login');
	
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
        }).
        state('modules.module1', {
        	url: '/module1',
            templateUrl: 'views/module1.html'
        }).
        state('modules.module2', {
        	url: '/module2',
            templateUrl: 'views/module2.html'
        }).
        state('modules.module3', {
        	url: '/module3',
            templateUrl: 'views/module3.html'
        });
	
}]);