var argentina1_img = ["argentina_1_1", "argentina_1_2", "argentina_1_3"];
var argentina2_img = ["argentina_2_1", "argentina_2_2", "argentina_2_3"];
var argentina3_img = ["argentina_3_1", "argentina_3_2", "argentina_3_3"];

setInterval(function () {
  var random_num = Math.floor(Math.random() * argentina1_img.length);
  var random_img = argentina1_img[random_num];
  $(".argentina1")
    .attr("src", "../images/argentina_imgs/" + random_img + ".jpeg")
    .fadeIn(400)
    .fadeOut(400)
    .fadeIn(400);
}, 5000);

setTimeout(function () {
  setInterval(function () {
    var random_num = Math.floor(Math.random() * argentina2_img.length);
    var random_img = argentina2_img[random_num];
    $(".argentina2")
      .attr("src", "../images/argentina_imgs/" + random_img + ".jpeg")
      .fadeIn(400)
      .fadeOut(400)
      .fadeIn(400);
  }, 5000);
}, 500); // 1 second delay for argentina2

setTimeout(function () {
  setInterval(function () {
    var random_num = Math.floor(Math.random() * argentina3_img.length);
    var random_img = argentina3_img[random_num];
    $(".argentina3")
      .attr("src", "../images/argentina_imgs/" + random_img + ".jpeg")
      .fadeIn(400)
      .fadeOut(400)
      .fadeIn(400);
  }, 5000);
}, 1000);
