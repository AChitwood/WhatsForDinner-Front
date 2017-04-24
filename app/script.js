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
        })
        // route for the about page
        .when('/login', {
            templateUrl: 'login/login.view.html '
            , controller: 'login.controller'
        })
        /*  .when('/userprofile', {
              templateUrl: 'userprofile/userprofile.html '
              , controller: 'aboutController'
          })*/
        .when('/betaprofile', {
            templateUrl: 'betaprofile/betaprofile.html '
        })
        // route for the contact page
        .when('/signup', {
            templateUrl: 'signup/signup.html'
            , controller: 'signup.controller.js'
        });
});
MyApp.controller('home.controller', function ($scope) {
    $scope.message = 'It is working ';
});
