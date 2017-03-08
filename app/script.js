// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var MyApp = angular.module('MyApp', ['ngRoute']);

    // configure our routes
    MyApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/app/index.html', {
                templateUrl : 'home/home.html',
                controller : 'home.controller'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });
