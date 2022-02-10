//install express
//create a server
const express = require("express");
const app = express();
const port = 3000;
const date = new Date();
const day = date.getDay();
const hour = date.getHours();

console.log(hour);
//middleware
//type: custum middleware
const meddleware = (req, res, next) => {
  console.log("thiss is from the middlleware");
  next();
};

const test = (req, res, next) => {
  if (day >= 4 && day <= 5) {next()}
  else{
      res.sendFile(__dirname +'/public/error.html')
  }
}
app.use(test);
// app.use(meddleware)

//type2: built-in middlewal
app.use(express.static("public"));
app.use(express.json())
//type3: third-party middleware
const cors = require("cors");
//routes
app.get("/", (req, res) => {
  res.status(200).send("hello from express");
});

app.get("/about", meddleware, (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});
http://localhost:3000/api/users
app.use('/api/users', require('./routes/users'))
http://localhost:3000/api/employees
app.use('api/employees', require('./routes/employees'))

app.listen(port, (err) => {
  err ? console.log(err) : console.log("the server is up and running...");
});
