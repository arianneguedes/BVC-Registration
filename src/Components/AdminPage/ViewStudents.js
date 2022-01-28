import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../../Components/HomePage/Search";
import "../../CSS/ProgramsList.css";


const Students = [
  {
    id: "a321321321",
    name: "Robert Parker",
    program: "Software Development",
    email: "admin@bvc.com",
    phone: "(456) 456 7894",
    birthdate: "10/25/1979",
    action: "",
  },
  {
    id: "b54654665",
    name: "Arianne Guedes",
    program: "Software Development",
    email: "admin@bvc.com",
    phone: "(456) 786 7891",
    birthdate: "10/25/1974",
    action: "",
  },
  {
    id: "c65465468",
    name: "Jorge Gayer",
    program: "Software Development",
    phone: "(456) 456 7894",
    birthdate: "10/25/1969",
    email: "admin@bvc.com",
    action: "",
  },
  {
    id: "d65465465",
    program: "Information Technology",
    name: "Enrico",
    phone: "(456) 456 7894",
    birthdate: "10/25/1969",
    email: "admin@bvc.com",
    action: "",
  },
];

export class ViewStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: Students,
    };
  }

  render() {
    return (
      <div class="programs">
        <h2 class="h2-programs">Software Development - Students</h2>
        <table class="table-programs">
          <tr>
          <th class="th-programs">Program</th>
          <th class="th-programs">Student ID</th>
            <th class="th-programs">Name</th>
            <th class="th-programs">Email</th>
            <th class="th-programs">Phone</th>
            <th class="th-programs">Birthdate</th>
          </tr>
          {this.state.students.map((item, index) => (
            <tr key={item.id}>
              <td class="td-programs">{item.program}</td>
              <td class="td-programs">{item.id}</td>
              <td class="td-programs">{item.name}</td>
              <td class="td-programs">{item.email}</td>
              <td class="td-programs">{item.phone}</td>
              <td class="td-programs">{item.birthdate}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default ViewStudents;