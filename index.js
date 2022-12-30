
var express = require('express')
var ejs = require('ejs')
var bodyParser = require('body-parser');
var mysql = require('mysql')
var session = require('express-session');

mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"node_foodproject"

})


var app = express();


//tells express to use the pubic folder to deliver the css/images/js in our application
app.use(express.static('public'));

//set the view engine to ejs
app.set('view engine', 'ejs');

app.listen(3007);
app.use(bodyParser.urlencoded({extended:true}));


//local host 3007
app.get('/',function(req,res){


var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node_foodproject"
})


con.query("SELECT * FROM products",(err,result)=>{
    //don't need to put Views folder, node already sees 'Views', just put folder name within Views
    //and then name of the file needed (no .ejs needed)
    res.render('pages/index',{result:result});
})




});