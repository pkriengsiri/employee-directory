import React from "react";
import TableRow from "../TableRow/TableRow";
import "./Table.css"

const Table = ({employeeList, handleSort}) => {
  return (
    <div className="container">
      <div className="column is-12">
        <div className="row">
          <table className="table is-fullwidth is-striped is-hoverable">
            <thead>
              <tr>
                <th>Image</th>
                <th className="sortable-column" onClick={() => {handleSort("Name")}}>Name <i className="fas fa-arrows-alt-v sort-arrow"></i></th>
                <th>Phone</th>
                <th>Email</th>
                <th className="sortable-column" onClick={() => {handleSort("DOB")}}>
                  <abbr title="Date of Birth">DOB <i className="fas fa-arrows-alt-v"></i></abbr>
                </th>
              </tr>
            </thead>
            <tbody>
              {employeeList.map(employee => (
                <TableRow key={employee.id.value} {...employee}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
