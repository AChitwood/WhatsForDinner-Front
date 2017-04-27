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
                    , "image": "/app/assets/images/burger.jpeg"
    }
                , {
                    "Name": "Smoked Salmon"
                    , "image": "/app/assets/images/fish.jpeg"
    }
                , {
                    "Name": "Oven Baked Chicken"
                    , "image": "/app/assets/images/food2.jpg"
    }
                , {
                    "Name": "Raspberry Custard"
                    , "image": "/app/assets/images/food4.jpg"
    }
                , {
                    "Name": "Chicken Parmasean"
                    , "image": "/app/assets/images/food6.jpg"
    }
                , {
                    "Name": "Juicy Burger"
                    , "image": "/app/assets/images/juicyburger.jpeg"
    }, {
                    "Name": "Zesty Salad"
                    , "image": "/app/assets/images/salad.jpg"
    }
                , {
                    "Name": "Strawberry Parfait"
                    , "image": "/app/assets/images/sweet1.jpg"
    }
                , {
                    "Name": "Chocolate Layered Cake"
                    , "image": "/app/assets/images/sweets2.jpeg"
    }
                , {
                    "Name": "Berry Waffles"
                    , "image": "/app/assets/images/waffles.jpg"
    }
                , {
                    "Name": "Popcorn Chicken"
                    , "image": "/app/assets/images/popcornChick.jpg"
    }
                , {
                    "Name": "Spaghetti"
                    , "image": "/app/assets/images/spagetti.jpg"
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
