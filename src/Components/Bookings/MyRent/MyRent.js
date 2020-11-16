import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import MyRentDetails from './MyRentDetails';

const MyRent = () => {
    const[myRentInfo, setMyRentInfo] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/apartments')
        .then(res => res.json())
        .then(data =>{
            setMyRentInfo(data);
        })
    },[])

    return (
        <div>
            <div className="servicelist-table">
                <Table borderless>
                    <thead>
                        <tr>
                            <th>House Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        myRentInfo.map(data => <MyRentDetails data={data} id={data._id}/>)
                    }          
                </Table>
            </div>
        </div>
    );
};

export default MyRent;