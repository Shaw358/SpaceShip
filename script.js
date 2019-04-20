const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let myRotation = 0;


let gameObjects = [];

let images = ["ship.png"];

animate();

function animate(){
  if(Math.random(1)<1){
    let gameObject = {};
    gameObject.image = new Image();
    gameObject.image.src = images[getRandomNumber(images.length)];
    gameObject.x = canvas.width / 2;
    gameObject.y = canvas.height / 2;
    gameObject.scale = 1
    gameObject.v_y = 1;
    gameObject.v_x = 1;
    gameObjects.push(gameObject);
    context.rotate(myRotation);
  }
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  for(let i = 0; i< 1;i++){

    let gameObject = gameObjects[i];

    gameObject.y += gameObject.v_y*gameObject.scale;
    gameObject.x += gameObject.v_x*gameObject.scale;
    context.drawImage(gameObject.image,gameObject.x,gameObject.y,gameObject.image.width*gameObject.scale,gameObject.image.height*gameObject.scale);
    if(gameObject.y > canvas.height){
      gameObject.y = 0;
    }
    if(gameObject.x > canvas.width){
      gameObject.x = 0;
  }

  if(gameObject.y < 0){
    gameObject.y = canvas.height;
  }
  if(gameObject.x < 0){
    gameObject.x = canvas.width;
}

  document.addEventListener('keydown', function(event) {
      //to left
      if(event.keyCode == 37 && gameObject) {
          gameObject.v_x = gameObject.v_x - 0.01;
      }
      //to right
      else if(event.keyCode == 39) {
          gameObject.v_x = gameObject.v_x + 0.01;
      }
      //speed up
      else if(event.keyCode == 38) {
          gameObject.v_y = gameObject.v_y - 0.01;
      }
      //speed down
      else if(event.keyCode == 40) {
          gameObject.v_y = gameObject.v_y + 0.01;
      }
  });
}

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
  }
}
