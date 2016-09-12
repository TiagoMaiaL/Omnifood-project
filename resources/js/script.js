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
   * Navigation scrolling handling.
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

  /**
   * Scrolling animations.
   */
  $('.js-wp-1').waypoint({
    handler: function() {
      $('.js-wp-1').addClass('animated fadeIn');
    },
    offset: '50%'
  });

  $('.js-wp-2').waypoint({
    handler: function() {
      $('.js-wp-2').addClass('animated fadeInUp');
    },
    offset: '50%'
  });

  $('.js-wp-3').waypoint({
    handler: function() {
      $('.js-wp-3').addClass('animated fadeIn');
    },
    offset: '50%'
  });

  $('.js-wp-4').waypoint({
    handler: function() {
      $('.js-wp-4').addClass('animated pulse');
    },
    offset: '50%'
  });

});