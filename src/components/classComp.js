import React, { Component } from "react";

class ClassComp extends Component {
  render() {
    return (
      <h1>
        This is a Class Component: {this.props.globalData} <br />
        we are watching {this.props.myObj.name}
      </h1>
    );
  }
}

export default ClassComp;
