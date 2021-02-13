import React from "react";
import TableRow from "../TableRow/TableRow";
import "./Table.css";

const Table = ({ employeeList, handleSort }) => {
  const showArrow = (e) => {
    if (e.target.id === "name-column") {
      const target = document.getElementById("name-arrow");
      target.classList.remove("is-hidden");
    } else if (e.target.id === "dob-column") {
      const target = document.getElementById("dob-arrow");
      target.classList.remove("is-hidden");
    }
  };

  const removeArrow = (e) => {
    if (e.target.id === "name-column") {
      const target = document.getElementById("name-arrow");
      target.classList.add("is-hidden");
    } else if (e.target.id === "dob-column") {
      const target = document.getElementById("dob-arrow");
      target.classList.add("is-hidden");
    }
  };

  return (
    <div className="container">
      <div className="column is-12">
        <div className="row">
          <table className="table is-fullwidth is-striped is-hoverable">
            <thead>
              <tr>
                <th>Image</th>
                <th
                  className="sortable-column"
                  id="name-column"
                  onClick={() => {
                    handleSort("Name");
                  }}
                  onMouseOver={showArrow}
                  onMouseLeave={removeArrow}
                >
                  Name <i className="fas fa-arrows-alt-v is-hidden arrow" id="name-arrow"></i>
                </th>
                <th>Phone</th>
                <th>Email</th>
                <th
                  className="sortable-column"
                  id="dob-column"
                  onClick={() => {
                    handleSort("DOB");
                  }}
                  onMouseOver={showArrow}
                  onMouseLeave={removeArrow}
                >
                  <abbr title="Date of Birth">
                    DOB <i className="fas fa-arrows-alt-v is-hidden arrow" id="dob-arrow"></i>
                  </abbr>
                </th>
              </tr>
            </thead>
            <tbody>
              {employeeList.map((employee) => (
                <TableRow key={employee.id.value} {...employee} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
