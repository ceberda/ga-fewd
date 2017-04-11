//clicks on the button, 
//toggle between hiding and showing content

$(".file").on("click", function() {
  $('#filemenu').toggle();
 });

$(".file").on("focusout", function(){
  $('#filemenu').hide();
})


$(".edit").on("click", function() {
  $('#editmenu').toggle();
 });

$(".edit").on("focusout", function(){
  $('#editmenu').hide();
})