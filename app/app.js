(function () {
    'use strict';
    angular.module('app', ['ngRoute', 'ngCookies']).config(config).run(run);
    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            controller: 'HomeController'
            , templateUrl: 'home/home.view.html'
            , controllerAs: 'vm'
        }).when('/login', {
            controller: 'LoginController'
            , templateUrl: 'login/login.view.html'
            , controllerAs: 'vm'
        }).when('/register', {
            controller: 'RegisterController'
            , templateUrl: 'register/register.view.html'
            , controllerAs: 'vm'
        }).when('/profile', {
            controller: 'ProfileController'
            , templateUrl: 'profile/profile.view.html'
            , controllerAs: 'vm'
        }).when('/search', {
            templateUrl: 'search/search.view.html'
            , controller: 'SearchController'
            , controllerAs: 'vm'
        }).otherwise({
            redirectTo: '/'
        });
    }
    run.$inject = ['$rootScope', '$location', '$cookies', '$http', 'UserService'];

    function run($rootScope, $location, $cookies, $http, UserService) {
        $rootScope.globals.currentUser.currentUserSignIn = false; // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register', '/', '/search']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/');
                $rootScope.globals.currentUser.currentUserSignIn = false;
            }
            else if (loggedIn) {
                UserService.GetByUsername($rootScope.globals.currentUser.username).then(function (user) {
                    console.log(user.firstName);
                    $rootScope.globals.user = user.firstName;
                    $rootScope.globals.currentUser.currentUserSignIn = true;
                });
            }
        });
    }
})();
