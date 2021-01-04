$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 1) {
      $('.topText').css('color', '#000');
    } else {
      $('.topText').css('color', '#fff');
    }
  });
});
