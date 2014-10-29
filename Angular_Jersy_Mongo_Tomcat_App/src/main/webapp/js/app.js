"use strict"
var qaApp = angular.module('qaApp', [ 'ui.router', 'ngResource', 'wijspread',
		'ui.bootstrap', 'dialogs', 'qaControllers', 'qaServices' ]);
qaApp.config([ '$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {

			$stateProvider.state('login', {
				url : '/login',
				templateUrl : 'views/login.html',
				controller : 'LoginController'
			}).state('signup', {
				url : '/signup',
				templateUrl : 'views/signup.html',
				controller : 'SignupController'
			}).state('home', {
				url : '/home',
				templateUrl : 'views/home.html',
				controller : 'HomeController'

			}).state('modules.module1', {
				url : '/module1',
				templateUrl : 'views/module1.html'
			}).state('modules.module2', {
				url : '/module2',
				templateUrl : 'views/module2.html'
			}).state('modules.module3', {
				url : '/module3',
				templateUrl : 'views/module3.html'
			});

			$urlRouterProvider.otherwise('/login');
		} ]);
