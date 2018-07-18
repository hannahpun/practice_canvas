// triangle 
// ctx.strokeStyle =  "#E7465D";
// ctx.strokeRect(100, 100, 200, 200)
ctx.fillStyle = "white";
ctx.beginPath();
// grid
for(var i = 0; i<15; i++){
    let pos = i*50;
    ctx.moveTo(pos, 0);
    ctx.lineTo(pos, h)
    ctx.fillText(pos,pos, 10)
    ctx.moveTo(0, pos);
    ctx.lineTo(w, pos);
    ctx.fillText(pos, 0, pos)
}
ctx.strokeStyle = "rgba(255,255,255,0.1)";
ctx.stroke();
ctx.closePath();