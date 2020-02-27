var div=document.createElement("div");
document.body.appendChild(div);
div.id='div1'
var imgs =["hello.png","image.png","img2.jpg","img3.jpg"]
var img = document.createElement('img');
div.appendChild(img);
var i =0
img.src =imgs[0];
img.id='img1'
document.getElementById("img1").onmouseover=function(){mouseOver()};
function mouseOver(){
	i=i+1;
	i=i%imgs.length;
	document.getElementById("img1").src=imgs[i];
}




