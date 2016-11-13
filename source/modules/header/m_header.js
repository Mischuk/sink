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


