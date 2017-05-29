$(document).ready(function() {
  // dropdown in menu
  $(".dropdown-button").dropdown(
    {hover: true});
  // responsive menu
  $(".button-collapse").sideNav();

  // image gallery
  lightGallery(document.getElementById('lightgallery'));
  lightGallery(document.getElementById('lightgallery2'));

  // smooth scroll
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


  // parallax
  $(document).ready(function(){
    $('.parallax').parallax();
  });


});

