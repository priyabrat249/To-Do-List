const express=require("express");
const bodyParser = require("body-parser");
const app=express();
app.set('view engine', 'ejs');
var items=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    // today.toLocaleDateString("en-US", options);
    var day=today.toLocaleDateString("en-US", options);
    res.render("list",{toda:day , newitems:items});
}); 
app.post("/",function(req,res){
    var item=req.body.n1;
    items.push(item);
    res.redirect("/");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
}); 