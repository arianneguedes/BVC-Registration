import React, { Component } from 'react'
import "../CSS/Header.css"
import Home from './Pages/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Link } from 'react-router-dom'

export class HeaderButtons extends Component {changeTitle = value => () => {
  this.props.parentCallback(value);
}

    render() {
        return (
          <div class="nav_bar">
            <div class="nav_1 nav_element" >
              <Link className="nav_element" to="">
                Home
              </Link>
            </div>
            <div class="nav_2 nav_element" >
              <Link className="nav_element" to="/Courses" >
                Courses
              </Link>
            </div>
            <div class="nav_3 nav_element" >
              <Link className="nav_element" to="/ContactForms" >
                View Forms{" "}
              </Link>
            </div>
            <div class="nav_4 nav_element" >
              <Link className="nav_element" to="/Programs">
                Programs
              </Link>
            </div>
          </div>
        );
    }
}

export default HeaderButtons