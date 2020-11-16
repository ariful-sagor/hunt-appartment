import React from 'react';

const ListDetails = ({ data }) => {
    console.log(data);
    return (
        <tbody>
            <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.message}</td>
                <td className="text-success">Done</td>
            </tr>
        </tbody>
    );
};

export default ListDetails;