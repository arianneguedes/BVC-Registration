import React, { Component } from 'react'
import "../CSS/Header.css"
import Header_Buttons from './HeaderButtons'
import Header_Logo from './HeaderLogo'
import Header_Title from './HeaderTitle'
import Header_Login from './HeaderLogin'
import Title from './PageTitle'
export class Header extends Component {
    render() {
        return (
            <div class = "header">
                <Header_Logo/>
                <Header_Title/>
                <Header_Buttons/>
                <Header_Login/>
            </div>
        )
    }
}

export default Header
