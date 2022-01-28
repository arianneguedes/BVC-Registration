import React, { Component } from 'react'
import "../../../CSS/MainBody.css"

export class ProgramName extends Component {
    
    constructor(props) {
        super(props);
        this.state = {"name": props.name, "duration": props.duration};
      }

    render() {
        return (
            <div className="program-name">
                <h2>{this.state.name}</h2>
                <h4>{this.state.duration}</h4>
            </div>
        )
    }
}

export default ProgramName
