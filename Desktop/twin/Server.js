var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});





var port = Number(process.env.PORT || 3000);
app.listen(port);

console.log("Running at Port 3000");
