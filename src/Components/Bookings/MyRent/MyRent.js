import React from 'react';
import { Table } from 'react-bootstrap';

const MyRent = () => {

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
                                        
                </Table>
            </div>
        </div>
    );
};

export default MyRent;