var div1=document.createElement("div");
document.body.appendChild(div1);
div1.id='div1'
div1.textContent='Hello'
var div2=document.createElement("div");
document.body.appendChild(div2);
div2.id='div2'
div2.textContent='Guvi'
var button = document.createElement('button');
document.body.appendChild(button);
button.onclick=function(){
	temp=div1.textContent;
	div1.textContent=div2.textContent;
	div2.textContent=temp;
};





