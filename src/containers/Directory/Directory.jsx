import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import Table from '../../components/Table/Table';

class Directory extends Component {
    // Variable to hold state
    state = {
        search: "",
        employeeList: [],
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
                <Search handleInputChange={this.handleInputChange} value={this.state.search}/>
                <Table />
            </div>
        );
    }
}

export default Directory;