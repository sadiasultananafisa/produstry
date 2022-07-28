$(function(){
    $(".btn-toggler").click(function(){
        let navmenu= $("#mycusnav ul li")
        let logo= $("nav .navlogo")
        navmenu.toggleClass("activenavmenu")
        logo.toggleClass("activenavlogo")
    })
}
)
/*BANNER starts here*/
$(document).ready(function(){
    $('.banner-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows:true,
        autoplay:true,
        prevArrow:'.right-arrow',
        nextArrow:'.left-arrow',
    });
  });
  $("#banner").slick({
    arrows: false,
  });

/*SERVICE slider starts here*/
$(document).ready(function(){
  $(".servier-slider").slick({
    slidesToShow: 3,
    autoplay:true,
    autoplayspeed:300,
    prevArrow:'.right-arrow',
    nextArrow:'.left-arrow',
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          arrows:true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          
        },
      },
    ],
});
});