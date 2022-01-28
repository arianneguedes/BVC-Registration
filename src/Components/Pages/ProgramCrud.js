import React, { Component } from 'react'
import ProgramCourses from '../AdminPage/ProgramCourses'
import ProgramCreation from '../AdminPage/ProgramCreation'
import ProgramsList from '../AdminPage/ProgramsList'
import MainProgram from './MainProgram'
import "../../CSS/ProgramCourses.css"
import Title from '../PageTitle'
import ProgramTerms from '../AdminPage/ProgramTerms'

export class ProgramCrud extends Component {
    render() {
        return (

            <>
            <Title dataFromParent = "Program Management"/>
            <div className="">
                <ProgramCreation id={this.props.match.params.id}/>
                <ProgramCourses id={this.props.match.params.id}/>
            </div>
            </>
        )
    
    }
}


export default ProgramCrud

