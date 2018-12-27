$(document).ready(function(){

    // resize navbar on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200 && $(window).width() > 991) {
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


    // tabs
    $('#performance').click(function() {
        $(this).addClass('tab-active');
        $('#engine').removeClass('tab-active');
        $('.engine-row').addClass('fadeOut').removeClass('fadeIn');
        $('.performance-row').addClass('fadeIn').removeClass('fadeOut');
        $('.engine-row, .cosmetic-row').toggleClass('front');
    });
        
    $('#engine').click(function() {
        $(this).addClass('tab-active');
        $('#performance').removeClass('tab-active');
        $('.performance-row').addClass('fadeOut').removeClass('fadeIn');
        $('.engine-row').addClass('fadeIn').removeClass('fadeOut');
        $('.engine-row, .cosmetic-row').toggleClass('front');
    });


    // box hover
    $('.engine-box').hover(
        function() {
            $(this).css('border', '3px solid #f9cd48').css('box-shadow', '3px 3px 2px #48e0f9');
            $('.service-icon', this).css('opacity', '0.15');
            $('.box-text', this).css('bottom', '30%').css('opacity', '1');
        },
        function() {
            $(this).css('border', '3px solid #000').css('box-shadow', 'none');
            $('.service-icon', this).css('opacity', '1');
            $('.box-text', this).css('bottom', '0').css('opacity', '0');
        }
    );

    $('.performance-box').hover(
        function() {
            $(this).css('border', '3px solid #48e0f9').css('box-shadow', '3px 3px 2px #f9cd48');
            $('.service-icon', this).css('opacity', '0.15');
            $('.box-text', this).css('bottom', '30%').css('opacity', '1');
        },
        function() {
            $(this).css('border', '3px solid #000').css('box-shadow', 'none');
            $('.service-icon', this).css('opacity', '1');
            $('.box-text', this).css('bottom', '0').css('opacity', '0');
        }
    );

    // ig pictures
    $('.ig-image').hover(
        function() {
            $('.overlay', this).toggleClass('overlay-medium');
        },
        function() {
            $('.overlay', this).toggleClass('overlay-medium');
        }
    )

});
