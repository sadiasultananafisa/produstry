$(function(){
  $(window).on('load', function () {
    $('.preloader').fadeOut(2000);
 })
  $(".btn-toggler").click(function(){
      let navmenu= $("#mycusnav ul li")
      let logo= $("nav .navlogo")
      navmenu.toggleClass("activenavmenu")
      logo.toggleClass("activenavlogo")
    })
  $(window).on("scroll",function(){
      if($(window).scrollTop() > $(".navbar").height()){
       $("#navbar").addClass("nav_anim")
      }else{
       $("#navbar").removeClass("nav_anim")
      }
    })
  $(window).on('scroll', function(){
      if ($(this).scrollTop() > 200) {
          $('#backToTop').fadeIn()
       } else {
          $('#backToTop').fadeOut(1000)
       }
  })
  $('#backToTop').on('click', function () {
     $('html,body').animate({
        scrollTop: 0,
     },2000)
  })
})
/*BANNER starts here*/
$(document).ready(function(){
    $('.banner-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows:true,
        autoplay:true,
        prevArrow:'.banner-right-arrow',
        nextArrow:'.banner-left-arrow',
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
    autoplaySpeed:3000000,
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
$(function(){
  $(".nav .nav-tabs button").click(function(){
    let activenavtab= $(".nav-link")
    .nav-link.addClass("active")
})
})
//*portfolio starts here
$(document).ready(function(){
  $('.Portfolio-slider').slick({
    slidesToShow:4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  })
//*BLOG SLIDER STARTS SLICK
$(document).ready(function(){
$('.blog-Slider').slick({
  slidesToShow:3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:2000,
  centerMode: true,
  centerPadding: "0px",
  prevArrow:'.blog-right-arrow',
  nextArrow:'.blog-left-arrow',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
})
// Counter Up 
$(document).ready(function(){
$('#num1').countMe(7,5);
$('#num2').countMe(9,6);
$('#num3').countMe(10,8);
$('#num4').countMe(11,9);
})
  $(document).ready(function(){
    $('.testimonial-slider').slick({
      slidesToShow:1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:2000,
      centerMode: true,
      centerPadding: "0px",
      prevArrow:'.testimonial-right-arrow',
      nextArrow:'.testimonial-left-arrow',
      asNavFor: '.testimonial-img-slider',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  $('.testimonial-img-slider').slick({
    slidesToShow: 3,
    autoplay:true,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    prevArrow:'.testimonial-right-arrow',
   nextArrow:'.testimonial-left-arrow',
   asNavFor: '.testimonial-slider',
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
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
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
  })
});
$(document).ready(function(){
  $('.brand-slider').slick({
    slidesToShow:5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    centerMode: true,
    centerPadding: "0px",
    prevArrow:'.brand-right-arrow',
    nextArrow:'.brand-left-arrow',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  });
  })


//ABOUT US page starts here
  $(document).ready(function(){
    $('.our-team-slider').slick({
      slidesToShow:3,
      slidesToScroll: 1,
      autoplay:false,
      autoplaySpeed:5000,
      centerMode: true,
      centerPadding: "0px",
      prevArrow:'.team-right-arrow',
      nextArrow:'.team-left-arrow',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    });
  //contact us form 
  

  //post filter starts here
  
  $(function(){
    var mixer = mixitup('.filtered-post');
  })

































    })
