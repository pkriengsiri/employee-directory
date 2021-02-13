import React from 'react';

const TableRow = ({picture, name, phone, email, dob}) => {
    // Format name
    const fullName = `${name.first} ${name.last}`;
    
    // Format email link
    const emailLink = `mailto:${email}`;

    // Format DOB
    const dobFormatted = dob.date.substring(0,10);

    return (
        <tr>
            <td><img src={picture.thumbnail} alt={fullName}></img></td>
            <td>{fullName}</td>
            <td>{phone}</td>
            <td><a href={emailLink}>{email}</a></td>
            <td>{dobFormatted}</td>
        </tr>
    );
};

export default TableRow;