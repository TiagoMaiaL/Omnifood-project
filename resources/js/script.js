$(document).ready(function() {
  
  /**
   * Stycky navigation handling.
   */
  var waypoint = new Waypoint({
    element: $('.js-section-features'),
    handler: function(direction) {
      var navigation = $('nav');
      switch(direction) {
        case "up":
          navigation.removeClass('sticky');
          break;
        case "down":
          navigation.addClass('sticky');
          break;
      }
    },
    offset: '60px'
  });

  /**
   * Dynamic Scroll handling.
   */
  $('.js-scroll-to-plans').click(function() {
    $('html, body').animate({
      scrollTop: $('.js-section-plans').offset().top
    }, 1000);
  });

  $('.js-scroll-to-start').click(function() {
    $('html, body').animate({
      scrollTop: $('.js-section-features').offset().top
    }, 1000);
  });

  /**
   * Navigation scrolling function.
   */
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

});