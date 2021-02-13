import React, { Component } from "react";
import Search from "../../components/Search/Search";
import Table from "../../components/Table/Table";
import API from "../../utils/API";

class Directory extends Component {
  // Variable to hold state
  state = {
    search: "",
    employeeList: [],
  };

  // Makes a GET request to the random employee API when the component mounts
  componentDidMount() {
    API.search()
      .then((res) => {
        this.setState({
          employeeList: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  // Changes state when an input change occurs
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <Search
          handleInputChange={this.handleInputChange}
          value={this.state.search}
        />
        <Table employeeList={this.state.employeeList}/>
      </div>
    );
  }
}

export default Directory;
