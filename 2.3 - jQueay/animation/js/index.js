$(document).ready(() => {
  // $("#btn").click(() => {
  //   $("#div").animate(
  //     {
  //       width: "300px",
  //       height: "300px",
  //     },
  //     2000,
  //     () => {
  //       $("#div").animate({
  //         width: "100px",
  //         height: "100px",
  //       });
  //     }
  //   );
  // });
  $("#btn").click(() => {
    $("#div")
      .animate({ left: "100px" })
      .animate({ top: "100px" })
      .animate({ left: "0px" })
      .animate({ top: "30px" });
  });
  $("#stop-btn").click(() => {
    //stop the current animation
    // $("#div").stop();
    //stop all animations
    $("#div").stop(true);
  });
});
