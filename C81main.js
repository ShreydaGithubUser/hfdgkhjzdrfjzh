canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";

//circle code
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(200, 200, 50, 0, 2 * Math.PI)
ctx.stroke();

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    color = document.getElementById("color_input").value;
    mousex = e.clientX - canvas.offsetLeft;
    mousey = e.clientY - canvas.offsetTop;
    console.log(mousex);
    console.log(mousey);
    circle(mousex, mousey);
}
function circle(mousex, mousey) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(mousex, mousey, 50, 0, 2*Math.PI)
    ctx.stroke();
}

function clearall(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}