$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.z-gory, .z-dolu, .z-lewej, .z-prawej').each( function(i){

    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it it */
    if( bottom_of_window > bottom_of_object ){
      $(this).addClass('aktywny');
    }

  });

  if(wScroll > $('#produkty').offset().top - ($(window).height() / 1.2))
  {
    $('#prod div').each(function(i,e){
      setTimeout(function(){
        $(e).addClass('aktywny');
      }, 150 * (i+1));
    });
  }

  if(wScroll > $('#kontakt').offset().top - ($(window).height() / 1.2))
  {
    $('#kontakt div').each(function(i,e){
      setTimeout(function(){
        $(e).addClass('aktywny');
      }, 150 * (i+1));
    });
  }




  if(wScroll > $('#o-firmie').offset().top-200)
  {
    $('#naglowek > .container-fluid').addClass('nawigacja-on').removeClass('nawigacja-off');

    $('body section').each(function(i) {
      if ($(this).position().top <= wScroll+300)
      {
        $('.navbar-nav a.active').removeClass('active');
        $('.navbar-nav a').eq(i).addClass('active');
      }
    });
  }
  else
  {
    $('#naglowek > .container-fluid').addClass('nawigacja-off').removeClass('nawigacja-on');

    $('.navbar-nav a.active').removeClass('active');
    $('.navbar-nav a').eq(i).addClass('active');
  }




}).scroll();
