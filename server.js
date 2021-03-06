const express = require('express');
const app = express();
const path = require('path');
const PORT = "8000";

app.use(express.static(path.join(__dirname + "/src/resources")));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/src/index.html")
})

app.listen(PORT, function(){
  console.log("Server is running on port *" + PORT);
})
