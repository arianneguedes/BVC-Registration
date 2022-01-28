import React, { Component } from 'react'
import "../../../CSS/MainBody.css"
import { Link } from 'react-router-dom'
import "../../../CSS/Search.css"

export class ProgramDescription extends Component {
    constructor(props) {
        super(props);
        this.state = props.description
     };
    render() {
        return (
          <div>
            <h2>Program Description</h2>
            <p>{this.state}</p>
            <button className="btn">
              <Link className="btn-link" to="Confirmation">
                Register
              </Link>
            </button>
          </div>
        );
    }
}

export default ProgramDescription
