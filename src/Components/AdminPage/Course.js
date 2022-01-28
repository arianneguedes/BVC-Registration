import React from 'react'

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.list;
    }

    ChangeHandler = (event)=> {
        let nm = event.target.name;
        let vl = false;
        console.log ({[nm]: vl})
        this.setState({[nm]: vl})
    }

    render() {
        const couses = this.state;
        var listItem = ""
        console.log (this.state)
        if (this.state.show==true) {
             listItem = (
               <table className="courses_on_programs">
                 <tbody>
                   <tr key={this.state.id}>
                     <td className="courses-code">{this.state.code}</td>
                     <td className="courses-name">{this.state.name}</td>
                     <td className="courses-button">
                       <button
                         class="btn"
                         type="button"
                         name="show"
                         onClick={this.ChangeHandler}
                       >
                         Remove
                       </button>
                     </td>
                   </tr>
                 </tbody>
               </table>
             );

    
        }
            return (
        <>
            {listItem}
        </>    
        );
    }
}

export default Course
