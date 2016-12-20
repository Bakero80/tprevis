var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// Draw a rectangle
ctx.rect(50, 20, 200, 120);
ctx.stroke();
// Draw red rectangle
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 150, 100);
