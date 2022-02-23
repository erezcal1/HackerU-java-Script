//validation to textbox
$(document).ready(() => {
  //when the user leave the textbox check if the text is empty
  $("#txt").blur(() => {
    let txt = $("#txt");
    if (txt.val() == "") {
      document.getElementById("txt").style.border = "2px solid red";
    } else {
      document.getElementById("txt").style.border = "2px solid green";
    }
  });
});
