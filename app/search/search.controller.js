(function () {
    'use strict';
    angular.module('app').controller('SearchController', SearchController);
    SearchController.$inject = ['UserService', '$rootScope'];

    function SearchController(UserService, $rootScope) {
        var vm = this;
        vm.user = null;
        vm.allUsers = [];
        initController();

        function initController() {
            recipes();
        }

        function recipes() {
            vm.recipe = [
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
    }
})();