$(document).ready(function() {
  $("div.card .front").click(function() {
    $(this).next().fadeToggle("back");
  });
});