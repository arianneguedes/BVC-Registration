import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../../CSS/Login.css"
import Header_Buttons from '../HeaderButtons'
import axios from 'axios'


export class Login_Form extends Component {
   

    render() {
        return (
            <form class = "login-form">
                <div class = "title">User Login</div>
                <div class = "username">Username</div>
                <div class = "password">Password</div>
                <input type="text" id = 'username' class = "username-input" required ></input>
                <input type="password" id = 'user_password' class = "password-input" required></input>
                <div class = "button-container">
                    <button class = "log-in-button" type = "submit" onClick={this.check_user} >                      
                    <Link className="btn-link" to="/">
                        Login
                      </Link> 
                    </button> 
                    <button class = "log-in-button"><Link className="log-in-link" to="">Cancel</Link></button>
                </div>
                <Link to="SignUp" class = "sign-up-link"> Dont have an account? Sign up here.</Link>
            </form>
        )
    }

    check_user(){
       try{
        const credentials ={
            password: document.getElementById('user_password').value
        }


        var myurl = `http://localhost:5001/login/` + document.getElementById('username').value + "/" + document.getElementById('user_password').value ;
        console.log("Starting stuff   ",myurl);

        axios.get(myurl , credentials)
        .then(res => res.data.message)
        .then(res => alert(res));
        }catch(e){ 
        console.log("error happened" + e);
    }
    }
    
}



export default Login_Form