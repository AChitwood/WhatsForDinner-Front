	// create the module and name it wfd
	var wfd = angular.module('wfd', ['ngRoute']);

	// configure our routes
	wfd.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
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

	// create the controller and inject Angular's $scope
	wfd.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Welcome to our Capstone web page application, What\'s for dinner!';
	});

	wfd.controller('aboutController', function($scope) {
		$scope.message = 'Look! this is going to be your account page! Thsis will have important information here';
	});

	wfd.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});