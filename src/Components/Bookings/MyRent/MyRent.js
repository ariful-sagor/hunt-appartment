import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import MyRentDetails from './MyRentDetails';

const MyRent = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[myRentInfo, setMyRentInfo] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/apartments')
        .then(res => res.json())
        .then(data =>{
            setMyRentInfo(data);
        })
    },[])

    // useEffect(() => {
    //     fetch('http://localhost:5000/specificUserBooking?email='+loggedInUser.email)
    //     .then(res => res.json())
    //     .then(data => {
    //         setMyRentInfo(data);
    //     })
    // },[])

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