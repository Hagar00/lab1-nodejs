const express = require("express");
const app = express();
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
    console.log(__dirname);
});
app.listen(8080);