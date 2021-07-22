$(document).ready(function () {
  $("button").hover(function () {
    $("ul").toggleClass("active");
  });
  $("li").hover(function () {
    $("ul").toggleClass("active");
  });
});
