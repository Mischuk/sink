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