import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../../Components/HomePage/Search";
import "../../CSS/ProgramsList.css";
import Title from "../PageTitle";


export class ProgramsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: [],
    };
  }
  componentDidMount() {
    fetch("/programs")
    .then(res=>res.json())
    .then(programlist=> {
        this.setState({programs:programlist});
    });
    console.log(this.state)
}

  render() {
    return (
      <div class="programs" >
        {/* <Search /><br/> */}
        <Title dataFromParent = "Bow Valley College Programs"/>
        <table class="table-programs">
          <tr>
            <th class="th-programs">Code</th>
            <th class="th-programs">Name</th>
            <th class="th-programs">Description</th>
            <th class="th-programs">Type</th>
            <th class="th-programs">Duration</th>
            <th class="th-programs">Action</th>
          </tr>
          {this.state.programs.map((item, index) => (
            <tr key={item.id}>
              <td class="td-programs">{item.code}</td>
              <td class="td-programs">{item.name}</td>
              <td class="td-programs">{item.description}</td>
              <td class="td-programs">{item.type}</td>
              <td class="td-programs">{item.duration}</td>
              <td class="td-programs">
                <button class="button-programs" type="button">
                  <Link class="link-programs" to="EditProgram">
                    Add
                  </Link>
                </button>
                <br></br>
                <button
                  class="button-programs button-programs-middle"
                  type="button"
                >
                  <Link class="link-programs" to={`EditProgram/${item.id}`}>
                    Edit
                  </Link>
                </button>
                <br></br>
                <button class="button-programs" type="button">
                  <Link class="link-programs" to="ViewStudents">
                    View
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default ProgramsList;
