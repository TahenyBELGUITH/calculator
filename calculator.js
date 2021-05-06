//require express at first
const express = require("express");
const bodyParser = require("body-parser");
//then go to set up express
const app = express();

// the app call an html file as response and it can be nested
app.use(bodyParser.urlencoded({
  extended: true
}));
//roots
app.get("/", function(req, res) {
  // res.send("Hello World , I'm the Root ! ");

  //to get html file as response
  res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res) {
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2 ;

res.send("Thank you for posting ! , The result of calculating is : " + result);
})


// Spin up at port 3000
app.listen(3000, function() {
  console.log("port 3000 works here!");
});
