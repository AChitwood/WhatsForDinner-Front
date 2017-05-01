(function () {
    'use strict';
    angular.module('app').controller('ProfileController', ProfileController);
    ProfileController.$inject = ['UserService', '$rootScope', '$scope', '$cookies'];

    function ProfileController(UserService, $rootScope, $scope, $cookies) {
        var vm = this;
        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;
        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
            testName();
            fessCntrl();
        }

        function fessCntrl() {
            $rootScope.expenses = [{
                exTitle: ""
                , amount: ""
                , typeOfShare: ""
                , date: ""
                }];
            $rootScope.submitExpense = function (expenseInfo) {
                $rootScope.expenses.push(expenseInfo);
            }
        };

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

        function testName() {
            var listInput = element(by.model('list'));
            var output = element(by.binding('list'));
            listInput.sendKeys('abc\ndef\nghi');
            expect(output.getText()).toContain('[\n  "abc",\n  "def",\n  "ghi"\n]');
            vm.names = [
                {
                    "Name": "Veggie Burger"
                    , "description": "Low-calorie veggie burger"
                    , "image": "/app/assets/images/burger.jpeg"
                }, {
                    "Name": "Smoked Salmon"
                    , "description": "Quick and easy to do smoke salmon"
                    , "image": "/app/assets/images/fish.jpeg"
                }, {
                    "Name": "Oven Baked Chicken"
                    , "description": "Southern-style oven baked chicken"
                    , "image": "/app/assets/images/food2.jpg"
                }, {
                    "Name": "Raspberry Custard"
                    , "description": "Craving dessert?"
                    , "image": "/app/assets/images/food4.jpg"
                }, {
                    "Name": "Chicken Parmasean"
                    , "description": "Love chicken, pasta, and cheese?"
                    , "image": "/app/assets/images/food6.jpg"
                }, {
                    "Name": "Juicy Burger"
                    , "description": "The name says it all..."
                    , "image": "/app/assets/images/juicyburger.jpeg"
                }, {
                    "Name": "Zesty Salad"
                    , "description": "Trying to stay healthy?"
                    , "image": "/app/assets/images/salad.jpg"
                }, {
                    "Name": "Strawberry Parfait"
                    , "description": "Make a delicious pastry for the family"
                    , "image": "/app/assets/images/sweet1.jpg"
                }, {
                    "Name": "Chocolate Layered Cake"
                    , "description": "Need chocolate?"
                    , "image": "/app/assets/images/sweets2.jpeg"
                }, {
                    "Name": "Berry Waffles"
                    , "description": "Easy to do berry waffles"
                    , "image": "/app/assets/images/waffles.jpg"
                }, {
                    "Name": "Popcorn Chicken"
                    , "description": "This chicken is popping"
                    , "image": "/app/assets/images/popcornChick.jpg"
                }, {
                    "Name": "Spaghetti"
                    , "description": "Craving Italian? No need to go to Italy"
                    , "image": "/app/assets/images/spagetti.jpg"
                }];
        }

        function testName() {
            vm.description = "2 cans(15 oz each) ROSARITA® Premium Whole Black Beans, drained, rinsed 1 cup panko bread crumbs 1 / 2 cup Egg Beaters® Original 1 - 1 / 2 teaspoons Cajun seasoning 1 / 4 teaspoon salt 2 tablespoons Pure Wesson® Canola Oil, divided 6 tablespoons guacamole 6 whole wheat hamburger buns 6 slices fresh tomato Purchase ingredients from Peapod or Amazon ";
        }
    }
})();
