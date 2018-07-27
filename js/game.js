// var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
// document.body.appendChild(app.view);
var fps = 30
var ship = {
    x: 0,
    y:0,
    deg: 0
}
function init(){
    ctx.fillStyle = cBg;
    ctx.fillRect(0,0,w,h)
    ship.deg = 45
}


function update(){

}

function draw(){

}
init()
// setInterval(update, fps)
requestAnimationFrame(draw)