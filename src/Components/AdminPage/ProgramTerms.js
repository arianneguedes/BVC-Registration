import React, { Component } from "react";
import Search from "../HomePage/Search";
import ProgramCreation from "./ProgramCreation";
import "../../CSS/ProgramCourses.css";
import Course from "./Course";
import { Link, useParams } from 'react-router-dom';
const { v4: uuidv4 } = require("uuid");


export class ProgramTerms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id, 
      description: props.description,
      terms: [{courses:[{}]}],
      program: {terms:[{courses:[{}]}]}
    }
  }

  ChangeHandler = (event)=> {
    let nm = event.target.name;
    let vl = event.target.value;

    this.setState({[nm]: vl})
}

 componentDidMount() {
    console.log ("Starting component did mount")
    fetch("/program/" + this.state.id)
    .then(res=>res.json())
    .then(program=> {
        this.setState(
            {id: this.state.id, 
            description: this.state.description,
          program}
        )
        //console.log(this.state)
        ;
    });
  }

  render() {
    var i, index =0;
    var showItem = "";
    console.log(this.state)
    this.state.program.terms.forEach(element => {
        console.log (this.state.description)
        if (element.description == this.state.description) {
            showItem = (
                <div className="terms_on_programs"> 
                <h3>{this.state.description}</h3>
                <span className="add-button">
                    <button class="btn add-btn" type="button">
                    <Link className="btn-courses-link" id={this.state.id} to={`/EditTerm/${this.state.id}}`}>
                    Add Courses
                </Link>
    
                    </button>
                </span>
                <div className="courses_on_programs">
                {
    
                 element.courses.map((item) => (
                     <Course list={item} />
                 ))
                }
                
                <br/>
                </div>
                
            </div>
            )
            

        }
        else {
            
        }
    });

            
        
        // this.state.terms.map((myterm, index) => (
        //         //}
        //     ))
            

    

    return (
      <div class="courses" >
          {showItem}
          {/* {console.log(this.props.match.params.description)} */}
        <br />
        {/* <span className="add-button">
          <button class="btn add-btn" type="button">
            New Term
          </button>
        </span> */}
      </div>
    );
  }
}

export default ProgramTerms;