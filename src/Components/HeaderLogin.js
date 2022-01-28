import React, { Component } from 'react'
import "../CSS/Header.css"
import Home from './Pages/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Link } from 'react-router-dom'

export class Header_Login extends Component {
    render() {
        return (
          <div class="login-button">
            <Link className="login-element nav_element" to="Login">
              Login
            </Link>
          </div>
        );
    }
}

export default Header_Login