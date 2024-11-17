(function dino(){
    console.log("it did come inside of dino")
    var size = 500;
    var grid = size/50;
    var field = document.getElementById("field"); 
    field.height = field.width = size*2;
    var jump = false;
    field.style.height = field.style.width = size+'px';
    var context = field.getContext('2d');
    context.scale(2,2);
    var cactoX = 350;
    var dinoY = size - 150;

function tick(){
    var background = '#000000';
    context.fillStyle = background;
    context.fillRect(0,0,size,size);
    console.log("tick function is being called")
    const dino = new Image();
    const cacto = new Image();
    dino.src = 'image.png';
    cacto.src = 'cactus.avif';
    context.drawImage(dino, 10, dinoY ,120 ,100);
    if(jump){
        console.log(" the dino is")
        dinoY -= 15;
        console.log(dinoY)
        if(dinoY < 260){
            while(dinoY != (size-150)) dinoY += 15;
            jump = false;
        }
    }

    context.drawImage(cacto, cactoX ,size - 150, 120, 100);
    cactoX -= 5;
    if (cactoX < -120) {
        cactoX = size;
    }


}
window.onload = function(){
    console.log("it did come inside of onload");
    setInterval(tick,100);
    window.onkeydown = function(e){
        if (e.keyCode === 32 && dinoY === size - 150) { // Space key
            jump = true;
        }
    }
}
})()