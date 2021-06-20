import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
    };
  }

  //   function add(n,m) => {return n+m}

  handleChange = (value) => {
    this.setState({ searchTerm: value });
  };

  render() {
    return (
      <div className="searchContainer">
        <SearchBar query={this.state.searchTerm} onSearch={this.handleChange} />
        <SearchResult query={this.state.searchTerm} />
      </div>
    );
  }
}

export default Home;
