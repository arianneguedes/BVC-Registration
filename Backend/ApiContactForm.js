const express = require("express");
const app = express();
var fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const _ = require("underscore");

var Forms;

module.exports = function () {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/contactforms", function (req, res) {
    console.log("Get all contact forms submitted");
    Forms = GetForms();
    res.send(Forms);
  });

  app.post("/addcontactform", (req, res) => {
    Forms = GetForms();
    console.log("Adding new contact form");
    const form = {
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      show: true,
      action: 0,
    };
    Forms.push(form);
    let data = JSON.stringify(Forms, null, 2);
    fs.writeFile("ContactForm.json", data, finished);

    function finished(err) {
      reply = {
        form: form,
        code: 200,
        status: "Record added successfully",
      };
      res.send(reply);
    }
  });

  app.get("/searchcontact/:name", (req, res) => {
    Forms = GetForms();
    console.log("searching by contact name " + req.params.name);
    var FormsFound = [{}];
    if (_.isEmpty(Forms)) {
      res.send("There is no information to be found");
    } else {
        var i = -1;
        Forms.forEach((element) => {
          var name = element.name, nameToSearch = req.params.name;
          console.log (name)
          console.log (nameToSearch)
          if(name.indexOf(nameToSearch) > -1)
            {
                FormsFound[++i] = element;
            }
          }
        );
        if (i == -1) {
          reply = {
            name: req.params.name,
            code: 404,
            status: "Not found",
          };
          res.send(reply);
        }else {
          console.log (FormsFound);
          res.send(FormsFound);
        }
    }
  });

  function GetForms() {
    var data = fs.readFileSync("ContactForm.json", "utf-8");
    var obj;
    if (data) {
      console.log("Loading users data");
      var data = fs.readFileSync("ContactForm.json", "utf-8");
      obj = JSON.parse(data);
    } else {
      console.log("Created new dataset object");
      var obj = { user: [] };
    }

    return obj;
  }

  return app;
};