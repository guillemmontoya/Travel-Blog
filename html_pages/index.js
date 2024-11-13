$(document).ready(function () {
  // Toggle dropdown menu on click
  $(".menu-button").click(function () {
    $(".dropdown-menu").slideToggle(300);
  });

  // Close dropdown when clicking outside
  $(document).click(function (event) {
    if (!$(event.target).closest(".menu-button, .dropdown-menu").length) {
      $(".dropdown-menu").slideUp(300);
    }
  });
});

var jesusita_img = [
  "Jesusita1",
  "Jesusita2",
  "Jesusita3",
  "Jesusita4",
  "Jesusita5",
  "Jesusita6",
  "Jesusita7",
  "Jesusita8",
  "Jesusita9",
  "Jesusita10",
  "Jesusita11",
  "Jesusita12",
  "Jesusita14",
  "Jesusita16",
  "Jesusita17",
];

var position = [
  0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80,
];

setInterval(function () {
  var random_num = Math.floor(Math.random() * jesusita_img.length);
  var random_img = jesusita_img[random_num];

  var random_position1 = position[Math.floor(Math.random() * position.length)];
  var random_position2 = position[Math.floor(Math.random() * position.length)];
  var random_position3 = position[Math.floor(Math.random() * position.length)];
  var random_position4 = position[Math.floor(Math.random() * position.length)];

  $(".jesu").fadeOut(500, function () {
    $(this)
      .attr("src", "../images/Jesusita/" + random_img + ".png")
      .css({
        top: random_position1 + "%",
        left: random_position2 + "%",
        bottom: random_position3 + "%",
        right: random_position4 + "%",
      })
      .fadeIn(500);
  });
}, 3000);
