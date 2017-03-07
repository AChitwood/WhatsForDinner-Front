var app = angular.module('homepage', ['ui.bootstrap']);
app.controller('MainCtrl', function ($scope) {
    $scope.name = 'World';
});
app.controller('DropdownCtrl', function ($scope) {
    $scope.items = [
        "The first choice!"
        , "And another choice for you."
        , "but wait! A third!"
    ];
});
$(function () {
    $('a[href="#search"]').on('click', function (event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    $('#search, #search button.close').on('click keyup', function (event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function (event) {
        event.preventDefault();
        return false;
    })
});
$(window).scroll(function () {
    $(".bottom").css("opacity", 1 - $(window).scrollTop() / 500);
});
