import React, { Component } from 'react'
import "../../CSS/Login.css"
import { Link } from 'react-router-dom'



export class CourseRegistraionConfirmation extends Component {
    render() {
        return (
          <div class="login_container">
            <div class="sign-up-container confirmation-popup-container">
              <div class="title confirmation-message">
                Are you sure you want to sign up for Software Development?
              </div>
              <div class="sign-up-button-container confirmation-button-container">
                <button class="log-in-button" type="submit">
                  <Link className="log-in-link" to="">
                    Accept
                  </Link>
                </button>
                <button class="log-in-button" type="button">
                  <Link className="log-in-link" to="">
                    Cancel
                  </Link>
                </button>
              </div>
            </div>
          </div>
        );
    }
}

export default CourseRegistraionConfirmation