import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../../Components/HomePage/Search";
import "../../CSS/ProgramsList.css";
import Title from "../PageTitle";



export class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    fetch("/contactforms")
    .then(res=>res.json())
    .then(contactformslist=> {
        this.setState({contacts:contactformslist});
    });
    console.log(this.state)
}  
  render() {
    return (
      <div class="programs">
        {/* <Search /> */}
        <Title dataFromParent = "Submitted Contact Forms"/>
        
        <table class="table-programs">
          <tr>
            <th class="th-programs">Name</th>
            <th class="th-programs">Email</th>
            <th class="th-programs">Message</th>
          </tr>
          {this.state.contacts.map((item, index) => (
            <tr key={item.id}>
              <td class="td-programs">{item.name}</td>
              <td class="td-programs">{item.email}</td>
              <td class="td-programs">{item.message}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default ContactList;