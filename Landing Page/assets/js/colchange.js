$(document).mousemove(function(event) {
    windowWidth = $('.cont').width();
    windowHeight = $('.cont').height();
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY /  100);
    
    $('.cont').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #21E627, #272727)');
  });