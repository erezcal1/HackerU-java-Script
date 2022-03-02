$(document).ready(() => {
  $("#add-Class").click(() => {
    $(".div").addClass("green-screen");
  });
  $("#remove-Class").click(() => {
    $(".div").removeClass("green-screen");
  });
  $("#toggle-Class").click(() => {
    $(".div").toggleClass("green-screen");
  });
  //change the class of the bootstrap button
  //from primary to success
  $("#btn").click(() => {
    $("#btn").toggleClass("btn-primary");
    $("#btn").toggleClass("btn-success");
    // if ($(".btn").hasClass("btn-primary")) {
    // $(".btn").removeClass("btn-primary");
    // $(".btn").addClass("btn-success");
    // } else {
    // $(".btn").removeClass("btn-success");
    // $(".btn").addClass("btn-primary");
    // }
  });
});
