import React, { Component } from 'react'
import "../../CSS/Login.css"
import { Link } from 'react-router-dom'
import axios from 'axios'


export class Sign_Up_Page extends Component {
    render() {
        return (
          <div class="login_container">
            <form class="sign-up-container">
              <div class="title">Sign Up</div>
              <div class="sign-up-labels sign-up-first-name">Username</div>
              <div class="sign-up-labels sign-up-last-name">Full Name</div>
              <div class="sign-up-labels sign-up-dob">Date of Birth</div>
              <div class="sign-up-labels sign-up-phone">Phone</div>
              <div class="sign-up-labels sign-up-email">Email</div>
              <div class="sign-up-labels sign-up-password">Create Password</div>
              <div class="sign-up-labels sign-up-password-repeat">
                Repeat Password
              </div>
              <input
                id="username"
                type="text"
                class="sign-up-inputs input-sign-up-first-name"
                required
              ></input>
              <input
                id="full_name"
                type="text"
                class="sign-up-inputs input-sign-up-last-name"
                required
              ></input>
              <input
                id="birth"
                type="date"
                class="sign-up-inputs input-sign-up-dob"
                required
              ></input>
              <input
                id="phone"
                type="text"
                class="sign-up-inputs input-sign-up-phone"
                required
              ></input>
              <input
                id="email"
                type="email"
                class="sign-up-inputs input-sign-up-email"
                required
              ></input>
              <input
                type="password"
                class="sign-up-inputs input-sign-up-password"
                required
              ></input>
              <input
                id="password"
                type="password"
                class="sign-up-inputs input-sign-up-password-repeat"
                required
              ></input>
              <div class="sign-up-button-container">
                <button class="log-in-button" type="submit" onClick={this.add_user}>
                <Link className="btn-link" to="/">
                        Sign Up
                      </Link> 
                </button>
                <button class="log-in-button" type="button" >
                  <Link className="log-in-link" to="">
                    Cancel
                  </Link>
                </button>
              </div>
            </form>
          </div>
        );
    }

    add_user(){
      try{
      console.log("Starting stuff   ",myurl);
       const credentials ={
           username: document.getElementById('username').value, 
           full_name: document.getElementById('full_name').value,
           birth_date: document.getElementById('birth').value,
           phone: document.getElementById('phone').value,
           email: document.getElementById('email').value,
           password: document.getElementById('password').value,
       }


       var myurl = `http://localhost:5001/adduser`;
       console.log("Starting stuff   ",myurl);

       axios.post(myurl , credentials)
       .then(res => res.data.status)
       .then(res => alert(res));
       }catch(e){ 
       console.log("error happened" + e);
   }
   }

}

export default Sign_Up_Page