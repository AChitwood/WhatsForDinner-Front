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
                    "name": "Veggie Burger"
                    , "description": "Low-calorie veggie burger that will keep you fit"
                    , "image":
    }
                , {
                    "name": "Smoked Salmon"
                    , "description": "Quick and easy to do smoke salmon"
                    , "image":
    }
                , {
                    "name": "Oven Baked Chicken"
                    , "description": "Southern-style oven baked chicken"
                    , "image":
    }
                , {
                    "name": "Raspberry Custard"
                    , "description": "Craving dessert? Try this delicious custard"
                    , "image": "Austria"
    }
                , {
                    "name": "Chicken Parmasean"
                    , "description": "Love chicken, pasta, and cheese? Try this delicious recipe"
                    , "image": "Austria"
    }
                , {
                    "name": "Juicy Burger"
                    , "description": "The name says it all..."
                    , "image": "Austria"
    }, {
                    "name": "Zesty Salad"
                    , "description": "Trying to stay healthy? Try this easy-to-do salad"
                    , "image": "Austria"
    }
                , {
                    "name": "Strawberry Parfait"
                    , "description": "Make a delicious pastry for the family"
                    , "image": "Austria"
    }
                , {
                    "name": "Chocolate Layered Cake"
                    , "description": "Need chocolate?"
                    , "image": "Austria"
    }
                , {
                    "name": "Berry Waffles"
                    , "description": "Easy to do berry waffles"
                    , "image": "Austria"
    }
                , {
                    "name": "Popcorn Chicken"
                    , "description": "This chicken is popping"
                    , "image": "Austria"
    }
                , {
                    "name": "Spaghetti"
                    , "description": "Craving Italian? No need to go to Italy"
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
