  var garden,rabbit;
  var gardenImg,rabbitImg;
  var apples;
  var applesImg;
  var randNumber
  var leaves;
  var leavesImg;

  function preload(){
    gardenImg = loadImage("garden.png");
    rabbitImg = loadImage("rabbit.png");
    applesImg = loadImage("apple.png");
    leavesImg = loadImage("orangeLeaf.png");
  }

function setup(){
  
    createCanvas(400,400);
  
    // Moving background
    garden=createSprite(200,200);
    garden.addImage(gardenImg);

    //creating boy running
    rabbit = createSprite(180,340,30,30);
    rabbit.scale =0.09;
    rabbit.addImage(rabbitImg);

    var rand =  Math.round(random(1,100))
      console.log(rand)

}


function draw() {
    background(0);
    
    edges= createEdgeSprites();
    rabbit.collide(edges);

    rabbit.x=World.mouseX

    if(rabbit.x<60){
      rabbit.x=60;
    }

    if(rabbit.x>340){
      rabbit.x=340;
  }

    spawnApples();

    spawnLeaves();
 
  drawSprites();
}


function spawnApples(){
  
   if(frameCount%60==0){
      apples = createSprite(200,10,10,20);
      apples.velocityY = 3;
      apples.addImage(applesImg);
      apples.scale = 0.1;
      randNumber = Math.round(random(50,350))
      apples.x = randNumber;
      apples.depth = rabbit.depth;
      rabbit.depth = rabbit.depth+1;
   }
  
 
 }

 
  function spawnLeaves(){
  
    if(frameCount%60==0){
        leaves = createSprite(200,10,10,20);
        leaves.velocityY = 3;
        leaves.addImage(leavesImg);
        leaves.scale = 0.1;
        randNumber = Math.round(random(50,350))
        leaves.x = randNumber;
        leaves.depth = rabbit.depth;
        rabbit.depth = rabbit.depth+1;
     }
  

  }