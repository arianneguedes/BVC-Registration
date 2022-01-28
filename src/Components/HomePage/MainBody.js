import React, { Component } from 'react'
import ProgramName from './Program/ProgramName'
import MainProgram from '../Pages/MainProgram'
import Search from './Search'
import Title from '../PageTitle'
export class MainBody extends Component {
    render() {
        return (
            <div >
                {/* <Search/> */}
                {/* <Title dataFromParent = "Full Program List"/> */}
                <MainProgram/>
            </div>
        )
    }
}

export default MainBody
