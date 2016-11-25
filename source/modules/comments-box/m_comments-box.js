$('[data-comments="scroll"]').on('click', function(){
  $('html, body').animate({
    scrollTop: $(".m_comments-post").offset().top
  }, 500);
});