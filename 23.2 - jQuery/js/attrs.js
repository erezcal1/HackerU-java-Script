$(document).ready(() => {
  //val of input
  let txt = $("#txt").val();

  //set value of input
  $("#txt").val("Hello World");

  //get content as html of div/tag/element
  let contentData = $("#lorem-Box").html(); //document.getElementById("lorem-Box").innerHTML;
  console.log(contentData);

  //set html to div/tag/element
  $("#lorem-Box").html("<h1> this is new html </h1>");

  //get content as text of the div/tag/element
  let textData = $("#lorem-box-txt").text();
  console.log(textData);

  //set text to div/tag/element
  $("#lorem-box-txt").text("<h1> this is new text </h1>");

  //get attribute of div/tag/element
  let attrValue = $("#img").attr("alt");
  console.log(attrValue);
});
