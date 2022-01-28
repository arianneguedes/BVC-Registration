import React, { Component } from 'react'
import CourseEdit from '../AdminPage/CourseEdit';
import CourseCrud from '../AdminPage/CourseCrud'
import Search from '../HomePage/Search';
import Title from '../PageTitle'

// const Courses = [
//     {
//         id: "123456789",
//         code: "PR111",
//         name: "Project Management 1",
//         startdate: "2021-10-01", 
//         enddate: "2021-10-20",
//         description: "Little description", 
//         fee: "10.55",
//         show: true, 
//         action: "0"
//     },
//     {
//         id: "123456878",
//         code: "C+111",
//         name: "C++ Programming Fundamentals",
//         startdate: "2021-10-01", 
//         enddate: "2021-10-20",
//         description: "Little description", 
//         fee: "10.55",
//         show: true, 
//         action: "0"
//     },
//     {
//         id: "123426879",
//         code: "CO111",
//         name: "Computer Maintenance",
//         startdate: "2021-10-01", 
//         enddate: "2021-10-20",
//         description: "Little description", 
//         fee: "10.55",
//         show: true, 
//         action: "0"
//     },
//     {
//         id: "123456810",
//         code: "IS111",
//         name: "Information Security",
//         startdate: "2021-10-01", 
//         enddate: "2021-10-20",
//         description: "Little description", 
//         fee: "10.55",
//         show: true, 
//         action: "0"
//     },
// ];

export class CoursesAdmin extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //        Courses,
    //     };
    //   }
    
    render() {
        return (
            <>
                <div className="courses-crud">
                    <div className="crud1"><CourseCrud/></div>
                </div>
            </>
        )
    }
}

export default CoursesAdmin;
