import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export class CourseEdit extends Component {
    constructor(props) {
        super(props);
        this.Update = this.Update.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeFee = this.onChangeFee.bind(this);
        this.state = props.list;
      }

    EventHandler = (event)=> {
        let nm = "action";
        let vl = "0";
        console.log("close clicked")
        this.setState({[nm]: vl})
        super.setState({[nm]: vl})
    }

    onChangeName(e) {
      this.setState({
          name: e.target.value,
      });
    }

    onChangeCode(e) {
        this.setState({         
            code: e.target.value,
        });
    }
  
    onChangeDescription(e) {
        this.setState({         
            description: e.target.value,
        });
    }
    
    onChangeStartDate(e) {
        this.setState({         
            startdate: e.target.value,
      });
    }  
    onChangeEndDate(e) {
      this.setState({         
          enddate: e.target.value,
      });
    }
      onChangeFee(e) {
        this.setState({         
            fee: e.target.value,
        });
      }
    componentDidMount() {

      fetch("/course/" + this.props.match.params.id)
      .then(res=>res.json())
      .then(course=> {
          this.setState(course)
          console.log(course)
          ;
      });

      
  }

  Update(e) {
    try{ 
    e.preventDefault();
    console.log ("Starting update " + this.state.id) 
    const course = {
         id: this.state.id,
         code: this.state.code,
         name: this.state.name,
         startdate : this.state.startdate,
         enddate: this.state.enddate, 
         description: this.state.description, 
         fee: this.state.fee
    }

    var myurl = `http://localhost:5001/updatecourse/${course.id}`;
    axios.post(myurl , course)
    .then(res => console.log(res));
    alert("Course updated successfully!")
    }catch(e){ 
    console.log("error happened" + e);
    }
  }
    render() {
        var showItem = "";
        var course = this.state;
        var localCourse = {};
        if (course) {
            localCourse = course;
        }else
        {
            localCourse.code = "";
            localCourse.name = "";
            localCourse.description = ""; 
            localCourse.startdate = "";
            localCourse.enddate = "";
            localCourse.fee = ""
        }
            showItem = (
              <form onSubmit={this.Update}>
              <table className="table">
                <tr className="table-row">
                  <h2>Course Edit</h2>
                </tr>
                <tr className="table-row">
                  <td>
                    <h5>Course Code: </h5>
                  </td>
                  <td>
                    <input
                      className="input-courses"
                      type="text"
                      placeholder={localCourse.code}
                      onChange={this.onChangeCode}
                    ></input>
                  </td>
                </tr>

                <tr className="table-row">
                  <td>
                    <h5>Name: </h5>
                  </td>
                  <td>
                    <input
                      className="input-courses"
                      type="text"
                      placeholder={localCourse.name}
                      onChange={this.onChangeName}
                    ></input>
                  </td>
                </tr>

                <tr className="table-row">
                  <td>
                    <h5>Start Date:</h5>
                  </td>
                  <td>
                    <input
                      className="input-courses"
                      type="date"
                      value={localCourse.startdate}
                      onChange={this.onChangeStartDate}
                    ></input>
                  </td>
                </tr>

                <tr className="table-row">
                  <td>
                    <h5>To End Date:</h5>
                  </td>
                  <td>
                    <input
                      className="input-courses"
                      type="date"
                      value={localCourse.enddate}
                      onChange={this.onChangeEndDate}
                    ></input>
                  </td>
                </tr>
                <tr className="table-row">
                  <td height={50}>
                    <h5>Description:</h5>
                  </td>
                  <td>
                    <input
                      type="textarea"
                      placeholder={localCourse.description}
                      className="input-courses textarea-courses"
                      onChange={this.onChangeDescription}
                    />
                  </td>
                </tr>
                <tr className="table-row">
                  <td>
                    <h5>Fee:</h5>
                  </td>
                  <td>
                    <input
                      className="input-courses input-bottom"
                      type="text"
                      placeholder={localCourse.fee}
                      onChange={this.onChangeFee}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="button"  type="submit" className="btn">
                      Save
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn">
                      <Link className="btn-link" to="/Courses">
                        Close
                      </Link>
                    </button>
                  </td>
                </tr>
              </table>
              </form>
            );

            // render() {
            //     var showItem = "";
            //     var course = this.state;
            //     //if (course.action =="edit") {
            //         showItem = 
            //         (
            //             <table className="table">
            //                 <tr className="table-row">
            //                     <h2>Course Edit</h2>
            //                 </tr>
            //                 <tr className="table-row">
            //                     <td>
            //                         <h5>Course Code: </h5>
            //                     </td>
            //                     <td>
            //                         <input type="text" value={course.code}></input>
            //                     </td>
            //                 </tr>
            
            //                 <tr className="table-row">
            //                     <td>
            //                         <h5>Name: </h5>
            //                     </td>
            //                     <td>
            //                         <input type="text" value={course.name}></input>
            //                     </td>
            //                 </tr>
            
            //                 <tr className="table-row">
            //                     <td>
            //                         <h5>Start Date:</h5>
            //                     </td>
            //                     <td>
            //                         <input type="date" value={course.startdate}></input>
            //                     </td>
            //                 </tr>
            
            //                 <tr className="table-row">
            //                     <td>
            //                         <h5>To End Date:</h5>
            //                     </td>
            //                     <td>
            //                         <input type="date" value={course.enddate}></input>
            //                     </td>
            //                 </tr>
            //                 <tr className="table-row">
            //                     <td height={50}>
            //                         <h5>Description:</h5>
            //                     </td>
            //                     <td>
            //                         <input type="textarea" rows={5} cols={5} height={550} value={course.description}/>
            //                     </td>
            //                 </tr>
            //                 <tr className="table-row">
            //                     <td>
            //                         <h5>Fee:</h5>
            //                     </td>
            //                     <td>
            //                         <input type="text" value={course.fee}/>
            //                     </td>
            //                 </tr>
            //                 <tr>
            //                     <td>
            //                         <input type="button" className="btn" value="Save"/>
            //                     </td>
            //                     <td>
            //                         <input type="button" className="btn" value="Close" onClick={this.EventHandler}/>
            //                     </td>
            //                 </tr>
            //             </table>
            //         );
        //}
        //else
         //   showItem = ""
        
        return (
            <>
                {showItem}
            </>
        )
    }
}

export default CourseEdit
