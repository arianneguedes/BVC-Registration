import React, { Component } from 'react'
import "../../CSS/Maintenance.css"
import ProgramCourses from './ProgramCourses'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';


export class ProgramCreation extends Component {

    constructor(props) {
        super(props);
         this.Update = this.Update.bind(this);
         this.onChangeDescription = this.onChangeDescription.bind(this);
        this.state  = {
            id : props.id,
            description : props.description
        }
    }


    
      onChangeDescription(e) {
          this.setState({       
               description: e.target.value,
          });
      }


    componentDidMount() {
         fetch("/program/" + this.state.id)
         .then(res=>res.json())
         .then(program=> {
             this.setState(
                {id: this.state.id, 
                    description: this.state.description,
                    program
                }
                 )
             console.log(program)
             ;
        });
    }

    Update(e) {
        try{ 
        e.preventDefault();
        console.log ("Starting update " + this.state.id) 
        const program = {
             id: this.state.id,
             code: this.state.program.code,
             description: this.state.program.description,
             duration : this.state.duration,
             name: this.state.name, 
             terms: this.state.terms
        }
    
        var myurl = `http://localhost:5001/updateprogram/${program.id}`;
        axios.post(myurl , program)
        .then(res => console.log(res));
        }catch(e){ 
        console.log("error happened" + e);
        }
      }

    render() {
        return (
          <form onSubmit={this.Update}>
            <div class="program_creation_container">
              <div class="labels">
                <div class="label_2">Term Name: </div>
              </div>
              <div class="inputs">
                <div>
                  <input
                    type="text"
                    class="input_2"
                    placeholder={this.state.description}
                    onChange={this.onChangeDescription}
                  ></input>
                </div>
                <br />
                <div>
                  <button type="submit" class="btn space-buttons" onSubmit={this.Update}>
                    Save
                  </button>
                  <button type="Button" class="btn">
                    <Link
                      className="btn-courses-link"
                      id={this.state.id}
                      to={`/EditProgram/${this.state.id}`}
                    >
                      Back
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </form>
        );
    }
}

export default ProgramCreation