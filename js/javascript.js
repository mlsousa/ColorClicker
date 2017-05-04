
function random_color()
{
   var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
   var color = "#";
   for(var i = 0; i < 6; i++)
   {
    x = Math.floor((Math.random()*16))
    color += rgb[x];
   }
   return color;
}

$(document).ready(function(){
});

$(document).on('click', '#large_box', function() {
  var color1 = random_color();
  var color2 = random_color();
  $('#large_box').css('background-color', color1);
  $('#large_box').children().css('background-color', color2);

   $('.side_box').click(function(event){
     var color3 = random_color();
     $(this).siblings().css('background-color', color3);
     	  event.stopPropagation();
   })
   $('.middle_box').click(function(event){
     var color4 = random_color();
     $(this).parent().css('background-color', color4);
	  event.stopPropagation();
  });
});
