import React from 'react';
import { Table } from 'react-bootstrap';

const List = () => {


    return (
        <div>
            <div className="servicelist-table">
                <Table borderless>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Product Details</th>
                            <th className="text-center">status</th>
                        </tr>
                    </thead>
                                        
                </Table>
            </div>
        </div>
    );
};

export default List;