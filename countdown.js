var a=function start(counter){
	if(counter>0){
	 setTimeout(function(){
	 counter--;
	 console.log(counter);
	 a(counter);
	 if(counter==0){
	 console.log("Stay safe");
	 }
	 },1000);
	 }
	 }
	 a(11);