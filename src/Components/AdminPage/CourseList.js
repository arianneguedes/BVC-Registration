import React from 'react'
import "../../CSS/CourseCrud.css"
import CourseEdit from './CourseEdit';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.list;
    }

    deleteChangeHandler = (event)=> {


        let nm = event.target.name;
        let vl = false;
        console.log ({[nm]: vl})
        this.setState({[nm]: vl})
        
        
        var myurl = `http://localhost:5001/deletecourse/${event.target.value}`;
        axios.delete(myurl)
        .then(res => console.log(res));
        alert("Course deleted successfully!")

    }


    render() {
        const couses = this.state;
        var listItem = ""
        var internalID = 0;
//        var editItem = ""

//          editItem = ""
          if (this.state.show==true) {
            listItem = (
              <tr key={this.state.id} className="course-item">
                <td width="50px">{this.state.code}</td>
                <td>{this.state.name}</td>
                <td>
                  <button
                    class="btn-courses btn-courses-edit btn-list"
                    name="action"
                  >
                     <Link className="btn-courses-link" id={this.state.id} to={`/CourseEdit/${this.state.id}`}>
                      Edit
                    </Link>
                  </button>
                  <br></br>
                  <button
                    class="btn-courses btn-list"
                    type="button"
                    name="show"
                    value = {this.state.id}
                    onClick={this.deleteChangeHandler}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          }
          // if (this.state.action == "edit") {
          //   editItem = (
          //     <td>
          //       <CourseEdit list={this.state}/>
          //     </td>
          //   )
          // }
            return (
        <>
            {listItem}
            {/* {editItem} */}
        </>    
        );
    }
}

export default CourseList
