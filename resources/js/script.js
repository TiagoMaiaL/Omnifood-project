$(document).ready(function() {
  
  var waypoint = new Waypoint({
    element: $('.section-features'),
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
    }
  });

});