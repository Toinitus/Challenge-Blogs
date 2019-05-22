
//Afficher / Cacher Search button
document.getElementById('buttonSearch').onclick = function() {
	document.getElementById('inputSearch').classList.toggle('show');
}


			/* TROLL - Mouse Effect */
if (window.matchMedia("(min-width: 768px)").matches) {
  $(document).ready(function(){
  
  var mousePos = {};

 function getRandomInt(min, max) {
   return Math.round(Math.random() * (max - min + 1)) + min;
 }
  
  $(window).mousemove(function(e) { //Des que le curseur bouge, sa position est enregistré dans les variables (x : horiz; y:vert)
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
  });
  
  $(window).mouseleave(function(e) { //Des que le curseur sort de la fenetre, sa position est mise renitialise 
    mousePos.x = -1;
    mousePos.y = -1;
  });
  
  var draw = setInterval(function(){ //Repetition toutes les 0.3 sec (1 sec = 1000)
    if(mousePos.x > 0 && mousePos.y > 0){
      
      var range = 25;
      
      var color = "background: rgb(217, 122, 28);";
      
      var sizeInt = getRandomInt(10, 20);
      size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
      
      var leftRandom = getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range);
      var left = "left: " + leftRandom + "px;";
      
      var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 

      var style = left+top+color+size;

      // console.log(leftRandom);
      // console.log(window.innerWidth * 0.98);

      if (leftRandom < (window.innerWidth * 0.97)) {
  	      $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
      }
    }
  }, 300);
});
}


