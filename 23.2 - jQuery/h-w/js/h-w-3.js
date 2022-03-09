let arr = ["Lion", "Tiger", "Elephant", "Giraffe"];
$(document).ready(() => {
  let i = 0;
  for (; i < arr.length; i++) {
    $("#animalList").append(
      `<li class="li"><button id="${i}">${arr[i]}</button></li>`
      // `<li id="${i}"><button>${arr[i]}</button></li>`
    );
  }

  $("#btn").click(() => {
    let animalName = $("#animal");
    if (animalName.val() != "") {
      $("#animalList").append(
        `<li class="li"><button id="${i}">${animalName.val()}</button></li>`
      );
    }
    i++;
  });

  $("#my_Form").on("click", "button", function (e) {
    // let index = $(this).attr("id");
    let index = $("button").index(this);
    console.log(index);

    $(".container").css("display", "block");

    $(".close").click(() => {
      $(".container").css("display", "none");
    });

    $("#text").blur(() => {
      if ($("#text").val() != "") {
        $("#animalList")
          .children()
          .eq(index)
          .html(`<button id="${index}">` + $("#text").val() + `</button>`);
        console.log(index);
      }
    });

    $("#remove").click(() => {
      console.log(index);
      // $("li").not($("#index")).remove();
      $("ul #index").remove();
      // $("#animalList").children().eq(index).remove();
      // $(this).closest(".li").remove();
    });

    e.preventDefault();
  });
});
