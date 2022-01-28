import React, { Component } from 'react'
import "../../CSS/Maintenance.css"
import ProgramCreation from './ProgramCreation'
import ProgramCourses from './ProgramCourses'
export class MaintenanceMainBody extends Component {
    render() {
        return (
            <div class = "main_body">
                <div>
                    <ProgramCreation/>    
                </div>
                <div>
                    <ProgramCourses/>
                </div>
            </div>

        )
    }
}
export default MaintenanceMainBody