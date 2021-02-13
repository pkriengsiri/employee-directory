import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import Table from '../../components/Table/Table';

class Directory extends Component {
    render() {
        return (
            <div>
                <Search />
                <Table />
            </div>
        );
    }
}

export default Directory;