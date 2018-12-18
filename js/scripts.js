$(document).ready(function(){

  
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

  $('.box').hover(
      function() {
        $(this).css('opacity', '0.6')
      },
      function() {
        $(this).css('opacity', '1')
      }
  );

});
