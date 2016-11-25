function faq() {
  var $item = $('.m_faq .item');
  $item.on('click', function(){
    $item.removeClass('open');
    $(this).addClass('open');
  });
};
faq();