import React, { Component } from "react";
import Search from "../../components/Search/Search";
import Table from "../../components/Table/Table";
import API from "../../utils/API";

class Directory extends Component {
  // Variable to hold state
  state = {
    filtered: false,
    filteredEmployees: [],
    employeeList: [],
    search: "",
    sortDOB: "",
    sortName: "",
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

    if (value !== "") {
      const filteredEmployees = this.state.employeeList.filter((employee) => {
        const fullName = employee.name.first.concat(" ",employee.name.last).toLowerCase().trim();
        return fullName.includes(value.toLowerCase().trim());
      });
      console.log(filteredEmployees);
      this.setState({ filtered: true, filteredEmployees: filteredEmployees });
    } else {
      this.setState({ filtered: false });
    }
  };

  //Handles a column sort
  handleSort = (field) => {
    if (field === "Name") {
      if (this.state.sortName === "" || this.state.sortName === "dsc") {
        const sortedEmployees = this.state.employeeList.sort((a, b) => {
          return a.name.last.localeCompare(b.name.last);
        });
        this.setState({
          employeeList: sortedEmployees,
          sortName: "asc",
        });
      } else if (this.state.sortName === "asc") {
        const sortedEmployees = this.state.employeeList.sort((a, b) => {
          return b.name.last.localeCompare(a.name.last);
        });
        this.setState({
          employeeList: sortedEmployees,
          sortName: "dsc",
        });
      }
    } else if (field === "DOB") {
      if (this.state.sortDOB === "" || this.state.sortDOB === "dsc") {
        const sortedEmployees = this.state.employeeList.sort((a, b) => {
          return a.dob.date.localeCompare(b.dob.date);
        });
        this.setState({
          employeeList: sortedEmployees,
          sortDOB: "asc",
        });
      } else if (this.state.sortDOB ===  "asc") {
        const sortedEmployees = this.state.employeeList.sort((a, b) => {
          return b.dob.date.localeCompare(a.dob.date);
        });
        this.setState({
          employeeList: sortedEmployees,
          sortDOB: "dsc",
        });
      }
    }
  };

  render() {
    return (
      <div>
        <Search
          handleInputChange={this.handleInputChange}
          value={this.state.search}
        />
        <Table
          employeeList={this.state.filtered ? this.state.filteredEmployees: this.state.employeeList}
          handleSort={this.handleSort}
        />
      </div>
    );
  }
}

export default Directory;
