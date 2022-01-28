const express = require("express");
const app = express();
const port = 5001;

app.use(require("./ApiCourses")());
app.use(require('./ApiContactForm')());
app.use(require('./ApiLogin')());
app.use(require('./ApiPrograms')());
var callback = function () {
  console.log("Listening on port 5001");
};
app.listen(port, callback);