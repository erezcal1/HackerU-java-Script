$(document).ready(() => {
  //add new tag to existing tag/element
  //will add at the end of the tag
  let arr = ["Lion", "Tiger", "Elephant", "Giraffe"];
  for (let i = 0; i < arr.length; i++) {
    $("#list").append(`<li class="list-group-item">${arr[i]}</li>`);
  }
});
