$(document).ready(function(){

    // resize navbar on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400 && $(window).width() > 991) {
            $('nav').css('height', '65px').css('background-color', 'rgba(0, 0, 0, 1)');
            $('.inner-menu').css('max-width', '1050px');
            $('.brand').css('font-size', '3rem');
            $('.nav-link').css('font-size', '1.6rem');
        } else {
            $('nav').css('height', '80px').css('background-color', 'rgba(0, 0, 0, 0.60)');
            $('.inner-menu').css('max-width', '1000px');
            $('.brand').css('font-size', '3.5rem');
            $('.nav-link').css('font-size', '1.8rem');
        }
    });
    
  
    // smooth scrolling
    var $root = $('html, body');

    $('.nav-link, .brand').click(function() {
        var href = $.attr(this, 'href');
        if (href != undefined && href != '#') {
            $root.animate({
            scrollTop: $(href).offset().top
            }, 500, function () {
            window.location.hash = href;
            });
        }
        return false;
    });


    // box hover
    $('.box').hover(
        function() {
            $('.service-icon', this).css('opacity', '0');
            $('.box-header', this).css('opacity', '1');
            $('.box-text', this).css('bottom', '40%').css('opacity', '1');
        },
        function() {
            $('.service-icon', this).css('opacity', '1');
            $('.box-header', this).css('opacity', '0');
            $('.box-text', this).css('bottom', '0').css('opacity', '0');
        }
    );

});
