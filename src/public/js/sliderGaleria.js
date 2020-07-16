import _ from "lodash"; 
import "./slick-lightbox";
$("#galeria").slickLightbox({
  // background color of overlay
  background: "rgba(0,48,60,.8)",

  // close on ESC
  closeOnEscape: true,

  // close on backgroun drop click
  closeOnBackdropClick: true,

  // in milliseconds
  destroyTimeout: 500,

  // default item selector
  itemSelector: "a",

  // allows keyboard navigation
  navigateByKeyboard: true,

  // How to get the image urls? If false, no src is taken as the href attribute.
  // You can pass your own function accepting the element as an attribute (e.g. function(element) { return $(element).doSomething(); }) or a string with the name of the attribute to be fetched (src will get the value of element.src attribute).
  src: false,

  // shows captions
  caption: false,

  // or 'bottom'
  captionPosition: "dynamic",

  // uses image array instead
  images: false,

  // slick.js opitons
  slick: {
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    dots: false,
    cssEase: "linear",
    // centerMode: true,
    // centerPadding:'0px',
    slidesPerRow: 1,
    prevArrow:"<button type='button' class='slick-prev'><i class='fas fa-arrow-circle-left'></i></button>",
                nextArrow:"<button type='button' class='slick-next'><i class='fas fa-arrow-circle-right'></i></button>",
  },

  // uses Histroy API
  useHistoryApi: false,

  // custom layout
  layouts: {
    closeButton: '<button type="button" class="slick-lightbox-close"></button>',
  },

  // a function that checks the return value before opening
  shouldOpen: null,

  // max height of images
  imageMaxHeight: 0.9,

  // enable image lazy load
  lazy: false,
});
