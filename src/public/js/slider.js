import _ from 'lodash';
import 'slick-carousel';
// $(document).ready(function(){
    $('.sliders').slick({
        
        arrows:false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        fade: true,dots: true,
        cssEase: 'linear',
        // centerMode: true,
        // centerPadding:'0px',
        slidesPerRow:1,
        dots:true,
        mobileFirst:true,
        

    });
   $(window).resize(function(){
    //  $('.sliders').slick.refresh();
     $('.sliders').slick('setPosition');
   });
 
 
  // $('.lazy').slick({
  //   lazyLoad: 'ondemand',
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // });


// });