$(document).ready(function(){
  $("#About").click(function(){
    $('html, body').animate({
      scrollTop: $('.about').offset().top
    }, 500);
  });
  $("#Portfolio").click(function(){
    $('html, body').animate({
      scrollTop: $('.portfolio').offset().top
    }, 500);
  });
  $("#Contact").click(function(){
    $('html, body').animate({
      scrollTop: $('.contact').offset().top
    }, 500);
  });
});
