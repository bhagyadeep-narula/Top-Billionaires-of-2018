const express = require('express');
const app = express();
const path = require('path');
const PORT = "8000"

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.use(express.static(path.join(__dirname)));


app.listen(PORT, function(){
  console.log("Server is running on port");
})
