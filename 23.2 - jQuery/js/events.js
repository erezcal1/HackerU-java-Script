//this event will happen when the page is loaded
$(document).ready(() => {
  console.log("this event will happen when the page is loaded");

  //this event will happen when a button is clicked
  $("#btn").click(() => {
    console.log("this event will happen when the button is clicked");
  });

  //this event will happen when the button is double clicked
  $("#btn").dblclick(() => {
    console.log("this event will happen when the button is double clicked");
  });

  //this event will happen when hovering the button
  $("#btn").mouseenter(() => {
    console.log("this event will happen when the mouse enters the button");
  });

  //this event will happen when the mouse leaves the button
  $("#btn").mouseleave(() => {
    console.log("this event will happen when the mouse leaves the button");
  });

  $("#txt").focus(() => {
    console.log("this event will happen when the textbox is focused");
  });
  $("#txt").blur(() => {
    console.log("this event will happen when you leave the textbox");
  });
});
