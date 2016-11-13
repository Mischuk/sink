$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });

    autosize($('textarea'));

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

    

    function headerOptions() {

      var $mobileMenu = $('.mobile-menu');

      var $background = $('.background-layer');

      var $menu = $('.m_menu-phone');

      var $search = $('.m_header .search a');

      var $cart = $('.m_header .cart a');

    

      // Закрытие меню

      function closeMenu() {

        $('.mobile-menu-trigger').removeClass('open');

        $background.removeClass('active');

        $menu.removeClass('open');

      };

    

      // Закрытие поиска

      function closeSearch() {

        $search.removeClass('open');

        $background.removeClass('active');

        $('.m_header-search').removeClass('open');

      };

    

      // Закрытие корзины

      function closeCart() {

        $cart.removeClass('open');

        $background.removeClass('active');

        $('.m_header-cart').removeClass('open');

      };

    

      // Мобильное меню: Вызов

      $mobileMenu.on('click', function(){

        closeSearch();

        closeCart();

        if ( $('.mobile-menu-trigger').hasClass('open') ) {

          $('.mobile-menu-trigger').removeClass('open');

          $background.removeClass('active');

          $menu.removeClass('open');

        } else {

          $('.mobile-menu-trigger').addClass('open');

          $background.addClass('active');

          $menu.addClass('open');

        }

      });

    

      // Мобильное меню: Выпадющие списки

      $menu.find('.dropdown').on('click', function(){

        if ( $(this).hasClass('open') ) {

          $(this).removeClass('open');

        } else {

          $menu.find('.dropdown').removeClass('open');

          $(this).addClass('open');

        }

      });

    

      // Поиск: вызов

      $search.on('click', function(){

        closeMenu();

        closeCart();

        if ( $search.hasClass('open') ) {

          $search.removeClass('open');

          $('.m_header-search').removeClass('open');

          $background.removeClass('active');

          $('.m_header-search input').blur();

        } else {

          $search.addClass('open');

          $('.m_header-search').addClass('open');

          $background.addClass('active');

          $('.m_header-search input').focus();

        }

      });

    

      // Поиск: закрытие по крестику

      $('.m_header-search .h-close').on('click', function(){

        closeSearch();

      });

    

      // Корзина: вызов

      $cart.on('click', function(){

        closeMenu();

        closeSearch();

        if ( $cart.hasClass('open') ) {

          $cart.removeClass('open');

          $('.m_header-cart').removeClass('open');

          $background.removeClass('active');

        } else {

          $cart.addClass('open');

          $('.m_header-cart').addClass('open');

          $background.addClass('active');

        }

      });

    

      // Корзина: закрытие по крестику

      $('.m_header-cart .h-close').on('click', function(){

        closeCart();

      });

    

    

      // Закрытие окон при изменении ширины окна

      $(window).resize(function(){

        // Закрытие меню

        if ( $menu.hasClass('open') ) {

          closeMenu();

        };

    

        // Закрытие поиска

        if ( $search.hasClass('open') ) {

          closeSearch()

        };

    

        // Закрытие корзины

        if ( $cart.hasClass('open') ) {

          closeCart()

        };

      });

    

      // Закрытие окон при клике по темному фону

      $background.on('click', function(){

        closeMenu();

        closeSearch();

        closeCart();

      });

    

    };

    

    headerOptions();

    

    

    

    

    console.log('Layout generated...');

    

    function leadCarousel() {

      $('.lead-carousel').slick({

        dots: true

      });

    };

    leadCarousel();

    

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

    

    function popups() {

      $('.call-popup').magnificPopup({

        type: 'inline',

    

        fixedContentPos: false,

        fixedBgPos: true,

    

        overflowY: 'auto',

    

        closeBtnInside: true,

        preloader: false,

    

        midClick: true,

        removalDelay: 300,

        mainClass: 'my-mfp-zoom-in',

        callbacks: {

            open: function() {

                $('#popup-callback button[type=submit]').on('click', function(e){

                  $.magnificPopup.close();

                  setTimeout(function(){

                      $('#success').trigger('click');

                  }, 300);

                  e.preventDefault();

                });

            }

        }

      });

    

    

    };

    popups();

    

    function topItemsCarousel() {

      $('.top-item-carousels').slick({

        dots: false,

        arrows: true,

        rows: 2,

        slidesPerRow: 1,

        mobileFirst: true,

        draggable: false,

        infinite: false,

        swipe: false,

        touchMove: false,

        responsive: [

          {

            breakpoint: 480,

            settings: {

              slidesToShow: 2,

              infinite: true

            }

          },

          {

            breakpoint: 768,

            settings: {

              slidesPerRow: 3

            }

    

          },

          {

            breakpoint: 1200,

            settings: {

              slidesPerRow: 4

            }

    

          }

        ]

      });

      var $topItemsNav = $('.top-items-nav a');

      $topItemsNav.on('click', function(){

        if ( !$(this).hasClass('current') ) {

          $topItemsNav.removeClass('current');

          $(this).addClass('current');

          var eq = $(this).index();

          $('.top-items-content .top-item-carousels').removeClass('enabled').addClass('disabled');

          $('.top-items-loader').addClass('show');

          $('.m_top-items .action').hide();

          setTimeout(function(){

            $('.top-items-loader').removeClass('show');

            $('.top-items-content .top-item-carousels').eq(eq).addClass('enabled');

            $('.m_top-items .action').show();

            $('.top-item-carousels').slick('setPosition');

          }, 1000);

        } else {

          return false;

        }

      });

    };

    topItemsCarousel();
});