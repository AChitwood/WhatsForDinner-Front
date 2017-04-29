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

        function test(variable) {
            //            var stringArray = variable.split(",")
            //            for (int = 0; i < variable.length; i++) {
            //                if (i != 0) {
            //                    //add stuff
            //                    variable[i]
            //                }
            //            }
            //            return variable;
            alert(hello);
        }

        function recipes() {
            vm.recipe = [
                {
                    "Name": "Veggie Burger"
                    , "Ingredients": "2 cans(15 oz each) Rosarita® Premium Whole Black Beans, drained, rinsed 1 cup panko bread crumbs 1 / 2 cup Egg Beaters® Original 1 - 1 / 2 teaspoons Cajun seasoning 1 / 4 teaspoon salt 2 tablespoons Pure Wesson® Canola Oil, divided 6 tablespoons guacamole 6 whole wheat hamburger buns 6 slices fresh tomato Purchase ingredients from Peapod or Amazon"
                    , "Directions": "Mash black beans with potato masher in medium bowl until almost smooth.Add bread crumbs, Egg Beaters, Cajun seasoning and salt;mix until blended.Shape mixture into 6 patties, about 1 / 2 - inch thick. Heat 1 tablespoon oil in large skillet over medium - high heat.Add 3 patties;cook 3 minutes on each side or untilset and hot.Remove from skillet;keep warm.Add remaining 1 tablespoon oil and repeat with remaining patties.Remove from heat. Spread 1 tablespoon guacamole on bottom half of each bun.Top each with a patty and 1 tomato slice.Close with tops of buns.Serve immediately."
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
