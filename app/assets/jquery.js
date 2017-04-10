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
    $(".bottomTitle").css("opacity", 1 - $(window).scrollTop() / 100);
});

function checkOffset() {
    var a = $(document).scrollTop() + window.innerHeight;
    var b = $('#footer').offset().top;
    if (a < b) {
        $('.col-md-12').css('bottom', '20px');
    }
    else {
        $('.col-md-12').css('bottom', (20 + (a - b)) + 'px');
    }
}
$(document).ready(checkOffset);
$(document).scroll(checkOffset);
