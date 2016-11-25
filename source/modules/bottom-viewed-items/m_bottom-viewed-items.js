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