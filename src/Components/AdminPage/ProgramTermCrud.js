import React, { Component } from 'react'
import ProgramCourses from './ProgramCourses'
import ProgramCreation from './ProgramCreation'
import ProgramsList from './ProgramsList'
import "../../CSS/ProgramCourses.css"
import Title from '../PageTitle'
import ProgramTerms from './ProgramTerms'
import TermCreation  from './TermCreation'

export class ProgramTermCrud extends Component {
    render() {
        return (

            <>
            <Title dataFromParent = "Term"/>
            <div className="">
                {console.log("ProgramtermCrud" )}
                <TermCreation id={this.props.match.params.id} description={this.props.match.params.description}/>
                <ProgramTerms id={this.props.match.params.id} description={this.props.match.params.description}/>
            </div>
            </>
        )
    
    }
}


export default ProgramTermCrud

