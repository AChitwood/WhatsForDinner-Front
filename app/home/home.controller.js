(function () {
    'use strict';
    angular.module('app').controller('HomeController', HomeController);
    HomeController.$inject = ['UserService', '$rootScope', '$scope'];

    function HomeController(UserService, $rootScope, $scope) {
        var vm = this;
        vm.user = null;
        vm.names = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;
        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
            testName();
        }

        function testName() {
            vm.names = [
                {
                    "Name": "Veggie Burger"
                    , "image": "Germany"
    }
                , {
                    "Name": "Smoked Salmon"
                    , "image": "Sweden"
    }
                , {
                    "Name": "Oven Baked Chicken"
                    , "image": "Mexico"
    }
                , {
                    "Name": "Raspberry Custard"
                    , "image": "Austria"
    }
                , {
                    "Name": "Chicken Parmasean"
                    , "image": "Austria"
    }
                , {
                    "Name": "Juicy Burger"
                    , "image": "Austria"
    }, {
                    "Name": "Zesty Salad"
                    , "image": "Austria"
    }
                , {
                    "Name": "Strawberry Parfait"
                    , "image": "Austria"
    }
                , {
                    "Name": "Chocolate Layered Cake"
                    , "image": "Austria"
    }
                , {
                    "Name": "Berry Waffles"
                    , "image": "Austria"
    }
                , {
                    "Name": "Popcorn Chicken"
                    , "image": "Austria"
    }
                , {
                    "Name": "Spaghetti"
                    , "image": "Austria"
    }
  ];
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username).then(function (user) {
                vm.user = user;
            });
        }

        function loadAllUsers() {
            UserService.GetAll().then(function (users) {
                vm.allUsers = users;
            });
        }

        function deleteUser(id) {
            UserService.Delete(id).then(function () {
                loadAllUsers();
            });
        }
    }
})();
