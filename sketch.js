//Create variables here
var dog,happyDog,database,foodS,foodStock

function preload()
{
  //load images here
  dogimg1 = loadImage("images/dogimg.png")
  dogimg2 = loadImage("images/dogimg1.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10)
  dog.addImage(dogimg1);
  dog.scale= 0.2;

  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  fill(50);

}


function draw() {  
   background(46,139,87)

   if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(dogimg2)
   }
  drawSprites();
  //add styles here
  text('PRESS UP ARROW KEY TO MAKE THE DOG HAPPY',140,120);
 
 // console.log(text)

}


function readStock(data){
  foodS = data.val();

}

function writeStock(x){
  database.ref('/').update({
  
  })
}



