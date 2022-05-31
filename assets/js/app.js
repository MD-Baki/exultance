$(document).ready(function (){

    // Preloder Js Start
    $(window).on("load", function () {
      $('#preloder').fadeOut(300);
    })
    // ||Preloder Js End||

    // Side Nav Js Start
    $('.navbar-toggler').on('click', function (){
        $('#side_menu').toggleClass('active')
    })
    $('.con').on('click', function (){
        $('.contact_btn').toggleClass('active')
    })
    // ||Side Nav Js End||

    // Nav-Fixd Js Start
    $(window).on('scroll', function () {
      var scrollSize = $(this).scrollTop();
  
      if (scrollSize > 150) {
          $('#banner_nav nav').addClass('animate')
      } else {
          $('#banner_nav nav').removeClass('animate')
      }        
    })
    // ||Nav Fixd Js End||

    // Work Slider Js Start
    $('.work_item').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
        ]
    })
    // ||Work Slider Js End||

    // Testimonial Slider Js Start
    $('.testimonial_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        dots: true,
        dotsClass: 'slider_dots',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]
    })
    // ||Testimonial Slider Js End||

    // News Slider Js Start
    $('.news_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }, 
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            
        ]
    })
    // ||News Slider Js End||

    // Back-To-Top Js Start
    $(window).on('scroll', function () {
      var scrollTop = $(this).scrollTop();
      
      if (scrollTop > 600) {
          $('#top').fadeIn(200)
      } else {
          $('#top').fadeOut(200)
      }
    })

    $('#top').on('click', function () {
        $("html, body").animate({
            scrollTop:0
        },100)
    })
  // ||Back-To-Top Js End||
})