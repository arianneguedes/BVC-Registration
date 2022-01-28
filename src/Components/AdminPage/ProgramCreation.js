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
         this.onChangeCode = this.onChangeCode.bind(this);
         this.onChangeName = this.onChangeName.bind(this);
         this.onChangeDescription = this.onChangeDescription.bind(this);
         this.onChangeType = this.onChangeType.bind(this);
        this.state = props.id;
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

      onChangeType(e) {
        this.setState({         
            type: e.target.value,
        });
    }

    componentDidMount() {
        console.log (this.state)
         fetch("/program/" + this.state)
         .then(res=>res.json())
         .then(program=> {
             this.setState(program)
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
             code: this.state.code,
             description: this.state.description,
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
            <div class = "program_creation_container">
                <div class = "labels">
                    <div class = "label_1">Program Code:</div>
                    <div class = "label_2">Name: </div>
                    <div class = "label_3">Type: </div>
                    <div class = "label_4">Description: </div>

                </div>
                <div class = "inputs">
                    <input type="text"  class = "input_1" placeholder={this.state.code} onChange={this.onChangeCode} ></input>
                    <input type="text" class = "input_2" placeholder={this.state.name} onChange={this.onChangeName}></input>
                    <select class = "input_3" placeholder={this.state.type} onChange={this.onChangeType}>
                        <option value="Diploma (2 years)">Diploma (2 years)</option>
                        <option value="Post diploma (1 year)">Post diploma (1 year)</option>
                        <option value="Certificate (3 months)">Certificate (3 months)</option>
                        <option value="Certificate (6 months)">Certificate (6 months)</option>
                        <option value="Upgrade">Upgrade</option>
                    </select>
                    <textarea class = "input_4 textarea" placeholder={this.state.description} onChange={this.onChangeDescription}></textarea>
                    <button type="submit" class="btn" onSubmit={this.Update}>Save</button>
                </div>
            </div>
        </form>
        )
    }
}

export default ProgramCreation