// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked


$("img#first").on("click", function(){
  $("figure img").attr('src', "./img/1.jpg");
});

$("img#second").on("click", function(){
  $("figure img").attr('src', "./img/2.jpg");
});

$("img#third").on("click", function(){
  $("figure img").attr('src', "./img/3.jpg");
});

$("img#fourth").on("click", function(){
  $("figure img").attr('src', "./img/4.jpg");
});
