var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
// Clip a rectangular area
ctx.rect(50, 20, 200, 120);
ctx.stroke();
ctx.clip();
// Draw red rectangle after clip()
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 150, 100);
