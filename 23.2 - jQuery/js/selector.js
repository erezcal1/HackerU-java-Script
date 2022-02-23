//id only
// document.getElementById("id");

//get element like css do
// document.querySelector("id", name, tagname, "class");

//get element like css do
// $("id", name, tagname, "class");

//js
// window.addEventListener("load", () => {
//   document.getElementById("btn").addEventListener("click", () => {
//     document.body.style.backgroundColor = "red";
//   });
// });

//jQuery
// $(document).ready(() => {
//   $("#btn").click(() => {
//     document.body.style.backgroundColor = "red";
//   });
// });

//create 2 buttons 1 will change the bgc to red and other to white
$(document).ready(() => {
  $("#red").click(() => {
    document.body.style.backgroundColor = "red";
  });
  $("#white").click(() => {
    document.body.style.backgroundColor = "white";
  });
});
