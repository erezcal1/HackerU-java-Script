$(document).ready(() => {
  //add new tag to existing tag/element
  //will add at the end of the tag
  $("#lorem-Box").append('<a href="https://www.google.com">link to google</a>');

  //add new tag to existing tag/element
  //will add at the beginning of the tag
  $("#lorem-Box").prepend("<strong> beginning </strong>");
});
