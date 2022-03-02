const petsArray = ["dog", "cat", "fish", "mouse", "dodo"];
const ikeaArray = [
  "chair red",
  "table red",
  "sofa black",
  "bed",
  "desk",
  "chair blue",
  "table blue",
  "sofa blue",
  "bed blue",
  "desk blue",
];
$(document).ready(() => {
  //on "input" event will happen every time the user modifies the input
  $("#text").on("input", () => {
    //get val of search input
    let txt = $("#text").val();
    //find whats in the array that matches the search input
    let filterArr = petsArray.filter((pet) => {
      return pet.startsWith(txt);
    });
    let l_O_Animals = $("#list-of-animals");
    //clear the list
    l_O_Animals.empty();
    //add the filtered array to the list
    for (let pet of filterArr) {
      l_O_Animals.append(`<li class="list-group-item">${pet}</li>`);
    }
  });

  $("#ikea").on("input", () => {
    let ikea_Search = $("#ikea").val();
    let filter_Ikea = ikeaArray.filter((ikea) => {
      return ikea.includes(ikea_Search);
    });
    let l_O_Ikea = $("#list-of-ikea");
    l_O_Ikea.empty();
    for (let ikea of filter_Ikea) {
      l_O_Ikea.append(`<li class="list-group-item">${ikea}</li>`);
    }
  });
});
