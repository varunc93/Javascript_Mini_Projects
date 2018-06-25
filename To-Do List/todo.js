$("ul").on("click","li",function(){
  $(this).toggleClass("strike");
});

$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(400, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var str = $(this).val();
    $("#items").append('<li><span><i class="fas fa-minus-circle"></i></span> ' + str + '</li>');
    $(this).val("");
  }
});

$("#toggle").on("click", function(){
  $("input[type='text']").fadeToggle();
});
