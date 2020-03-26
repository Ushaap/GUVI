const express= require('express');
const bodyParser=require('body-parser');
const app=express();
const cors=require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const mongoClient=require('mongodb');
url="mongodb://localhost:27017";
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/users' ,function(req,res){
 mongoClient.connect(url, (err, client) => {
        if (err) return console.log(err);
        var db=client.db("Demodb");
        var userData = db.collection('user').find().toArray();
        userData
            .then(function (data) {
                client.close();
                res.json(data);
            })
            .catch(function (err) {
                client.close();
                res.status(500).json({
                    message: "error"
                });
            });

    });
});
 app.post('/users',function(req,res){
	 console.log(req.body);
	 //Save the Data in Database
	 mongoClient.connect(url,function(err,client){
		if(err)throw err;
	var db = client.db("Demodb");
	db.collection("user").insertOne(req.body,function(err,data){
		if(err)throw err;
		db.collection("doc")
		client.close();
		 res.json({
		 message:"Saved"
		
	});
	
	 });
	 
	
	 });
 });
 
app.put('/users',function(req,res){
	 console.log(req.body);
	 
	 mongoClient.connect(url,function(err,client){
		if(err)throw err;
	var db = client.db("Demodb");
	db.collection("user").updateOne({name:req.body.name},{$set :{"email":req.body.email}},function(err,data){
		if(err)throw err;
		
		client.close();
		 res.json({
		 message:"Updated"
		
	});
	
	 });
	 
	
	 });
 });
 app.delete('/users',function(req,res){
	 console.log(req.body);
	 
	 mongoClient.connect(url,function(err,client){
		if(err)throw err;
	var db = client.db("Demodb");
	db.collection("user").deleteOne({"name":req.body.name},function(err,data){
		if(err)throw err;
		
		client.close();
		 res.json({
		 message:"Deleted"
		
	});
	
	 });
	 
	
	 });
 });
 app.post('/register' ,function(req,res){
 mongoClient.connect(url, (err, client) => {
        if (err) return console.log(err);
        var db=client.db("Demodb");
		var newData={
		name :req.body.name
				
		}
		bcrypt.genSalt(saltRounds, function(err, salt) {
			if(err)throw err;
			console.log(salt); // Salt is generated(hash)
		bcrypt.hash(req.body.password, salt, function(err, hash) {
			if(err)throw err;
			console.log(hash);
			newData.password=hash;
	db.collection("user").insertOne(newData,function(err,data){
        if(err)throw err;
		client.close();
		res.json({
		 message:"User Created Successfully"
    });
		});
		
		

		});
    });
});
 });
 app.post('/login' ,function(req,res){
 mongoClient.connect(url, (err, client) => {
        if (err) return console.log(err);
        var db=client.db("Demodb");
	db.collection("user").findOne({name:req.body.name},function(err,userdata){
        if(err)throw err;
		client.close();
		console.log(userdata);
		bcrypt.compare(req.body.password,userdata.password, function(err, result) {
        if(result)
		res.json({
			message:"success"
		});
});
		});
		
		

		});
    });

app.listen(3030,function(){
console.log("Port is running in 3030")
});