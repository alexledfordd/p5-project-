//variables
let score=0
let pieceX;
let pieceY;
let mouseCollide;
let scoreP; //text for score

let timer;

function setup(){
  //Purple fills screen
  createCanvas(windowWidth, windowHeight)
  //Purple color


  //styling the score text with CSS
  scoreP = createP("");
  scoreP.position( windowWidth/2.5,10);// text position
  scoreP.style("font-size", "60px"); //text size
  scoreP.style("color", "black"); //text color
  textAlign(CENTER)

  for(let i=0; i<windowWidth; i=i+10){
    //print(i);
    textAlign(CENTER)
  }

  background(102,102,255)
  //variables for random circle
  pieceX = random(windowWidth)
  pieceY =random(windowHeight)


  fill(255);
  //white random circle
  circleA=ellipse(pieceX, pieceY, 20, 20)

  for(let i=0; i<500; i++){

    fill(255,255,153)
    //all the yellow circles
    x = ellipse(random(windowWidth), random(windowHeight), 20, 20)
  }

timer = millis();
}



function draw(){

  textSize(30)
    text("Time: "+ score + "00", windowWidth/12,50)


  if(millis() - timer >= 20000){
    timer = millis()
    print(timer)
    //print("one second")

  }
  mouseCollide=dist(mouseX,mouseY,pieceX,pieceY)
  fill(0)

  //update the html score text
  scoreP.html("Score: " + score);

  if(mouseCollide < 10){
    score++
    resetGame()

  }
  if(timer >= 5000){
    location.reload()
      alert("Time's up! Press 'OK' to play again!");
  }

}
function resetGame(){
  background(102,102,255)
  //variables for random circle
  pieceX = random(windowWidth)
  pieceY =random(windowHeight)


  fill(255);
  //white random circle
  circleA=ellipse(pieceX, pieceY, 20, 20)

  for(let i=0; i<500; i++){

    fill(255,255,153)
    //all the yellow circles
    x = ellipse(random(windowWidth), random(windowHeight), 20, 20)
  }

}
function keyPressed(){
if(key=='x'){
scoreP.html("Score: " + score);
  }
}

//
function makeAlert(){
  };

 setInterval(makeAlert, 15000);
