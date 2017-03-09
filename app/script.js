// script.js
// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var MyApp = angular.module('MyApp', ['ngRoute']);
// configure our routes
MyApp.config(function ($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl: 'home/home.html'
            , controller: 'home.controller'
        })
        // route for the about page
        .when('/login', {
            templateUrl: 'login/login.view.html '
            , controller: 'aboutController'
        })
        // route for the contact page
        .when('/register', {
            templateUrl: 'register/register.view.html'
            , controller: 'register.controller.js'
        });
});
MyApp.controller('home.controller', function ($scope) {
    $scope.message = 'It is working ';
});
