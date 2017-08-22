(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

  	$('.carousel').carousel();
	$('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.slider').slider();

  }); // end of document ready
})(jQuery); // end of jQuery name space