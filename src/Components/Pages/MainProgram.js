import React, { Component } from 'react'
import ProgramName from '../HomePage/Program/ProgramName'
import ProgramDetails from '../HomePage/Program/ProgramDetails'
import ProgramsData from '../HomePage/Program/ProgramsData'
import Title from '../PageTitle'

var BVCPrograms = ProgramsData;
var apiRes;
export class MainProgram extends Component {
    constructor(props) {
        super(props);
        console.log(apiRes);
        this.state ={
            programs:[], 
            showSearch: false
        };
        this.onChangeText = this.onChangeText.bind(this);
        this.showSearch = this.showSearch.bind(this);
      }

    componentDidMount() {
        fetch("/programs")
        .then(res=>res.json())
        .then(programlist=> {
            this.setState({programs:programlist});
        });
        console.log(this.state)
    }

    showSearch(e) {
        console.log (this.state)
        if (this.state.showSearch==true) {
            this.setState({showSearch : false});
        }else {
            this.setState({showSearch : true});
        }

    }

    onChangeText(e) {
        this.setState({programs:[]});
        if (e.target.value == "") {
            fetch("/programs")
            .then(res=>res.json())
            .then(programlist=> {
                this.setState({programs:programlist, showSearch:true}, );
            });
    
        }else{
            this.setState({programs:[]});
            fetch("/searchprogram/" + e.target.value)
            .then(res=>res.json())
            .then(programs=> {
                if (programs != undefined) {
                    if (programs.code != 404) {
                        this.setState({programs: programs, showSearch: true});
                    }else {
                        this.setState({programs:[], showSearch: true});
                    }
                    
                }else {
                    this.setState({programs:[], showSearch: true});
                }
            });
    
        }
    }
    MountSearch() {
        var searchBar = "";
        if (this.state.showSearch) {
            searchBar = (
                <div className="showSearch">
                    <br/>
                    <div>Search by Name</div>
                <input type="text" className="search" onChange={this.onChangeText}></input>
                
            </div>
            )
        }else {
            searchBar = (<div></div>)
        }
        return searchBar;
        
    }
    
    render() {
        return (
            <>
                <button className="btn" onClick={this.showSearch} >Search</button>
                <br></br>
                {this.MountSearch()}
                {console.log(this.state.programs)}
                {this.state.programs.map((item) => (
                    <div className="program">
                        <ProgramName name={item.name} duration={item.duration}/>
                        <ProgramDetails list={item}/>
                    <br/><br/><br/>
                </div>
                ))}
            </>
        )
    }
}

export default MainProgram
