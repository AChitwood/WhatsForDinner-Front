(function () {
    'use strict';
    angular.module('app').controller('HomeController', HomeController);
    HomeController.$inject = ['UserService', '$rootScope', '$scope', '$http'];

    function HomeController(UserService, $rootScope, $scope, $http) {
        var vm = this;
        vm.user = null;
        vm.names = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;
        initController();

        function initController() {
            if ($rootScope.globals.currentUser) {
                loadCurrentUser();
            }
            loadAllUsers();
            testName();
            //            MyController();
        }

        function testName() {
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
        //
        //        function MyController() {
        //            //            $scope.items = [];
        //            //            $scope.getItems = function () {
        //            //                $http({
        //            //                    method: 'GET'
        //            //                    , url: 'http://uaf135145.ddns.uark.edu:3001/ingredient/getByName/Test2'
        //            //                        //                    , headers: {
        //            //                        //                        'X-Parse-Application-Id': 'XXXX'
        //            //                        //                        , 'X-Parse-REST-API-Key': 'YYYY'
        //            //                        //                    }
        //            //                }).success(function (data, status) {
        //            //                    $scope.items = data;
        //            //                    alert(data + " " + status)
        //            //                }).error(function (data, status) {
        //            //                    alert("Error");
        //            //                });
        //            //            };
        //            var Base64 = {
        //                keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
        //                , encode: function (input) {
        //                    var output = "";
        //                    var chr1, chr2, chr3 = "";
        //                    var enc1, enc2, enc3, enc4 = "";
        //                    var i = 0;
        //                    do {
        //                        chr1 = input.charCodeAt(i++);
        //                        chr2 = input.charCodeAt(i++);
        //                        chr3 = input.charCodeAt(i++);
        //                        enc1 = chr1 >> 2;
        //                        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        //                        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        //                        enc4 = chr3 & 63;
        //                        if (isNaN(chr2)) {
        //                            enc3 = enc4 = 64;
        //                        }
        //                        else if (isNaN(chr3)) {
        //                            enc4 = 64;
        //                        }
        //                        output = output + this.keyStr.charAt(enc1) + this.keyStr.charAt(enc2) + this.keyStr.charAt(enc3) + this.keyStr.charAt(enc4);
        //                        chr1 = chr2 = chr3 = "";
        //                        enc1 = enc2 = enc3 = enc4 = "";
        //                    } while (i < input.length);
        //                    return output;
        //                }
        //                , decode: function (input) {
        //                    var output = "";
        //                    var chr1, chr2, chr3 = "";
        //                    var enc1, enc2, enc3, enc4 = "";
        //                    var i = 0;
        //                    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        //                    var base64test = /[^A-Za-z0-9\+\/\=]/g;
        //                    if (base64test.exec(input)) {
        //                        window.alert("There were invalid base64 characters in the input text.\n" + "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" + "Expect errors in decoding.");
        //                    }
        //                    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        //                    do {
        //                        enc1 = this.keyStr.indexOf(input.charAt(i++));
        //                        enc2 = this.keyStr.indexOf(input.charAt(i++));
        //                        enc3 = this.keyStr.indexOf(input.charAt(i++));
        //                        enc4 = this.keyStr.indexOf(input.charAt(i++));
        //                        chr1 = (enc1 << 2) | (enc2 >> 4);
        //                        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        //                        chr3 = ((enc3 & 3) << 6) | enc4;
        //                        output = output + String.fromCharCode(chr1);
        //                        if (enc3 != 64) {
        //                            output = output + String.fromCharCode(chr2);
        //                        }
        //                        if (enc4 != 64) {
        //                            output = output + String.fromCharCode(chr3);
        //                        }
        //                        chr1 = chr2 = chr3 = "";
        //                        enc1 = enc2 = enc3 = enc4 = "";
        //                    } while (i < input.length);
        //                    return output;
        //                }
        //            };
        //            var headers = {
        //                'Authorization': 'Basic ' + Base64.encode('foo' + ':' + 'bar')
        //            }
        //            $http.get('http://uaf135145.ddns.uark.edu:3001/', {
        //                headers: headers
        //            }).then(function (response) {
        //                //                alert(JSON.stringify(response));
        //            }, function errorCallback(response) {
        //                //                alert("error");
        //            });
        //        }
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
