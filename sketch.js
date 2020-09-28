var dog, happyDog, database, foodS, foodStock,canvas;

function preload()
{
	dog = loadImage("images/dogImg.png");
	happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  canvas = createCanvas(500, 500);
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog);
}
  drawSprites();
textSize(30);
fill("red");
stroke(30);
text("Note: Press Up Arrow to feed dog",100,100);
}

function readStock(data){
  foodS=data.val();
  }
  function writeStock(x){
    if(x<=0){
      x=0;
    }
    else{
      x=x-1;
    }
    database.ref('/').update({food:x})
  }

