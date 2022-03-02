$(document).ready(() => {
  let username_Good = false;
  let password_Good = false;
  $("#username").blur(() => {
    let username = $("#username").val();
    if (username.length >= 2) {
      username_Good = true;
      $("#username").css("border", "2px solid green");
    }
  });
  $("#password").blur(() => {
    let password = $("#password").val();
    if (password.length >= 2) {
      password_Good = true;
      $("#password").css("border", "2px solid green");
    }
  });
  $("#btn").click(() => {
    if (password_Good && username_Good) {
      $("#pass_And_name").text(
        "password:" +
          $("#password").val() +
          " " +
          "username:" +
          $("#username").val()
      );
    }
  });
});
