


// $("div").on("click", function() {
//   var box = $("input.box").val();
//   $(".box1").css("background", "blue");
//   $(".box2").css("background", "green");
//   $(".box").text("HELLO!");

// });



$("div").css("background", "blue");
$("div").html("<p>Hello</p>");

var shouldGetBigger = true;

$("#one").on("click", function(){
  $("#one").toggleClass("bigger");
})
//   if (shouldGetBigger === true) {
//     $("#one").addClass("bigger");
//     shouldGetBigger = false;
//   } else {
//     $("#one").removeClass("bigger");
//     shouldGetBigger = true;
//  }
// })

$("#two").on("click", function(){
  $("#two").addClass("bigger");
  $("#two").removeClass("bigger");
  // $("#two").css("height", "500px");
  // $("#two").css("width", "500px");
})

