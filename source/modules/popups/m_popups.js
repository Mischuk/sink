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