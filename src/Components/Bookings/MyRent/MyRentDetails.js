import React from 'react';

const MyRentDetails = ({data}) => {
    console.log(data);
    return (
        <tbody>
            <tr>
                <td><b>{data.title}</b></td>
                <td><b>${data.price}</b></td>
                <button className="btn btnStyle">View Details</button>
            </tr>
        </tbody>
    );
};

export default MyRentDetails;