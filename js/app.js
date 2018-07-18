var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext('2d');
var w = 750;
var h = 550;
var cRed = "#E7465D";
var cY = "#F5AF5F";

// setting the size
canvas.width = w;
canvas.height = h;


// center circle
ctx.beginPath();
ctx.arc(375, 275, 160, 0, Math.PI*2)
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.arc(375, 275, 220, 0, Math.PI*2)
ctx.lineWidth = 1;
ctx.stroke();


// 左上的紅寶石
ctx.beginPath();
ctx.moveTo(97.9, 121.2);
ctx.lineTo(67.8, 131.3);
ctx.lineTo(81.0, 160.8);
ctx.lineTo(112.5, 171.9);
ctx.lineTo(113.9, 172.3);
ctx.lineTo(127.4, 150.1);
ctx.lineTo(125.1, 131.5);
ctx.lineTo(97.9, 121.2);
ctx.closePath();
ctx.fillStyle = cRed;
ctx.fill();


// 右下的藍色三角形
ctx.beginPath();
ctx.moveTo(600, 400);
ctx.lineTo(650, 480);
ctx.lineTo(555, 480);
ctx.closePath();
ctx.fillStyle = "#3676BB"; // lineStyle
ctx.fill(); // stroke()

// 左上的紅寶石
ctx.beginPath();
ctx.moveTo(100, 120);
ctx.lineTo(67.8, 131.3);
ctx.lineTo(81.0, 160.8);
ctx.lineTo(112.5, 171.9);
ctx.lineTo(113.9, 172.3);
ctx.lineTo(127.4, 150.1);
ctx.lineTo(125.1, 131.5);
ctx.lineTo(97.9, 121.2);
ctx.closePath();
ctx.fillStyle = "#E7465D";
ctx.fill();

// 右上圓圈
ctx.beginPath();
// arc(x, y , r, start angle, end angle)
ctx.arc(650,100,35,0,Math.PI*2);
ctx.closePath();
ctx.fillStyle = cY;
ctx.fill();
    
// 左下的內容區
ctx.font = "15px '微軟正黑體'";
ctx.fillStyle = "white";
ctx.fillText("你身負著運送能量電池的任務", 50, 480);
ctx.fillText("卻遭到幾何星人的埋伏", 50, 505);
ctx.fillText("請協助從他們的手中奪回能量電池", 50, 530);

// R
ctx.font = "Bold 80px 'Arial'";
ctx.fillText("R", 370, 255);

// Radio Defense
ctx.font = "Bold 16px 'Arial'";
ctx.fillText("Radio Defense", 320, 280);


// battery
// body
ctx.fillStyle = cY;
ctx.fillRect(340, 210, 25, 45)

// head
ctx.fillStyle = "white";
ctx.fillRect(345, 205, 15, 5)

// line
ctx.fillStyle = "black";
ctx.fillRect(340, 250, 25, 2)