var movieFn = function(data){
  var title = data["Title"];
  var titleAndRating = data["Title"] + " (" + data["Rated"] + ")";
  $("h1").text(titleAndRating);
  $("h4").text(data["Year"]);
  $("img").attr("src", data["Poster"]);
  $("p.plot").text(data["Plot"])
  
  var li = $("<li>" + data["Title"] + "</li>");
    $("ul.search-history").append(li)
  };

$("button").on("click", function() {
  var movieSearch = $("input").val();
  $.getJSON("http://omdbapi.com/?t=" + movieSearch, movieFn);
});


$("ul").on("click", function(event) {
  var searchResults = $(event.target).text();
  $.getJSON("http://omdbapi.com/?t=" + searchResults, movieFn);
});



// $("button").on("click", function() {
//   var title = $("input").val();
//   $.getJSON("http://omdbapi.com/?t=" + title, function(data){
//     var titleAndRating = data["Title"] + " (" + data["Rated"] + ")";
//     $(".title").text(titleAndRating);
//     $(".year").text(data["Year"]);
//     $(".poster").attr("src", data["Poster"]);
//     $(".plot").text(data["Plot"]);

//     var li = $("<li>" + data["Title"] + "</li>");
//     $("ul.search-history").append(li);
//   });
// })

// $("ul").on("click", function(event) {
//   var searchResults = $(event.target).text();
//   $.getJSON("http://omdbapi.com/?t=" + searchResults); 
//   })



