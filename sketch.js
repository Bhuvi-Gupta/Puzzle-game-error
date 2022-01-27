var canvas;
var bgImage1, bgImage2, bgImage3;
var bagSprite, broomSprite, catSprite;
var level = 1;
var roomObjsCollected = 0;
var gameState = "play";
var bagCollected = false;
var socksCollected = false;
var scarfCollected = false;
function preload(){
  bgImage1 = loadImage("messy_room_1.png");
  bgImage2 = loadImage("treehouse_1.png");
  bgImage3 = loadImage("market_1 (2).png");

  bag = loadImage("./RoomImages/bag.png");
  broom = loadImage("./RoomImages/broom.png");
  cat = loadImage("./RoomImages/cat.png");
  fruits = loadImage("./RoomImages/fruits.png");
  knife = loadImage("./RoomImages/knife.png");
  necklace = loadImage("./RoomImages/necklace.png");
  phone = loadImage("./RoomImages/phone.png");
  racket = loadImage("./RoomImages/racket.png");
  scarf = loadImage("./RoomImages/scarf.png");
  socks = loadImage("./RoomImages/socks.png");

  rect1 = loadImage("rect1.PNG");

  bagName = loadImage("./RoomImages/bag_name.png");
  broomName = loadImage("./RoomImages/broom_name.png");
  catName = loadImage("./RoomImages/cat_name.png");
  fruitsName = loadImage("./RoomImages/fruits_name.png");
  knifeName = loadImage("./RoomImages/knife_name.png");
  necklaceName = loadImage("./RoomImages/necklace_name.png");
  phoneName = loadImage("./RoomImages/phone_name.png");
  racketName = loadImage("./RoomImages/racket_name.png");
  scarfName = loadImage("./RoomImages/scarf_name.png");
  socksName = loadImage("./RoomImages/socks_name.png");

  ax = loadImage("./TreeHouseImages/ax.png");
  ball = loadImage("./TreeHouseImages/ball.png");
  bear = loadImage("./TreeHouseImages/bear.png");
  box = loadImage("./TreeHouseImages/box.png");
  bucket = loadImage("./TreeHouseImages/bucket.png");
  extinguisher = loadImage("./TreeHouseImages/extinguisher.png");
  flowers = loadImage("./TreeHouseImages/flowers.png");
  nest = loadImage("./TreeHouseImages/nest.png");
  net = loadImage("./TreeHouseImages/net.png");
  rope = loadImage("./TreeHouseImages/rope.png");

  axName = loadImage("./TreeHouseImages/axName.png");
  ballName = loadImage("./TreeHouseImages/ballName.png");
  bearName = loadImage("./TreeHouseImages/bearName.png");
  boxName = loadImage("./TreeHouseImages/boxName.png");
  bucketName = loadImage("./TreeHouseImages/bucketName.png");
  extinguisherName = loadImage("./TreeHouseImages/extinguisherName.png");
  flowersName = loadImage("./TreeHouseImages/flowersName.png");
  nestName = loadImage("./TreeHouseImages/nestName.png");
  netName = loadImage("./TreeHouseImages/netName.png");
  ropeName = loadImage("./TreeHouseImages/ropeName.png");

  
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  

  if(level === 2){

    
    
    treehouse = createSprite(windowWidth/2, windowHeight/2);
    treehouse.addImage(bgImage2);
    treehouse.scale = 1;

    axSprite = createSprite(windowWidth/4 - 440, windowHeight - 730);
    axSprite.addImage(ax);
    axSprite.scale = 1;
    ballSprite = createSprite(windowWidth/2 - 130, windowHeight/2 - 30);
    ballSprite.addImage(ball);
    ballSprite.scale = 0.2;
    bearSprite = createSprite(windowWidth/2 + 425, windowHeight/2 - 55);
    bearSprite.addImage(bear);
    bearSprite.scale = 0.3;
    boxSprite = createSprite(windowWidth/2 + 680, windowHeight/ 2 + 70);
    boxSprite.addImage(box);
    boxSprite.scale = 0.5;
    bucketSprite = createSprite(windowWidth/4 - 90, windowHeight/ 2 + 200);
    bucketSprite.addImage(bucket);
    bucketSprite.scale = 0.2;
    extinguisherSprite = createSprite(windowWidth/4 - 210, windowHeight/ 2 + 220);
    extinguisherSprite.addImage(extinguisher);
    extinguisherSprite.scale = 0.3;
    flowersSprite = createSprite(windowWidth/4 - 30, windowHeight/ 2 - 70);
    flowersSprite.addImage(flowers);
    flowersSprite.scale = 0.3;
    nestSprite = createSprite(windowWidth/2 + 400, windowHeight/17);
    nestSprite.addImage(nest);
    nestSprite.scale = 0.25;
    netSprite = createSprite(windowWidth/2 + 680, windowHeight/ 2 - 150);
    netSprite.addImage(net);
    netSprite.scale = 0.5;
    ropeSprite = createSprite(windowWidth/2 + 30, windowHeight/ 2 + 200);
    ropeSprite.addImage(rope);
    ropeSprite.scale = 0.5;
    objects = createSprite (windowWidth/2, windowHeight + 110);
    objects.addImage(rect1);
    objects.scale = 2;
    axNameSprite = createSprite(windowWidth/3 - 470, windowHeight - 40);
    axNameSprite.addImage(axName);
    bearNameSprite = createSprite(windowWidth/3 - 70, windowHeight - 40);
    bearNameSprite.addImage(bearName);
    boxNameSprite = createSprite(windowWidth/2 + 90, windowHeight - 130);
    boxNameSprite.addImage(boxName);
    bucketNameSprite = createSprite(windowWidth/2 + 450, windowHeight - 35);
    bucketNameSprite.addImage(bucketName);
    extinguisherNameSprite = createSprite(windowWidth - 390, windowHeight - 130);
    extinguisherNameSprite.addImage(extinguisherName);
    flowersNameSprite = createSprite(windowWidth/2 + 50, windowHeight - 35);
    flowersNameSprite.addImage(flowersName);
    nestNameSprite = createSprite(windowWidth/2 - 430, windowHeight - 130);
    nestNameSprite.addImage(nestName);
    netNameSprite = createSprite(windowWidth - 200, windowHeight - 35);
    netNameSprite.addImage(netName);
    ropeNameSprite = createSprite(windowWidth/2 - 750, windowHeight - 130);
    ropeNameSprite.addImage(ropeName);
    ballNameSprite = createSprite(windowWidth/2 - 150 , windowHeight - 130);
    ballNameSprite.addImage(ballName);


  }
  
  if(level === 1){
    
    bg1 = createSprite(windowWidth/2, windowHeight/2);
    bg1.addImage(bgImage1);

    objects = createSprite (windowWidth/2, windowHeight + 110);
    objects.addImage(rect1);
    objects.scale = 2;
    bagNameSprite = createSprite(windowWidth/3 - 470, windowHeight - 40);
    bagNameSprite.addImage(bagName);
    broomNameSprite = createSprite(windowWidth/3 - 170, windowHeight - 40);
    broomNameSprite.addImage(broomName);
    catNameSprite = createSprite(windowWidth/3 + 100, windowHeight - 35);
    catNameSprite.addImage(catName);
    fruitsNameSprite = createSprite(windowWidth/2 + 50, windowHeight - 35);
    fruitsNameSprite.addImage(fruitsName);
    knifeNameSprite = createSprite(windowWidth/2 + 370, windowHeight - 35);
    knifeNameSprite.addImage(knifeName);
    necklaceNameSprite = createSprite(windowWidth - 500, windowHeight - 130);
    necklaceNameSprite.addImage(necklaceName);
    phoneNameSprite = createSprite(windowWidth/2 + 80, windowHeight - 130);
    phoneNameSprite.addImage(phoneName);
    racketNameSprite = createSprite(windowWidth/2 - 300, windowHeight - 130);
    racketNameSprite.addImage(racketName);
    scarfNameSprite = createSprite(windowWidth/2 - 650, windowHeight - 130);
    scarfNameSprite.addImage(scarfName);
    socksNameSprite = createSprite(windowWidth - 300, windowHeight - 35);
    socksNameSprite.addImage(socksName);
    
    broomSprite = createSprite(windowWidth - 50, windowHeight - 330);
    broomSprite.addImage(broom);
    broomSprite.scale = 0.3;
    fruitsSprite = createSprite(width/2 + 200, height - 520);
    fruitsSprite.addImage(fruits);
    fruitsSprite.scale = 0.2;
    knifeSprite = createSprite(windowWidth/3 - 505, windowHeight - 815);
    knifeSprite.addImage(knife);
    knifeSprite.scale = 0.15;
    necklaceSprite = createSprite(windowWidth - 200, windowHeight - 440);
    necklaceSprite.addImage(necklace);
    necklaceSprite.scale = 0.15;
    phoneSprite = createSprite(windowWidth/2 + 30, windowHeight - 605);
    phoneSprite.addImage(phone);
    phoneSprite.scale = 0.1;
    racketSprite = createSprite(windowWidth/3 - 250, windowHeight - 375);
    racketSprite.addImage(racket);
    racketSprite.scale = 0.4;
    catSprite = createSprite(windowWidth/3, windowHeight - 260);
    catSprite.addImage(cat);
    catSprite.scale = 0.3;
    socksSprite = createSprite(windowWidth - 300, windowHeight/2 + 100);
    socksSprite.addImage(socks);
    socksSprite.scale = 0.1;
    bagSprite = createSprite(windowWidth/3 + 30, windowHeight - 370);
    bagSprite.addImage(bag);
    bagSprite.scale = 0.25;
    scarfSprite = createSprite(windowWidth/2 + 200, windowHeight - 375);
    scarfSprite.addImage(scarf);
    scarfSprite.scale = 0.15;
  }
  console.log(fruitsSprite.x)
  console.log(fruitsSprite.y)
  //database = firebase.database();
  //game = new Game();
  //game.getState();
  //game.start();
}
function draw() {
  
  
  if(level === 1 && gameState === "play"){

    if(mousePressedOver(bagSprite)){
      //bagSprite.scale = 0.5;
      //bagSprite.velocityX = -9;
      //bagSprite.visible = false;
      bagSprite.destroy();
      //roomObjsCollected += 1;
      //if(bagSprite.destroy()){
        //roomObjsCollected += 1;
      //}
      //roomObjsCollected = roomObjsCollected + 1;
      bagCollected = true;
    }
    if(mousePressedOver(socksSprite)){
      //socksSprite.scale = 0.25;
      //socksSprite.velocityX = 9;
      socksSprite.destroy();
      //roomObjsCollected += 1;
      //roomObjsCollected = roomObjsCollected + 1;
      socksCollected = true;
    }
    if(mousePressedOver(scarfSprite)){
      //scarfSprite.scale = 0.35;
      //scarfSprite.velocityX = 9;
      //roomObjsCollected += 1;
      scarfSprite.destroy();
      //roomObjsCollected = roomObjsCollected + 1;
      scarfCollected = true;
    }
    if(mousePressedOver(racketSprite)){
      //racketSprite.scale = 0.55;
      //racketSprite.velocityX = -9;
      //roomObjsCollected += 1;
      racketSprite.destroy();
      roomObjsCollected = roomObjsCollected + 1;
    }
    if(mousePressedOver(phoneSprite)){
      //phoneSprite.scale = 0.15;
      //phoneSprite.velocityX = -9;
      //roomObjsCollected += 1;
      phoneSprite.destroy();
      roomObjsCollected = roomObjsCollected + 1;
    }
    if(mousePressedOver(necklaceSprite)){
      //necklaceSprite.scale = 0.3;
      //necklaceSprite.velocityX = 9;
      //roomObjsCollected += 1;
      necklaceSprite.destroy();
      roomObjsCollected = roomObjsCollected + 1;
    }
    if(mousePressedOver(knifeSprite)){
      //knifeSprite.scale = 0.15;
      //knifeSprite.velocityX = -9;
      //roomObjsCollected += 1;
      knifeSprite.destroy();
      roomObjsCollected = roomObjsCollected + 1;
    }
    if(mousePressedOver(fruitsSprite)){
      //fruitsSprite.scale = 0.35;
      //fruitsSprite.velocityX = 9;
      //roomObjsCollected += 1;
      fruitsSprite.destroy();
      roomObjsCollected = roomObjsCollected + 1;
    }
    if(mousePressedOver(catSprite)){
      //catSprite.scale = 0.45;
      //catSprite.velocityX = -9;
      //roomObjsCollected += 1;
      catSprite.destroy();
      roomObjsCollected = roomObjsCollected + 1;
    }
    if(mousePressedOver(broomSprite)){
      //broomSprite.scale = 0.45;
      //broomSprite.velocityX = 9;
      //roomObjsCollected += 1;
      broomSprite.destroy();
      roomObjsCollected = roomObjsCollected + 1;
    }

    console.log(roomObjsCollected);
    //if(roomObjsCollected === 10){
      //gameState = "end";
    //}
    if(bagCollected === true && socksCollected === true && scarfCollected === true){
      gameState ="end";
    }
  }
  else if(gameState === "end"){
    swal({


      title: 'Great Job!',
      text: "You have collected all the treasures like a true treasure hunter!",
      icon: 'success',
      denyButtonText: `Try Again`,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Next level!'
            }).then((result) => {
      if (result.isConfirmed) {
      Swal(
      'Deleted!',
      'Your file has been deleted.',
      'success'
                )
              }
            })
  }
  
  drawSprites();
  
}