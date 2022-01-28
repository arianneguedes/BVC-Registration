import React, { Component } from 'react'
import "../../CSS/Login.css"
import Login_Form from './LoginForm'



export class Login_Container extends Component {
    render() {
        return (
            <div class = "login_container">
              <Login_Form/>
            </div>
        )
    }
}

export default Login_Container