var rooms = [elevator, firstFloor, secondFloor, thirdFloor, fourthFloor, fifthFloor, sixthFloor];  

function elevator(floor){
  floor =  prompt(" pick a floor ");
    rooms[floor]();
    
}  

/* General function for popups at each floor. */
function loadPopUp(image, game){
  let popup = document.getElementById("popup");
  popup.innerHTML="";
  let popimg = document.createElement("img");
  popimg.addEventListener("click",game);
  popimg.id ="pop-image";
  popimg.src=image;
  popup.appendChild(popimg);
  popup.style.display="block";
}

/* Put all per-floor functions inside the parent */
function firstFloor(){
  document.getElementById("floorBox").src = "elevator.png";
  loadPopUp("janitorsCloset.png", firstMap);
  let candle = document.getElementById("candleRiddle");
  candle.style.zIndex = 101;
  let answer = document.getElementById("answer");
  answer.style.zIndex = 101;
  // firstMap();

  function firstMap(){
    this.setAttribute("usemap", "first-map");
    let current= document.getElementById("firstFloor");
     //show background
     //run function
 }

} //close parent


function secondFloor(){  
  let candle = document.getElementById("candleRiddle");
  candle.style.zIndex = 0;
  let answer = document.getElementById("answer");
  answer.style.zIndex = 0;
  let thisFloor = document.getElementById("floorBox");
  thisFloor.src = "science.gif";
  thisFloor.addEventListener("click", showGame);
  // secondMap();

  function showGame(){
    loadPopUp("desk.png",loadPuzzle);
  }
  function loadPuzzle(){
    let popimg = document.getElementById("pop-image");
    popup.removeChild(popimg);
    const iframe = document.createElement("iframe");
    iframe.src = "puzzle/index.html";
    popup.appendChild(iframe);
  }

  function secondMap(){
    this.setattribute("use","second-Map")
    let current= document.getElementById("secondFloor");
  }

} // close parent


function thirdFloor(){
  alert("Third Floor");
}

function fourthFloor(){
  alert("Fourth Floor");

}
function fifthFloor(){
  alert(" Fifth Floor"); 
}
function sixthFloor(){
  alert("Sixth Floor");
}
function seventhFloor(){
  alert(" Seventh Floor");
}
function eighthFloor(){

}
function groundFloor(){
  let candle = document.getElementById("candleRiddle");
  candle.style.zIndex = 0;
  let answer = document.getElementById("answer");
  answer.style.zIndex = 0;
  document.getElementById("popup").innerHTML="";
  document.getElementById("floorBox").src = "elevator.png";
  alert("Goodbye");
}
