$(document).ready(function() {
  $(".front").click(function() {
    $(this).fadeToggle();
    $(".back").fadeToggle();
  });
});