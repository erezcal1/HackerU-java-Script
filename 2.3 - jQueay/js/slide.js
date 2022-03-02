$(document).ready(() => {
  $("#slide-up").click(() => {
    $("#div").slideUp();
  });
  $("#slide-down").click(() => {
    $("#div").slideDown();
  });
  $("#slide-toggle").click(() => {
    $("#div").slideToggle();
  });
  $("#btn").click(() => {
    $("#list").slideToggle();
  });
});
