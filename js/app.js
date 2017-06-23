
$( document ).ready(function(){
   $(".button-collapse").sideNav();
   $('.carousel.carousel-slider').carousel({fullWidth: true});
   setInterval(moverCarrusel, 5000); //
   $('.materialboxed').materialbox();
});

function moverCarrusel() {
    $('.carousel').carousel('next');
  }
