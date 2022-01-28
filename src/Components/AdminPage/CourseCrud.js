import React, { Component } from "react";
import Search from "../HomePage/Search";
import ProgramCreation from "./ProgramCreation";
import "../../CSS/ProgramCourses.css";
import { Link } from 'react-router-dom';
import CourseList from "./CourseList";
import Title from "../PageTitle";
const { v4: uuidv4 } = require("uuid");

export class CourseCrud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    fetch("/courses")
    .then(res=>res.json())
    .then(courseslist=> {
        this.setState({courses:courseslist});
    });
    console.log(this.state)
}

  ChangeHandler = (event)=> {
    let nm = event.target.name;
    let vl = event.target.value;

    this.setState({[nm]: vl})
}
  render() {
    return (
      <div class="courses">
        {/* <Search/> */}
        <Title dataFromParent = "Manage Courses"/> <br/>
        <table className="courses-table">
          <tr>
            <div className="add-course">
              <span className="add-button">
                <button class="btn add-btn" type="button">
                  <Link className="btn-courses-link" id={this.state.id} to={`/CourseAdd/${uuidv4()}`}>
                      Add
                    </Link>

                </button>

              </span>
            </div>
          </tr>
          <tr>
            <th className="th-courses">Code</th>
            <th className="th-courses">Name</th>
            <th className="th-courses">Action</th>
          </tr>
          {this.state.courses.map((item, index) => (
            <CourseList list={item} />
          ))}
        </table>
        <br />
      </div>
    );
  }
}

export default CourseCrud;