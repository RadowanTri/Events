$(document).ready(function($){
    "use strict";


  //==============================
  // smooth scroll
  //==============================
  $("[data-background").each(function(){
    $(this).css("background-image", "url(" + $(this).attr("data-background")+")")
 });

$(".popular-carousel").owlCarousel({
  loop:true,
  margin:15,
  nav:false,
  dots:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:3
    }
  }
});

$(".hero-carousel").owlCarousel({
  loop:true,
  margin:15,
  nav:false,
  // navText:["<i class='fas fa-arrow-left'></i>",
  // "<i class='fas fa-arrow-right'></i>"],
  dots:true,

  responsive:{
    0:{
      items:1
    },
    1000:{
      items:1
    }
  }
});



// Magnific popup
$('.videos-icon').magnificPopup({
type:'iframe',
iframe: {
patterns: {
  youtube: {
    index: 'youtube.com/', 

    id: 'v=', 
    src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
  }

},
srcAction: 'iframe_src',
}
});

  // $('.count').each(function () {
  //     $(this).prop('Counter',0).animate({
  //         Counter: $(this).text()
  //     }, {
  //         duration: 4000,
  //         easing: 'swing',
  //         step: function (now) {
  //             $(this).text(Math.ceil(now));
  //         }
  //     });
  // });
    $('.counter').counterUp({
      delay: 50,
      time: 1000
    });
           
    $('.testimonial-active').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.testimonial-img-active'
    });
    $('.testimonial-img-active').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.testimonial-active',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding:'0px',
      arrows:false,
      dots:false,
    });
}(jQuery));
