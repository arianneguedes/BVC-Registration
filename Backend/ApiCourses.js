const express = require("express"); //Install all packages using this terminal!!! POSTMAN!
const app = express();
var fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const _ = require("underscore");

var Courses;

module.exports = function() {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get("/courses", function (req, res) {
      console.log("get all courses");
      Courses = GetCourses();
      res.send(Courses);
    });

    app.get("/course/:courseid", function (req, res) {
      console.log("get one course id " + req.params.courseid);
      Courses = GetCourses();
      if (!testIfExistis(req.params.courseid)) {
        reply = {
          courseid: req.params.courseid,
          code: 404,
          status: "Not found",
        };
        res.send(reply);
      } else {
        Courses.forEach((element) => {
          if (req.params.courseid == element.id) {
            res.send(element);
          }
        });
      }
    });

    app.post("/addcourse", (req, res) => {
      Courses = GetCourses();
      console.log("adding new course");
      const course = {
        id: uuidv4(),
        code: req.body.code,
        name: req.body.name,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        description: req.body.description,
        fee: req.body.fee,
        show: true,
        action: 0,
      };
      Courses.push(course);
      let data = JSON.stringify(Courses, null, 2);
      fs.writeFile("Courses.json", data, finished);

      function finished(err) {
        reply = {
          course: course,
          code: 200,
          status: "Record added successfully",
        };
        res.send(reply);
      }
    });

    app.post("/updatecourse/:courseid", (req, res) => {
      Courses = GetCourses();
      console.log("updating one courseid " + req.params.courseid);

      if (_.isEmpty(Courses)) {
        res.send("There is no information to be updated");
      } else {
        if (!testIfExistis(req.params.courseid)) {
          reply = {
            courseid: req.params.courseid,
            code: 404,
            status: "Not found",
          };
          res.send(reply);
        } else {
          Courses.forEach((element) => {
            if (req.params.courseid == element.id) {
              (element.code = req.body.code),
                (element.name = req.body.name),
                (element.startdate = req.body.startdate),
                (element.enddate = req.body.enddate),
                (element.description = req.body.description),
                (element.fee = req.body.fee),
                (element.show = true),
                (element.action = 0);

              let data = JSON.stringify(Courses, null, 2);
              fs.writeFile("Courses.json", data, finished);

              function finished(err) {
                reply = {
                  courseid: element.id,
                  code: 200,
                  status: "Updated completed successfully",
                };
                res.send(reply);
              }
            }
          });
        }
      }
    });


    app.get("/searchcourse/:name", (req, res) => {
      Courses = GetCourses();
      console.log("searching by course name " + req.params.name);
      var CoursesFound = [{}];
      if (_.isEmpty(Courses)) {
        res.send("There is no information to be found");
      } else {
          var i = -1;
          Courses.forEach((element) => {
            var name = element.name, nameToSearch = req.params.name;
            console.log (name)
            console.log (nameToSearch)
            if(name.indexOf(nameToSearch) > -1)
              {
                CoursesFound[++i] = element;
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
            console.log (CoursesFound);
            res.send(CoursesFound);
          }
      }
    });


    app.delete("/deletecourse/:courseid", (req, res) => {
      Courses = GetCourses();
      console.log("deleting one courseid " + req.params.courseid);
      var bFound = false;
      var newObj;

      if (_.isEmpty(Courses)) {
        res.send("There is no information to be deleted");
      } else {
        if (!testIfExistis(req.params.courseid)) {
          reply = {
            courseid: req.params.courseid,
            code: 404,
            status: "Not found",
          };
          res.send(reply);
        } else {
          for (let index = 0; index < Courses.length; index++) {
            var element = Courses[index].id;
            console.log(element);
            if (req.params.courseid == element) {
              Courses.splice(index, 1);
              let data = JSON.stringify(Courses, null, 2);
              fs.writeFile("Courses.json", data, finished);

              function finished(err) {
                reply = {
                  courseid: element.id,
                  code: 200,
                  status: "Removed with success",
                };
                bFound = true;
                res.send(reply);
              }
            }
          }
        }
      }
    });

    function GetCourses() {
      var data = fs.readFileSync("Courses.json", "utf-8");
      var obj;
      if (data) {
        console.log("loading users data");
        var data = fs.readFileSync("Courses.json", "utf8");
        obj = JSON.parse(data);
      } else {
        console.log("Created new dataset object");
        var obj = { user: [] };
      }

      return obj;
    }

    function testIfExistis(id) {
      var bFound = false;
      var newObj;

      if (_.isEmpty(Courses)) {
        res.send("No information found");
      } else {
        Courses.forEach((element) => {
          if (id == element.id) {
            newObj = element;
          }
        });
        if (_.isEmpty(newObj)) {
          return false;
        } else {
          return true;
        }
      }
    }

    return app;
}
