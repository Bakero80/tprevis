var canvas = document.getElementById('papier');
canvas.width=canvas.width;
if (canvas.getContext){
var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(100,100,100)";
    ctx.fillRect (0, 0, 300, 300);
    ctx.fillStyle = "rgb(0,100,0)";
    ctx.fillRect (50, 50, 200, 200);
} else {
}
