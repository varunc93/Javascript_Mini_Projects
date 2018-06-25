
var colors = [];
generatecolors(6);

var squares = document.querySelectorAll(".square");
var header = document.querySelector("h1");
var response = document.querySelector("#response");
var RGBtitle = document.querySelector("#RGB");
var newcolors = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var flag = 2;
var pickedColor = randomcolor();

RGBtitle.textContent = pickedColor;

newcolors.addEventListener("click", reseteverything);

easybtn.addEventListener("click",function(){
  flag = 1;
  easybtn.classList.add("selected");
  hardbtn.classList.remove("selected");
  reseteverything();
  for(var i = 3; i<6; i++){
    document.querySelectorAll(".square")[i].style.display = "none";
  }
})

hardbtn.addEventListener("click",function(){
  flag = 2;
  hardbtn.classList.add("selected");
  easybtn.classList.remove("selected");
  reseteverything();
  for(var i = 3; i<6; i++){
    document.querySelectorAll(".square")[i].style.display = "block";
  }
})


for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedcolor = this.style.backgroundColor;
    if(clickedcolor === pickedColor){
      for(var j = 0; j < squares.length; j++){
        squares[j].style.backgroundColor = pickedColor;
      }
      header.style.backgroundColor = pickedColor;
      response.textContent = "Correct!";
      newcolors.textContent = "Play Again?";
    }
    else{
      this.style.backgroundColor = "#232323";
      response.textContent = "Try Again!";
    }
  });
}

function reseteverything(){
  if (flag === 1)
    generatecolors(3);
  else
    generatecolors(6);
  pickedColor = randomcolor();
  RGBtitle.textContent = pickedColor.toUpperCase();
  header.style.backgroundColor = "steelblue";
  response.textContent = "";
  newcolors.textContent = "New Colors";
  for(var i = 0; i < colors.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
}
function randomcolor(){
  var option = Math.floor(Math.random()*colors.length);
  return colors[option];
}

function generatecolors(num){
  colors = [];
  for(var i = 0; i < num; i++){
    colors[i] = "rgb(" + Math.floor(Math.random()*256) + ", "
                + Math.floor(Math.random()*256) + ", "
                + Math.floor(Math.random()*256) + ")";
  }
}
