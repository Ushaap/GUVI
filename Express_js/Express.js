const express= require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.json());
var myData=[];
app.get('/users' ,function(req,res){
 res.json(myData);
 })
 app.post('/users',function(req,res){
	 console.log(req.body);
	 myData.push(req.body);
	 res.json({
		 message:"Success"
	 })
 })
 
app.put('/users/:id',function(req,res){
	console.log(req.params.id);
	
	res.json({
		message:"request received"
	})

 })
 app.delete('/users/:id',function(req,res){

res.json({
	message:"Request Deleted"
})
 })
app.listen(3000,function(){
console.log("Port is running in 3000")
});