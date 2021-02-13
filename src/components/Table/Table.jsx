import React from "react";
import TableRow from "../TableRow/TableRow";
import "./Table.css"

const Table = ({employeeList, handleSort}) => {
  const turnRed = () => {
    const target = document.getElementById("name-arrow");
    target.classList.add("red");
    target.classList.remove("is-hidden");
  };

  const removeRed = () => {
    const target = document.getElementById("name-arrow");
    target.classList.remove("red");
    target.classList.add("is-hidden");
  };

  return (
    <div className="container">
      <div className="column is-12">
        <div className="row">
          <table className="table is-fullwidth is-striped is-hoverable">
            <thead>
              <tr>
                <th>Image</th>
                <th className="sortable-column" onClick={() => {handleSort("Name")}} onMouseOver={turnRed} onMouseLeave={removeRed}>Name <i className="fas fa-arrows-alt-v is-hidden" id="name-arrow"></i></th>
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
