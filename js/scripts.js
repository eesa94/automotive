$(document).ready(function(){

    // resize navbar on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400 && $(window).width() > 991) {
            $('nav').css('height', '60px').css('background-color', 'rgba(0, 0, 0, 1)');
            $('.brand').css('font-size', '3rem');
            $('.inner-menu').css('max-width', '1050px');
        } else {
            $('nav').css('height', '80px').css('background-color', 'rgba(0, 0, 0, 0.60)');
            $('.brand').css('font-size', '3.5rem');
            $('.inner-menu').css('max-width', '1000px');
        }
    });
    
  
    // smooth scrolling
    var $root = $('html, body');

    $('.nav-link').click(function() {
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
            $(this).css('opacity', '0.6')
        },
        function() {
            $(this).css('opacity', '1')
        }
    );

});
