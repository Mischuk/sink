function salesCarousel() {
  $('.lead-sales-carousel').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    mobileFirst: true,
    draggable: false,
    infinite: false,
    swipe: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }

      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }

      }
    ]
  });
};
salesCarousel();