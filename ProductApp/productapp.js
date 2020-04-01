const express= require('express');
const bodyParser=require('body-parser');
const app=express();
const cors=require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt=require('jsonwebtoken');
const mongoClient=require('mongodb');
url="mongodb://localhost:27017";
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


function authenticate(req,res,next){
	
	let token=req.header('Authorization');
	console.log(token);
	if(token == undefined){
		res.status(401).json({
			message:"Unauthorized"
		});
	}else{
		let decode=jwt.verify(token,'fasfsdfdsfs');
		if(decode!== undefined){
			next();
		}else{
			res.status(401).json({
			message:"Unauthorized"
		});
		}
		next();
	}
	
}

 app.post('/register' ,function(req,res){
 mongoClient.connect(url, (err, client) => {
        if (err) return console.log(err);
        var db=client.db("testdb");
		var newData={
		name :req.body.name,
		email :req.body.email,
		contact :req.body.contact
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
 
 app.post("/login", function (req, res) {

    mongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        if (err) throw err;
        var db = client.db("testdb");
        db.collection("user").findOne({ email: req.body.email }, function (err, userData) {
            if (err) throw err;
            
            //compare the password and generate jwt token
            bcrypt.compare(req.body.password, userData.password, function (err, result) {

                if (result) {
                    var jwtToken = jwt.sign({ email: req.body.email }, 'fasfsdfdsfs')
                    res.json({
                        message: "success",
                        token: jwtToken
                    })
                }
                else {
                    res.json({
                        message: "Login Failed",
                    })
                }
            })
        })
    })
})
 app.get('/dashboard' ,authenticate,function(req,res){
	 var user = req.userId;
  res.json({
	  message:"Protected"
  });
 
 });
 
 app.get('/user' ,function(req,res){
	mongoClient.connect(url,function(err,client){
		if(err) throw err;
		var db = client.db("testdb");
		var userData=db.collection("user").findOne({email:localStorage.getItem("email")}).toArray();
		userData.then(function (data) {
            console.log(data);
            console.log("Data Displayed");
            client.close();
            
            res.json(data)

        })
            .catch(function (err) {
                client.close();
                res.json({
                    message: "error"
                })
            })
    });
});
 
 
 
 app.get("/display", function (req, res) {
    mongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db("testdb");
      var dispcart=db.collection("Product").find().toArray();
	  dispcart.then(function(data){
		console.log(data);  
		  client.close();
	  })
	  .catch(function(err){
		  client.close();
		 res.json({
			 message:"error"
		 })
	  });
            
	});
 });
 
 
app.post("/insert", function (req, res) {
    mongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db("testdb");
        var newData = {
            product: req.body.product,
            quantity: req.body.quantity
        }
        db.collection("Product").insertOne(newData, function (err, result) {
            if (err) throw err;
            client.close();
            res.json({
                messsage: "product Added"
            })
        })
    })
});
app.put('/update',function(req,res){
	 console.log(req.body);
	 
	 mongoClient.connect(url,function(err,client){
		if(err)throw err;
	var db = client.db("testdb");
	db.collection("Product").updateOne({product:req.body.product},{$set :{"quantity":req.body.quantity}},function(err,data){
		if(err)throw err;
		
		client.close();
		 res.json({
		 message:"Product Updated"
		
	});
	
	 });
	 
	
	 });
 });
 app.delete('/delete',function(req,res){
	 console.log(req.body);
	 
	 mongoClient.connect(url,function(err,client){
		if(err)throw err;
	var db = client.db("testdb");
	db.collection("Product").deleteOne({"product":req.body.product},function(err,data){
		if(err)throw err;
		
		client.close();
		 res.json({
		 message:"Product Deleted"
		
	});
	
	 });
	 
	
	 });
 });


app.listen(3030,function(){
console.log("Port is running in 3030")
});