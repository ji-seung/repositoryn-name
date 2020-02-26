window.onload = function() {
    
var topbtntag = document.createElement("div");
    topbtntag.classList.add("topbtn");
var topbtnarw = document.createElement("div");
    topbtnarw.classList.add("topbtn-arw");
    topbtntag.appendChild(topbtnarw);
var element = document.getElementsByTagName('body')[0];
    element.appendChild(topbtntag);
    
var btn = $('.topbtn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

}
