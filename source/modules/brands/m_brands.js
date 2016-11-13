function brandsCarousel() {
  $('.brands-carousel').slick({
    dots: false,
    arrows: true,
    slidesToShow: 2,
    mobileFirst: true,
    draggable: false,
    infinite: false,
    swipe: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }

      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5
        }

      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6
        }

      }
    ]
  });
};
brandsCarousel();