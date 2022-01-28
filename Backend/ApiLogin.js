const express = require("express"); //Install all packages using this terminal!!! POSTMAN!
const app = express();
var fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const _ = require("underscore");
const { send } = require("process");

var LoginData;

module.exports = function() {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    //When a user attempts to log in, check if the username exists, then check if the submitted password matches what is on the database
    app.get('/login/:username/:password', function (req, res) {
         console.log ('get one users data ' + req.params.username + " " + req.params.password);
         LoginData = GetLogin();
         if (!testIfExists(req.params.username)) {
            reply={
                message:"Not found", 
            }
            res.send(reply);
         }else {
             LoginData.forEach(element => {
                 if (req.params.username == element.username)
                 {  
                    reply={
                        message:passwordMatch(req.params.password,element.password),
                    }
                    res.send(reply)
                       
                 } 
               
             });
         }
     })

     //check if the username already exists, if not, add user to the database
     app.post('/adduser',(req,res)=>{
         LoginData = GetLogin();
         console.log ('adding a new user')
         const user = {
             id: uuidv4(),
             username: req.body.username,
             password: req.body.password,
             fullname: req.body.full_name,
             birthdate: req.body.birth_date,
             phone: req.body.phone,
             email: req.body.email
         }
         console.log(user);
         
         if(testIfExists(user.username))
         {
            reply={
                status:"This username is already in use"
            }
            console.log(reply)
            res.send(reply);
         }
         else
         {
            LoginData.push(user);
            let data = JSON.stringify(LoginData, null, 2);  
            fs.writeFile('Login.json', data, finished);

            function finished(err)
            {         
            reply={
                user:user,
                code:200,
                status:"Record added successfully",
            }
            res.send(reply);
         }
         
     }     
     })


    function GetLogin() {
        var data = fs.readFileSync('Login.json', 'utf-8');
        var obj
        if (data) {
            console.log('loading users data');
            var data = fs.readFileSync('Login.json', 'utf8');
            obj= JSON.parse(data);
        } else {
            console.log('Created new dataset object')
            var obj= {user:[]};
        }
        
        return obj;
    }

    function testIfExists(username) {
        var bFound = false;
        var newObj;
        
        if(_.isEmpty(LoginData)) {
            res.send("No information found");
        }   
        else {
            LoginData.forEach(element => {
                if (username == element.username) {
                    newObj = element;
                }    
                
            });
            if(_.isEmpty(newObj)) {
                return false;
            }else {
                return true
            }
        }
    }

    function passwordMatch(password1,password2) {
        console.log(password1,password2)
        if(password1==password2)
        {
            return "Welcome!";
        }
        else
        {
            return "Invalid Credentials!";
        }
    }
    return app;
}
