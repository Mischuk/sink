$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });

    autosize($('textarea'));

    function bottomViewedItems() {

      var $bottomViewedItemsNav = $('.bottom-viewed-items-nav a');

      $bottomViewedItemsNav.on('click', function(){

        if ( !$(this).hasClass('current') ) {

          $bottomViewedItemsNav.removeClass('current');

          $(this).addClass('current');

          var eq = $(this).index();

          $('.bottom-viewed-items-content .bottom-viewed-item').removeClass('enabled').addClass('disabled');

          $('.bottom-viewed-items-loader').addClass('show');

          setTimeout(function(){

            $('.bottom-viewed-items-loader').removeClass('show');

            $('.bottom-viewed-items-content .bottom-viewed-item').eq(eq).addClass('enabled');

          }, 1000);

        } else {

          return false;

        }

      });

    };

    bottomViewedItems();

    

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

    

    function card() {

      $('.gallery-item').magnificPopup({

        type: 'image',

        gallery:{

          enabled:true

        }

      });

    

      $('.card-gallery-single').slick({

        slidesToShow: 1,

        slidesToScroll: 1,

        arrows: false,

        dots: true,

        fade: true,

        infinite: false,

        asNavFor: '.card-gallery-thumbs',

        mobileFirst: true,

        responsive: [

          {

            breakpoint: 768,

            settings: {

              dots: false

            }

          }

        ]

      });

      $('.card-gallery-thumbs').slick({

        slidesToShow: 3,

        slidesToScroll: 1,

        asNavFor: '.card-gallery-single',

        dots: false,

        arrows: false,

        centerMode: false,

        infinite: false,

        focusOnSelect: true,

        mobileFirst: true

      });

    

      $('.qtyplus').click(function(e){

        e.preventDefault();

        fieldName = $(this).attr('field');

        var currentVal = parseInt($('input[name='+fieldName+']').val());

        if (!isNaN(currentVal)) {

          $('input[name='+fieldName+']').val(currentVal + 1);

        } else {

          $('input[name='+fieldName+']').val(0);

        }

      });

      $(".qtyminus").click(function(e) {

        e.preventDefault();

        fieldName = $(this).attr('field');

        var currentVal = parseInt($('input[name='+fieldName+']').val());

        if (!isNaN(currentVal) && currentVal > 0) {

          $('input[name='+fieldName+']').val(currentVal - 1);

        } else {

          $('input[name='+fieldName+']').val(0);

        }

      });

    

      var $cardTabsButton = $('.card-tabs-header a');

      $cardTabsButton.on('click', function(){

        $cardTabsButton.removeClass('current');

        $(this).addClass('current');

        var eq = $(this).index();

        $('.card-tabs-content .item').removeClass('current');

        $('.card-tabs-content .item').eq(eq).addClass('current');

      });

    };

    card();

    

    $('.remove-cart-item').on('click', function(){

      $(this).parents('tr').remove();

    });

    

    function displayCatalogItems() {

      $('.m_catalog-items .display-row').on('click', function(){

        $('.m_catalog-items .list').addClass('display-row');

        $('.m_catalog-items .display-grid').removeClass('current');

        $(this).addClass('current');

      });

    

      $('.m_catalog-items .display-grid').on('click', function(){

        $('.m_catalog-items .list').removeClass('display-row');

        $('.m_catalog-items .display-row').removeClass('current');

        $(this).addClass('current');

      });

    };

    displayCatalogItems();

    

    $('[data-comments="scroll"]').on('click', function(){

      $('html, body').animate({

        scrollTop: $(".m_comments-post").offset().top

      }, 500);

    });

    

    function compareCalc() {

    

    

      $('.m_compare .body').perfectScrollbar();

    

      var columnWidth = $('.m_compare .body .table .item').width();

      var columnSum = $('.m_compare .body .table .item').length;

      if ( columnSum > 4) {

        $('.m_compare .body .table').width(columnSum*(columnWidth));

        $('.m_compare .body .table .item').width(columnWidth).addClass('table-cell');

      }

    

      if ( $('html').hasClass('no-touchevents') ) {

        $('.m_compare .body').perfectScrollbar('update');

      }

    

    

    };

    compareCalc();

    $(window).on('resize', function(){

      compareCalc();

      if ( $('html').hasClass('touchevents') ) {

        $('.m_compare .body').perfectScrollbar('destroy');

      }

    });

    

    $('.remove-compare-item').on('click', function(){

      $(this).parent().remove();

      $('.m_compare .body .table').removeAttr("style");

      $('.m_compare .body .table .item').removeClass('table-cell').removeAttr("style");

      compareCalc();

    });

    

    $(window).on('load', function(){

      if ( $('html').hasClass('touchevents') ) {

        $('.m_compare .body').perfectScrollbar('destroy');

      }

    });

    

    function detailsFilters() {

      $('.m_detail-filters .toggle a').on('click', function(){

        var text = $(this).find('span').text();

        $(this).find('span').text(text == "Развернуть форму" ? "Свернуть форму" : "Развернуть форму");

    

        $('.detail-filters-body').toggle();

      });

    };

    detailsFilters();

    

    

    function detailsFiltersHidden() {

      var sliderFormatSecond = document.getElementById('width-slider-format');

      var inpws = document.getElementById('width-input-start');

      var inpwf = document.getElementById('width-input-finish');

      var inputs = [inpws, inpwf];

      var min = 0;

      var max = 2000;

      noUiSlider.create(sliderFormatSecond, {

        start: [ 0, 2000 ],

        step: 1,

        connect: true,

        range: {

          'min': [ min ],

          'max': [ max ]

        },

        pips: {

          mode: 'values',

          values: [min, max],

          density: 25,

          format: wNumb({

            decimals: 0,

            thousand: ' ',

            postfix: ' мм',

          })

        },

        format: wNumb({

          decimals: 0,

          thousand: ' ',

          postfix: ' мм',

        })

      });

    

      sliderFormatSecond.noUiSlider.on('update', function( values, handle ) {

        inputs[handle].value = values[handle];

      });

    

    

    

      function setSliderHandle(i, value) {

        var r = [null,null];

        r[i] = value;

        sliderFormatSecond.noUiSlider.set(r);

      }

    

      // Listen to keydown events on the input field.

      inputs.forEach(function(input, handle) {

    

        input.addEventListener('change', function(){

          setSliderHandle(handle, this.value);

        });

    

        input.addEventListener('keydown', function( e ) {

    

          var values = sliderFormatSecond.noUiSlider.get();

          var value = Number(values[handle]);

    

          // [[handle0_down, handle0_up], [handle1_down, handle1_up]]

          var steps = sliderFormatSecond.noUiSlider.steps();

    

          // [down, up]

          var step = steps[handle];

    

          var position;

    

          // 13 is enter,

          // 38 is key up,

          // 40 is key down.

          switch ( e.which ) {

    

            case 13:

              setSliderHandle(handle, this.value);

              break;

    

            case 38:

    

              // Get step to go increase slider value (up)

              position = step[1];

    

              // false = no step is set

              if ( position === false ) {

                position = 1;

              }

    

              // null = edge of slider

              if ( position !== null ) {

                setSliderHandle(handle, value + position);

              }

    

              break;

    

            case 40:

    

              position = step[0];

    

              if ( position === false ) {

                position = 1;

              }

    

              if ( position !== null ) {

                setSliderHandle(handle, value - position);

              }

    

              break;

          }

        });

      });

    

      $('.box input').keypress(function (e) {

        if (e.which == 13) {

          return false;

        }

      });

    

      $('.m_detail-filters button[type=reset]').on('click', function(){

        sliderFormatSecond.noUiSlider.set([min, max]);

      });

    };

    function detailsFiltersHiddenS() {

      var sliderFormatThird = document.getElementById('depth-slider-format');

      var inpds = document.getElementById('depth-input-start');

      var inpdf = document.getElementById('depth-input-finish');

      var inputs = [inpds, inpdf];

      var min = 0;

      var max = 2000;

      noUiSlider.create(sliderFormatThird, {

        start: [ 0, 2000 ],

        step: 1,

        connect: true,

        range: {

          'min': [ min ],

          'max': [ max ]

        },

        pips: {

          mode: 'values',

          values: [min, max],

          density: 25,

          format: wNumb({

            decimals: 0,

            thousand: ' ',

            postfix: ' мм',

          })

        },

        format: wNumb({

          decimals: 0,

          thousand: ' ',

          postfix: ' мм',

        })

      });

    

      sliderFormatThird.noUiSlider.on('update', function( values, handle ) {

        inputs[handle].value = values[handle];

      });

    

    

    

      function setSliderHandle(i, value) {

        var r = [null,null];

        r[i] = value;

        sliderFormatThird.noUiSlider.set(r);

      }

    

      // Listen to keydown events on the input field.

      inputs.forEach(function(input, handle) {

    

        input.addEventListener('change', function(){

          setSliderHandle(handle, this.value);

        });

    

        input.addEventListener('keydown', function( e ) {

    

          var values = sliderFormatThird.noUiSlider.get();

          var value = Number(values[handle]);

    

          // [[handle0_down, handle0_up], [handle1_down, handle1_up]]

          var steps = sliderFormatThird.noUiSlider.steps();

    

          // [down, up]

          var step = steps[handle];

    

          var position;

    

          // 13 is enter,

          // 38 is key up,

          // 40 is key down.

          switch ( e.which ) {

    

            case 13:

              setSliderHandle(handle, this.value);

              break;

    

            case 38:

    

              // Get step to go increase slider value (up)

              position = step[1];

    

              // false = no step is set

              if ( position === false ) {

                position = 1;

              }

    

              // null = edge of slider

              if ( position !== null ) {

                setSliderHandle(handle, value + position);

              }

    

              break;

    

            case 40:

    

              position = step[0];

    

              if ( position === false ) {

                position = 1;

              }

    

              if ( position !== null ) {

                setSliderHandle(handle, value - position);

              }

    

              break;

          }

        });

      });

    

      $('.box input').keypress(function (e) {

        if (e.which == 13) {

          return false;

        }

      });

    

      $('.m_detail-filters button[type=reset]').on('click', function(){

        sliderFormatThird.noUiSlider.set([min, max]);

      });

    };

    

    if ( $('#width-input-start').length ) {

      detailsFiltersHidden();

      detailsFiltersHiddenS();

    }

    

    function faq() {

      var $item = $('.m_faq .item');

      $item.on('click', function(){

        $item.removeClass('open');

        $(this).addClass('open');

      });

    };

    faq();

    

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

    

    function stepsOrder() {

      // Step 1 functional

      $('.step-1 .default-icon').on('click', function(){

        $('.delivery-form').hide();

        $(this).next().show();

      });

      $('.step-1 .default-icon-active').on('click', function(){

        $(this).parent().hide();

      });

    

      // Get data from form

    

      // Step 1

      $('[data-order-delivery]').on('click', function(){

        $('[data-order-delivery]').removeClass('selected');

        $(this).addClass('selected');

    

        var orderDelivery = $(this).attr('data-order-delivery');

        $('[data-order="delivery"]').text(orderDelivery);

    

    

    

        if ( orderDelivery == 'Самовывоз' ) {

          $('[data-order="address"]').text('-');

        }

    

        $('.step-1 .step-next').on('click', function(){

          if ( orderDelivery == 'Самовывоз' ) {

            $(this).parents('.step').addClass('complete').removeClass('current').next().addClass('current');

            $('html, body').animate({

              scrollTop: $(".step-2").offset().top - 20

            }, 500);

          } else {

            var i = 0;

            var inputs = $('[data-order-delivery].selected input.required').length;

    

            $('[data-order-delivery].selected input.required').each(function(){

              if ( $(this).val() == '' ) {

                $(this).focus();

                return false;

              } else {

                i++

              };

    

              if ( i == inputs ) {

                var orderAddress = $('[data-order-delivery].selected input.order-delivery-address').val();

                var orderIndex = $('[data-order-delivery].selected input.order-delivery-index').val();

                $('[data-order="address"]').html(orderIndex+', '+orderAddress);

                $(this).parents('.step').addClass('complete').removeClass('current').next().addClass('current');

                $('html, body').animate({

                  scrollTop: $(".step-2").offset().top - 20

                }, 500);

              };

            });

          }

    

        });

      });

    

    

      // Step 2

      $('.step-2 .step-next').on('click', function(){

        var orderDay = $('.order-date-day').val();

        var orderMonth = $('.order-date-month').val();

        var orderFrom = $('.order-date-from').val();

        var orderTo = $('.order-date-to').val();

    

    

        if ( orderDay == '') {

          orderDay = '-';

        }

        if ( orderMonth == '') {

          orderMonth = '-';

        }

        var step2resultDate = orderDay +' '+ orderMonth;

    

        if ( !orderFrom == '') {

          var step2resultFrom =  'с '+orderFrom+' ';

        } else {

          step2resultFrom = '-';

        }

        if ( !orderTo == '') {

          var step2resultTo =  'до '+orderTo;

        } else {

          step2resultTo = ' -';

        }

        var step2resultTime = step2resultFrom + step2resultTo;

        $('[data-order="time"]').html(step2resultDate+', '+step2resultTime);

        $(this).parents('.step').addClass('complete').removeClass('current').next().addClass('current');

        $('html, body').animate({

          scrollTop: $(".step-3").offset().top - 20

        }, 500);

      });

    

      $('.step-prev').on('click', function(){

        $(this).parents('.step').removeClass('current').prev().addClass('current');

        $('html, body').animate({

          scrollTop: $(this).parents('.step').prev().offset().top - 20

        }, 500);

      });

    

      $('.form-pay input').on('change', function(){

        if ( $(this).prop('checked') ) {

          $('.form-pay input').prop('checked', false);

          $(this).prop('checked', true);

        }

      });

    

      // Step 3

      $('.step-3 .step-next').on('click', function(){

    

        $('[name="order-pay"]').each(function(){

          if ( $(this).prop('checked') ) {

            $('[data-order="pay"]').html($(this).val());

          }

        });

    

        var c = 0;

        var checkboxes = $('[name="order-pay"]').length;

    

        $('[name="order-pay"]').each(function(){

          if ( $(this).prop('checked') ) {

            return false;

          } else {

            c++

          };

        });

        if ( c == checkboxes ) {

          return false;

        } else {

          $(this).parents('.step').addClass('complete').removeClass('current').next().addClass('current');

          $('html, body').animate({

            scrollTop: $(".step-4").offset().top - 20

          }, 500);

        }

    

    

      });

    

    

    

      // Step 4    

      $('.order-steps').validate({

          submit: {

              settings: {

                  clear: "keypress",

                  button: '.step-4 button.step-next'

              },

              callback: {

                onError: function() {

                  $('#step-4-email').focus();

                },

                onSubmit: function() {

                  var i = 0;

                  var inputs = $('.step-4 input.required').length;

    

                  $('.step-4 input.required').each(function(){

                    if ( $(this).val() == '' ) {

                      $(this).focus();

                      return false;

                    } else {

                      i++

                    };

    

                    if ( i == inputs ) {

                      var orderName = $('.order-delivery-name').val();

                      var orderEmail = $('.order-delivery-email').val();

                      var orderTel = $('.order-delivery-tel').val();

    

                      $('[data-order="username"]').html(orderName);

                      $('[data-order="email"]').html(orderEmail);

                      $('[data-order="tel"]').html(orderTel);

    

                      $(this).parents('.step').addClass('complete').removeClass('current').next().addClass('current');

                      $('html, body').animate({

                        scrollTop: $(".step-final").offset().top - 20

                      }, 500);

                    };

                  });

                  return false;

                }

              }

          }

      });

    

      $('.step-prev').on('click', function(){

        $(this).parents('.step').removeClass('current').prev().addClass('current');

        $('html, body').animate({

          scrollTop: $(this).parents('.step').prev().offset().top - 20

        }, 500);

      });

    };

    stepsOrder();

    

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

                $('.popup button[type=submit]').on('click', function(e){

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

    

    function sidebarCategories() {

      $('.m_sidebar-categories .dropdown-aside-header a').on('click', function(){

        $(this).parent().parent().toggleClass('open');

      });

    

      $('.dropdown-aside-categories-header a').on('click', function(){

        $(this).parent().toggleClass('open');

      });

    };

    sidebarCategories();

    

    function sidebarFilters() {

      $('.m_sidebar-filters .dropdown-aside-header a').on('click', function(){

        $(this).parent().parent().toggleClass('open');

      });

    

      var sliderFormat = document.getElementById('sidebar-slider-format');

      var input0 = document.getElementById('sidebar-input-start');

      var input1 = document.getElementById('sidebar-input-finish');

      var inputs = [input0, input1];

      var min = 400;

      var max = 111410;

      noUiSlider.create(sliderFormat, {

        start: [ 400, 111410 ],

        step: 100,

        connect: true,

        range: {

          'min': [ min ],

          'max': [ max ]

        },

        pips: {

          mode: 'values',

          values: [min, max],

          density: 25,

          format: wNumb({

            decimals: 0,

            thousand: ' ',

            postfix: ' руб.',

          })

        },

        format: wNumb({

          decimals: 0,

          thousand: ' ',

          postfix: ' руб.',

        })

      });

    

      sliderFormat.noUiSlider.on('update', function( values, handle ) {

        inputs[handle].value = values[handle];

      });

    

    

    

      function setSliderHandle(i, value) {

        var r = [null,null];

        r[i] = value;

        sliderFormat.noUiSlider.set(r);

      }

    

      // Listen to keydown events on the input field.

      inputs.forEach(function(input, handle) {

    

        input.addEventListener('change', function(){

          setSliderHandle(handle, this.value);

        });

    

        input.addEventListener('keydown', function( e ) {

    

          var values = sliderFormat.noUiSlider.get();

          var value = Number(values[handle]);

    

          // [[handle0_down, handle0_up], [handle1_down, handle1_up]]

          var steps = sliderFormat.noUiSlider.steps();

    

          // [down, up]

          var step = steps[handle];

    

          var position;

    

          // 13 is enter,

          // 38 is key up,

          // 40 is key down.

          switch ( e.which ) {

    

            case 13:

              setSliderHandle(handle, this.value);

              break;

    

            case 38:

    

              // Get step to go increase slider value (up)

              position = step[1];

    

              // false = no step is set

              if ( position === false ) {

                position = 1;

              }

    

              // null = edge of slider

              if ( position !== null ) {

                setSliderHandle(handle, value + position);

              }

    

              break;

    

            case 40:

    

              position = step[0];

    

              if ( position === false ) {

                position = 1;

              }

    

              if ( position !== null ) {

                setSliderHandle(handle, value - position);

              }

    

              break;

          }

        });

      });

    

      $('.box input').keypress(function (e) {

        if (e.which == 13) {

          return false;

        }

      });

    

      $('.m_sidebar-filters button[type=reset]').on('click', function(){

        sliderFormat.noUiSlider.set([min, max]);

      });

    };

    

    

    if ( $('.m_sidebar-filters').length ) {

      sidebarFilters();

    }

    

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