import React, { Component } from 'react'

export class Title extends Component {
  

    changeTitle = () => {
        this.setState({ title: "hal" });
     };

    render() {
        return (
            <div class = "page-title">
                <div >{this.props.dataFromParent}</div>
            </div>
        );
    }
}

export default Title