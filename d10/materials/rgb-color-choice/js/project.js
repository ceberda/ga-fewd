$("a").on("click", function() {
  var redColor = $("input#red").val();
  var greenColor = $("input#green").val();
  var blueColor = $("input#blue").val();
  var rgbValue = ("rgb("+ redColor + "," + greenColor + ","  + blueColor +")");
  console.log(rgbValue)
  $("#wrapper").css("background", rgbValue);
});

