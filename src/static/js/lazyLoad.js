$(document).ready(function() {
  $("img").lazyload({
    threshold: 1000,
    effect: "fadeIn"
  });
});
