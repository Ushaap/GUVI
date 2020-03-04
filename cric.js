class Cricket
{
constructor()
{
	this.runs=0;
	this.wickets=0;
	this.balls=36;
	this.player=1;
	this.count=0;
	this.str_r="";
	this.str_p="";
	this.str_w="";
	this.str_b="";
}
bat(team)
{	
	if(team=='1'){
		var run=Math.floor((Math.random()*100)%7);
		if(run>0)
		{
			this.runs=this.runs+run;
			this.balls--;
			this.count++;
			if(this.count==6)
			{
				this.player++;
				this.count=0;
			}
		}
		else
		{
			this.player++;
			this.wickets++;
			this.count=0;
		}
		this.str_r="Runs: "+this.runs;
		this.str_p="Player "+this.player;
		this.str_w="Wickets: "+this.wickets;
		this.str_b="Balls left: "+this.balls;
		td2_r1.innerHTML=this.str_r;
		td3_w1.innerHTML=this.str_w;
		td_p1.innerHTML=this.str_p;
		td4_b1.innerHTML=this.str_b;
		if(this.player==12)
		{
			td_p1.innerHTML="All-out"
		}
		if(this.wickets==11||this.balls==0||this.player==12)
		{
			bat1.disabled=true;
			bat2.disabled=false;
		}
		localStorage.setItem("runs1",this.runs);
		localStorage.setItem("wickets1",this.wickets);
	}
	if(team=='2'){
		
	var run=Math.floor((Math.random()*100)%7);
		if(run>0)
		{
			this.runs=this.runs+run;
			this.balls--;
			this.count++;
			if(this.count==6)
			{
				this.player++;
				this.count=0;
			}
		}
		else
		{
			this.player++;
			this.wickets++;
			this.count=0;
		}
		this.str_r="Runs: "+this.runs;
		this.str_p="Player "+this.player;
		this.str_w="Wickets: "+this.wickets;
		this.str_b="Balls left: "+this.balls;
		td2_r2.innerHTML=this.str_r;
		td3_w2.innerHTML=this.str_w;
		td_p2.innerHTML=this.str_p;
		td4_b2.innerHTML=this.str_b;
		if(this.wickets==11||this.balls==0||this.player==12)
		{
			td_p2.innerHTML="Innings over"
			bat2.disabled=true;
			window.location.href = "result.html";
		}
		localStorage.setItem("runs2",this.runs); 
		localStorage.setItem("wickets2",this.wickets);
		var a=localstorage.getItem('td2_r2');
		var b=localstorage.getItem('td3_w2');
		document.write(a," ",b);
    }
}
}

var t1=new Cricket();
var t2=new Cricket();

var div=document.createElement("div");
document.body.appendChild(div);
div.id='div'

var tab=document.createElement("table");
div.appendChild(tab);
tab.id='tab'

var tr1=document.createElement("tr");
tab.appendChild(tr1);
tr1.id='tr1'
var td_t1=document.createElement("td");
tr1.appendChild(td_t1);
td_t1.id='td_t1'
td_t1.innerHTML="Team 1"

var td1_t2=document.createElement("td");
tr1.appendChild(td1_t2);
td1_t2.id='td1_t2'
td1_t2.innerHTML="Team 2"

var tr2=document.createElement("tr");
tab.appendChild(tr2);
tr2.id='tr2'

var td2_r1=document.createElement("td");
tr2.appendChild(td2_r1);
td2_r1.id='td2_r1'
td2_r1.innerHTML="Runs: 0"

var td2_r2=document.createElement("td");
tr2.appendChild(td2_r2);
td2_r2.innerHTML="Runs: 0"

var tr_p=document.createElement("tr");
tab.appendChild(tr_p);
tr_p.id='tr_p'

var td_p1=document.createElement("td");
tr_p.appendChild(td_p1);
td_p1.id='td_p1'
td_p1.innerHTML="Player 1"

var td_p2=document.createElement("td");
tr_p.appendChild(td_p2);
td_p2.id='td_p2'
td_p2.innerHTML="Player 1"

var tr3=document.createElement("tr");
tab.appendChild(tr3);
tr3.id='tr3'

var td3_w1=document.createElement("td");
tr3.appendChild(td3_w1);
td3_w1.id='td3_w1'
td3_w1.innerHTML="Wickets: 0"

var td3_w2=document.createElement("td");
tr3.appendChild(td3_w2);
td3_w2.id='td3_w2'
td3_w2.innerHTML="Wickets: 0"

var tr4=document.createElement("tr");
tab.appendChild(tr4);
tr4.id='tr4'

var td4_b1=document.createElement("td");
tr4.appendChild(td4_b1);
td4_b1.id='td4_b1'
td4_b1.id='td_b1'
td4_b1.innerHTML="Balls left: 36"

var td4_b2=document.createElement("td");
tr4.appendChild(td4_b2);
td4_b2.id='td4_b2'
td4_b2.id='td_b2'
td4_b2.innerHTML="Balls left: 36"

var tr5=document.createElement("tr");
tab.appendChild(tr5);
tr5.id='tr5'

var td5_bat1=document.createElement("td");
tr5.appendChild(td5_bat1);
td5_bat1.id='td3_bat1'

var bat1=document.createElement('button');
td5_bat1.appendChild(bat1);
bat1.innerHTML = 'Bat';
bat1.onclick = function(){t1.bat('1')};

var td5_bat2=document.createElement("td");
tr5.appendChild(td5_bat2);
td5_bat2.id='td5_bat2'

var bat2=document.createElement('button');
td5_bat2.appendChild(bat2);
bat2.innerHTML = 'Bat';
bat2.disabled=true;
bat2.onclick = function(){t2.bat('2')};