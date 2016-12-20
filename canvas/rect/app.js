function rectangle()
{
  var canvas = document.getElementById("canvas1");
  var context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle="blue";
  context.lineWidth="2";
  context.rect(10,10,200,100);
  context.stroke();
}
rectangle();
