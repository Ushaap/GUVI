var div = document.createElement("div");
document.body.appendChild(div);
div.id='div1'
div.textContent='Hello world';
document.getElementById("div1").onmouseover = function(){mouseOver()};
document.getElementById("div1").onmouseout = function() {mouseOut()}
function mouseOver() {
document.getElementById("div1").style.color = "red";
}
function mouseOut() {
document.getElementById("div1").style.color = "black";
}
