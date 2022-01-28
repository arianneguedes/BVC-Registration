import React, { Component } from "react";
import Search from "../HomePage/Search";
import ProgramCreation from "./ProgramCreation";
import "../../CSS/ProgramCourses.css";
import Course from "./Course";
import { Link } from 'react-router-dom';



export class ProgramCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id, 
      terms: [{courses:[{}]}]
    }
  }

  ChangeHandler = (event)=> {
    let nm = event.target.name;
    let vl = event.target.value;

    this.setState({[nm]: vl})
}

  componentWillMount() {
    console.log ("Starting component did mount")
    fetch("/program/" + this.state.id)
    .then(res=>res.json())
    .then(myprogram=> {
        this.setState(
          {
            id: this.state.id, 
            terms: myprogram.terms
          }
        )
        console.log(this.state)
        ;
    });
  }

  render() {

    return (
      <div class="courses">
        {this.state.terms.map((myterm) => (
          <div className="terms_on_programs">
            <h3>{myterm.description}</h3>
            <span className="add-button">
              <button class="btn add-btn" type="button">
                <Link
                  className="btn-courses-link"
                  id={this.state.id}
                  to={`/EditTerm/${this.state.id}/${myterm.description}`}
                >
                  Edit Term
                </Link>
              </button>
            </span>
            <div className="courses_on_programs">
              {myterm.courses.map((item, index) => (
                <Course list={item} />
              ))}
              <br />

              <br />
            </div>
          </div>
        ))}

        {/* <table className="courses-table">
          <tr>
            <th className="th-courses">Code</th>
            <th className="th-courses">Name</th>
            <th className="th-courses">Action</th>
          </tr>
          {
            this.state.terms.map((myterm, index) => (
              myterm.courses.map((item, index) => (
                <Course list={item} />
              ))
            ))
          }
        </table> */}
        <br />
        {/* <div className="add-button add-btn">
          <button class="btn" type="button">
            New Term
          </button>
        </div> */}
      </div>
    );
  }
}

export default ProgramCourses;