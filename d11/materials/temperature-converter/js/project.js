// parseInt()
// a.toString()

// When the button is clicked 
//   grab value from input
//   convert it 
//   put the new value into the dom


$("button").on("click", function() {
  var Celsius = $("input").val();
  var Fahrenheit = Celsius * 9/5 + 32;
  $("#converted").text(Fahrenheit);
})
