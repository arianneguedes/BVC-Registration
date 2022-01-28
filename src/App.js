import React from "react";


import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Search from "./Components/HomePage/Search";
import Contact from "./Components/Contact";
import ProgramsList from "./Components/AdminPage/ProgramsList"
import Home from "./Components/Pages/Home";
//router - npm install react-router-dom --save
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ShowContact from "./Components/Pages/ShowContact";
import CoursesAdmin from "./Components/Pages/CoursesAdmin";
import ProgramDetails from "./Components/HomePage/Program/ProgramDetails";
import ProgramCrud from "./Components/Pages/ProgramCrud";
import Login_Form from "./Components/LoginPage/LoginForm";
import Login_Container from "./Components/LoginPage/LoginElement";
import ContactForms from "./Components/Pages/ContactForms";
import Sign_Up_Page from "./Components/SignUpPage/SignUpForm";
import CourseEdit from "./Components/AdminPage/CourseEdit";
import CourseAdd from "./Components/AdminPage/CourseAdd";
import SearchMenu from "./Components/HomePage/SearchMenu";
import CourseRegistraionConfirmation from "./Components/HomePage/CourseRegistrationConfirmation";
import ViewStudents from "./Components/AdminPage/ViewStudents";
import ProgramCreation from "./Components/AdminPage/ProgramCreation";
import ProgramTermCrud from "./Components/AdminPage/ProgramTermCrud";

function App() {
  return (
    <BrowserRouter basename="/bvc">
      <Route path="/Login" component={Login_Container} exact/>
      <Route path="/SignUp" component={Sign_Up_Page} exact/>
      <Route path="/Confirmation" component={CourseRegistraionConfirmation} exact/>
      <header>
          <Header/>
      </header>
      <div className="App">
          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="Contact" component={ShowContact} exact/>
              <Route path="/Courses" component={CoursesAdmin} exact/>
              <Route path="/Programs" component={ProgramsList} />
              <Route path="/EditProgram/:id" component={ProgramCrud} exact/>
              <Route path="/EditTerm/:id/:description" component={ProgramTermCrud} exact/>
              <Route path="/ContactForms" component={ContactForms} exact/>
              <Route path="/CourseEdit/:id" component={CourseEdit} exact/>
              <Route path="/CourseAdd/:id" component={CourseAdd} exact/>
              <Route path="/ProgramCreation/:id" component={ProgramCreation} exact/>
              <Route path="/SearchWindow" component={SearchMenu} exact/>
              <Route path="/ViewStudents" component={ViewStudents} exact/>
          </Switch>
          <footer>
              <Footer/>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
