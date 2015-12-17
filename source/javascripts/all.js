//= require bootstrap-sprockets


$(document).ready(function() {
  var mouseX = $(window).width()/2,
    mouseY = $(window).height()/2;
  $(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });
  var follower = $('em');
  var xp = 0,
    yp = 0;
  var loop = setInterval(function() {
    xp += (mouseX - xp) / 30;
    yp += (mouseY - yp) / 30;
    follower.css({
      left: xp,
      top: yp
    });
  }, 10);
});
