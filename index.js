//import and setting up middleware
var express = require('express'); //call express
var app = express(); //define our app using express
// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
var port = process.env.PORT || 8080 //set our port
//Setting route and path
// Routing
var router = express.Router()
router.get('/', (req,res)=>{
res.json({message:'Hula! my API works!!!'})
}) /*get method to handle GET request. ‘/’ is the requested endpoint. It’s the value that 
comes after your domain name.*/

router.get('/hello', function(req, res){
res.send("Hello World!");
});

//var express = require('express'); var app = express();
router.get('/goodbye/:name', function(req, res){ 
res.json('Goodbye ' + req.params.name);
});
//app.listen(3000);

router.post('/number', function(req,res){
	res.json({message:"The number is" + req.body.num});
})

router.post('/sum', function(req,res){
	var sum = req.body.num1 + req.body.num2;
	res.json({message:"The number is " + sum});
})

//var express = require('express'); 
//var app = express();
//app.get('/calculate/:num1/:num2', function(req, res){ 
//res.send('num1: ' + req.params.num1 + ' and num2: ' +req.params.num2);
//});

app.use('/api1/v',router);
app.listen(port); // create a server that browsers can connect to
console.log("Magic happened at port "+port);