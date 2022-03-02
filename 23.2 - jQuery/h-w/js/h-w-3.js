let arr = ["Lion", "Tiger", "Elephant", "Giraffe"];
$(document).ready(() => {
  for (let i = 0; i < arr.length; i++) {
    $("#animalList").append(`<li><button>${arr[i]}</button></li>`);
  }

  $("#btn").click(() => {
    let animalName = $("#animal");
    if (animalName.val() != "") {
      $("#animalList").append(`<li><button>${animalName.val()}</button></li>`);
    }
  });
});
