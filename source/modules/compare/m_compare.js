function compareCalc() {
  var head_table = $('.m_compare .head').height();
  var item_table = 400;
  $('.m_compare .body').height(head_table + item_table + 50);
  if ( $('html').hasClass('no-touchevents') ) {
    // $('.m_compare .body').perfectScrollbar('update');
    $('.m_compare .body').perfectScrollbar();
  }

  var columnWidth = $('.m_compare .body .table .item').width();
  var columnSum = $('.m_compare .body .table .item').length;
  //if ( columnSum > 4) {
  //  $('.m_compare .body .table').width(columnSum*(columnWidth));
  //  $('.m_compare .body .table .item').width(columnWidth).addClass('table-cell');
  //}
  $('.m_compare .body .table').width(columnSum*(columnWidth));
  $('.m_compare .body .table .item').width(columnWidth).addClass('table-cell');

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