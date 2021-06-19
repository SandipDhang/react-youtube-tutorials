import React, { Component } from "react";
import FComponent from "./components/funcComp";
import CComponent from "./components/classComp";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: "React Props",
      number: 24,
      dataArray: [1, 2, 3],
      dataObject: { name: "SD Creations" },
    };
  }
  render() {
    return (
      <>
        <h1 className="myH1">Simple React Application</h1>
        <FComponent myData={this.state.text} myArr={this.state.dataArray} />
        <CComponent
          globalData={this.state.text}
          myObj={this.state.dataObject}
        />
      </>
    );
  }
}

export default App;
