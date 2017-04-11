

$("button").on("click", function() {
  var targetCity = $("input").val();
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ targetCity +"&units=imperial&appid=04db64e55f93ea95750bf4b2bd3dc763", function(data) {
    var temp = data["main"]["temp"];
    var icon = data["weather"][0]["icon"] + (".png");
    console.log(icon);
    $(".temperature").text(temp);
    $("img").attr("src", "http://openweathermap.org/img/w/" + icon);
  })
});

