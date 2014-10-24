"use strict"
/*var qaApp = angular.module('qaApp', ['ngRoute', 'ngResource', 'wijspread', 'ui.bootstrap', 'dialogs', 'qaControllers', 'qaServices']);*/
var qaApp = angular.module('qaApp',['ngRoute','ngResource','ui.bootstrap','dialogs']);
qaApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/login', {
            templateUrl: 'views/login.html'
        }).
        when('/signup', {
            templateUrl: 'views/signup.html'
        }).
        when('/users/:userId', {
            templateUrl: 'views/modules.html',
            controller: 'ModuleController'
        }).
        when('/modules/:moduleId', {
            templateUrl: 'views/spread-sheet.html',
            controller: 'SheetController'
        }).
        when('/modules', {
            templateUrl: 'views/modules.html',
        }).

        otherwise({
            redirectTo: '/login'
        });
}]);