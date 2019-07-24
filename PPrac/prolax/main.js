$(document).ready(function () {
  $(window).on('mousemove', function (e) {
    let w = $(window).width();
    let h = $(window).height();
    let offsetX = 0.5 - e.pageX/w;
    let offsetY = 0.5 - e.pageY/h;
    $('.paralax').each(function (i, el) {
      // element == this
      let offset = $(el).data('offset');
      console.log(Math.round(offsetX*offset));
      
      let translate = 'translate3D(' + Math.round(offsetX*offset) + 'px, ' + Math.round(offsetY*offset) + 'px, 0px';
      $(el).css('transform', translate);
    });
    
  });
});