const express = require("express");

const app = express();
const lesson1Controller = require('./controllers/lesson1')

const PORT = process.env.PORT || 3000;

app.get("/", lesson1Controller.stephenRoute)

app.get("/leroy", lesson1Controller.bobRoute)

app.listen(PORT, () => {
  console.log('Web Server is listening at port ' + PORT);
});