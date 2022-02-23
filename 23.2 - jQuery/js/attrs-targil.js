//create an array of images
//create img to display one image
//create btn to display next image
//create btn to display previous image

let img_Arr = [
  "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg",
];

let img_Index = 0;

$(document).ready(() => {
  chage_Image();

  $("#next").click(() => {
    img_Index++;
    if (img_Index >= img_Arr.length) {
      img_Index = 0;
    }
    chage_Image();
  });
  $("#prev").click(() => {
    img_Index--;
    if (img_Index < 0) {
      img_Index = img_Arr.length - 1;
    }
    chage_Image();
  });
});
chage_Image = () => {
  let img_Element = $("#img");
  img_Element.attr("src", img_Arr[img_Index]);
};
