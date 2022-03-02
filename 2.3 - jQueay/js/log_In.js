$(document).ready(() => {
  $("#emailHelp").hide();
  $("#exampleInputPassword1").blur(() => {
    let val = $("#exampleInputPassword1").val();
    if (val.length >= 6 && val.length <= 20) {
      // $("#passHelp").hide();
      $("#passHelp").fadeOut(1500);
    } else {
      // $("#passHelp").show();
      $("#passHelp").fadeIn(1000);
    }
  });
  $("#exampleInputEmail1").blur(() => {
    let val2 = $("#exampleInputEmail1").val();
    let regex = new RegExp(
      "^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
    );
    if (regex.test(val2)) {
      $("#emailHelp").fadeIn(1500);
    } else {
      $("#emailHelp").fadeOut(1000);
    }
  });
});
