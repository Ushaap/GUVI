var div1=document.createElement("div");
document.body.appendChild(div1);
div1.id='div1'
var div2=document.createElement("div");
document.body.appendChild(div2);
div1.id='div2'
var img1=document.createElement('img');
div1.appendChild(img1);
img1.id='img1'
document.getElementById('img1').style.width='100%';
var imgs=["image.png","img2.jpg","img3.jpg"];
img1.src='hello.png';
var img2=document.createElement('img');
div2.appendChild(img2);
img2.id='img2'
document.getElementById('img2').style.width='33%';
img2.src="image.png";
var img3=document.createElement('img');
div2.appendChild(img3);
img3.id='img3'
document.getElementById('img3').style.width='33%';
img3.src="img2.jpg";
var img4=document.createElement('img');
div2.appendChild(img4);
img4.id='img4'
document.getElementById('img4').style.width='34%';
img4.src="img3.jpg";
document.getElementById("img2").onclick=function(){onclick(0)};
document.getElementById("img3").onclick=function(){onclick(1)};
document.getElementById("img4").onclick=function(){onclick(2)};
function onclick(i) {
document.getElementById("img1").src =imgs[i];
}