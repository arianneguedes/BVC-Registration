import React, { Component } from 'react'
import "../../../CSS/MainBody.css"
import ProgramDescription from './ProgramDescription'

export class ProgramDetails extends Component {
    constructor(props) {
        super(props);
        this.state = props.list
     };
      
    render() {
        var program = this.state;
        return (
            
            <div className="main-program">
                <div className="main-cards program-detail">
                    <ProgramDescription description={program.description}/>
                </div>
                {program.terms.map((item, index) => (
                        <div className="main-cards">
                        <ul>
                            <h3>{item.description}</h3>
                            {item.courses.map((course, index) => (
                                <li>{course.name}</li>
                            ))}
                        </ul>
                    </div>
                    ))} 
            </div>
        )
    }
}

export default ProgramDetails
