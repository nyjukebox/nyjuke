$(document).ready(function() {
  // dropdown in menu
  $(".dropdown-button").dropdown(
    {hover: true});
  // responsive menu
  $(".button-collapse").sideNav();

  // show hideme element when scroll over
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              $(this).animate({'opacity':'1'},1200);
          }
      });
  });

  // scrollfire
  var options = [
  {selector: '#immersion-sched', offset: 400, callback: function(el) {
    Materialize.showStaggeredList($(el));}
  },
  {selector: '#exploration-sched', offset: 400, callback: function(el) {
    Materialize.showStaggeredList($(el));
  } }
  ];
  Materialize.scrollFire(options);

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

  // counter
  $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 5000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
    });
  });

});

