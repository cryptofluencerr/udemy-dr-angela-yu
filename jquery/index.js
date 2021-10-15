$(document).on("keydown", function (e) {
  $(".hello").text(e.key);
});

$("h1").prepend("<button>Hello</button>");

// $("button").click(function (e) {
//   e.preventDefault();
//   $("h1").
// });
