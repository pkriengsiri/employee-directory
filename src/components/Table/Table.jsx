import React from "react";
import TableRow from "../TableRow/TableRow";

const Table = () => {
  return (
    <div className="container">
      <div className="column is-12">
        <div className="row">
          <table className="table is-fullwidth is-striped is-hoverable">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name <span>⇳</span></th>
                <th>Phone</th>
                <th>Email</th>
                <th>
                  <abbr title="Date of Birth">DOB <span>⇳</span></abbr>
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
