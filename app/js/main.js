$(function () {

  $(".rate").rateYo({
    starWidth: "15px",
    rating: 4.5,
    readOnly: true
  });

  $('.weklyProduct__slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button type="button" class="slick-prev" ><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="slick-next" ><span class="lnr lnr-chevron-right"></span></button>'
  });

});