import React from 'react';

const TableRow = ({picture, name, phone, email, dob}) => {
    // Format name
    const fullName = `${name.first} ${name.last}`;
    
    // Format email link
    const emailLink = `mailto:${email}`;

    // Format DOB

    return (
        <tr>
            <td><img src={picture.thumbnail} alt={fullName}></img></td>
            <td>{fullName}</td>
            <td>{phone}</td>
            <td><a href={emailLink}>{email}</a></td>
            <td>1991-05-01</td>
        </tr>
    );
};

export default TableRow;