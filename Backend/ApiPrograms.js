const express = require('express');
const app = express();
const port = 5001;
var Programs;
var fs = require('fs');
const {v4:uuidv4} = require ('uuid')
const cors = require('cors');
const _ = require('underscore')

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

module.exports = function() {


app.get('/Programs', function (req, res) {
    console.log ('get all Programs');
    Programs = GetPrograms();
    res.send (Programs);
})

app.get('/Program/:Programid', function (req, res) {
    console.log ('get one Program id ' + req.params.Programid);
    Programs = GetPrograms();
    if (!testIfExistis(req.params.Programid)) {
        reply={
            Programid:req.params.Programid,
            code:404,
            status:"Not found",
        }
        res.send(reply);
    }else {
        Programs.forEach(element => {
            if (req.params.Programid == element.id)
            {
                res.send (element);
            }    
        });
    }
})

app.post('/addProgram',(req,res)=>{
    Programs = GetPrograms();
    console.log ('adding new Program' )
    const Program = {
        id: uuidv4(),
        code:req.body.code,
        name:req.body.name,
        description:req.body.description,
        type:req.body.type,
        duration: req.body.duration,
        action: req.body.action,
        terms: req.body.terms,
        show:true,
        action:0
    }
    Programs.push (Program);
     let data = JSON.stringify(Programs, null, 2);  
    fs.writeFile('Programs.json', data, finished);

    function finished(err)
    {         
     reply={
        Program:Program,
        code:200,
        status:"Record added successfully",
     }
     res.send(reply);
  }     
})

app.post('/updateProgram/:Programid',(req,res)=>{
    Programs = GetPrograms();
    console.log ('updating one Programid ' + req.params.Programid   )
    
    if(_.isEmpty(Programs)) {
        res.send("There is no information to be updated");
    }   
    else {
        if (!testIfExistis(req.params.Programid)) {
            reply={
                Programid:req.params.Programid,
                code:404,
                status:"Not found",
            }
            res.send(reply);
        }else {

                Programs.forEach(element => {
                    if (req.params.Programid == element.id)
                    {
                        element.code = req.body.code,
                        element.name=req.body.name,
                        element.description=req.body.description,
                        element.type=req.body.type,
                        element.duration=req.body.duration,
                        element.action=req.body.action,
                        element.terms=req.body.terms,
                        element.show=true,
                        element.action=0

                        let data = JSON.stringify(Programs, null, 2);  
                        fs.writeFile('Programs.json', data, finished);
                
                        function finished(err)
                        {         
                            reply={
                            Programid:element.id,
                            code:200,
                            status:"Updated completed successfully",
                            }
                            res.send(reply);
                        } 
                
                    } 
                 })
            }
        }
})

app.get("/searchprogram/:name", (req, res) => {
    Programs = GetPrograms();
    console.log("searching by program name " + req.params.name);
    var ProgramsFound = [{}];
    if (_.isEmpty(Programs)) {
      res.send("There is no information to be found");
    } else {
        var i = -1;
        Programs.forEach((element) => {
          var name = element.name, nameToSearch = req.params.name;
          console.log (name)
          console.log (nameToSearch)
          if(name.indexOf(nameToSearch) > -1)
            {
                ProgramsFound[++i] = element;
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
          console.log (ProgramsFound);
          res.send(ProgramsFound);
        }
    }
  });

app.delete('/deleteProgram/:Programid',(req,res)=>{
    Programs = GetPrograms();
    console.log ('deleting one Programid ' + req.params.Programid )
    var bFound = false;
    var newObj;
    
    
    if(_.isEmpty(Programs)) {
        res.send("There is no information to be deleted");
    }   
    else {
        if (!testIfExistis(req.params.Programid)) {
            reply={
                Programid:req.params.Programid,
                code:404,
                status:"Not found",
            }
            res.send(reply);
        }else {
            for (let index = 0; index < Programs.length; index++) {
                var element= Programs[index].id;
                console.log (element)
                if (req.params.Programid == element)
                {
        
                    Programs.splice (index, 1) ;  
                    let data = JSON.stringify(Programs, null, 2);  
                    fs.writeFile('Programs.json', data, finished);
               
                   function finished(err)
                   {         
                    reply={
                       Programid:element.id,
                       code:200,
                       status:"Removed with success",
                    }
                    bFound = true;
                    res.send(reply);
                 } 
            
                } 
            }
        }
     }
})


function GetPrograms() {
    var data = fs.readFileSync('Programs.json', 'utf-8');
    var obj
    if (data) {
        console.log('loading users data');
        var data = fs.readFileSync('Programs.json', 'utf8');
        obj= JSON.parse(data);
    } else {
        console.log('Created new dataset object')
        var obj= {user:[]};
    }
    
    return obj;
 }

function testIfExistis(id) {
    var bFound = false;
    var newObj;
    
    if(_.isEmpty(Programs)) {
        res.send("No information found");
    }   
    else {
        Programs.forEach(element => {
            if (id == element.id) {
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

return app;
}
