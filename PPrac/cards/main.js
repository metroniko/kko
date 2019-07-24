$(document).ready(function () {
  let card = $('.card');
  $(card).mousemove(function (e) { 
    let index = card.index(this);
    let cardItem = $('.card-item')[index];
    let halfHeight = $(cardItem).outerHeight()/2;
    let halfWidht = $(cardItem).outerWidth()/2;
    $(cardItem).css('transform', 'rotateX('+ -(e.offsetY -halfHeight)/5 +'deg) rotateY('+ (e.offsetX -halfWidht)/5 +'deg)');
  });
  $(card).mouseout(function () { 
    let index = card.index(this);
    let cardItem = $('.card-item')[index];
    $(cardItem).css('transform', 'rotate(0)');    
  });
function a(x) {
  return x+1;
}
var a;
console.log(a(1));

});
