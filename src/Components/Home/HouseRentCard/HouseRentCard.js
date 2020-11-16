import { faBath, faBed, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HouseRentCard.css'
const HouseRentCard = ({ house }) => {
    return (
        <div className="col-md-4 house-container">
            <div className=" house-card card">

                {
                    house.image.img ? <img src={`data:image/png;base64,${house.image.img}`} className="info-img info-item card-img-top" alt="" /> : <img src={house.image} className="info-img info-item card-img-top" alt="" />
                }
                <div className="text-area pl-3 mt-3">
                    <h4 className="text-title">{house.title}</h4>
                    <p className="text-secondary mt-3"> <FontAwesomeIcon icon={faMapMarkerAlt} /> {house.location}</p>
                </div>
                <div className="d-flex pl-3">
                    <p className="text-secondary mr-5"> <FontAwesomeIcon icon={faBed} /> {house.bedroom} Bedrooms</p>
                    <p className="text-secondary"> <FontAwesomeIcon icon={faBath} /> {house.bathroom} Bathrooms</p>
                </div>
                <div className="d-flex pl-3 mt-3">
                    <h1 className="mr-5">${house.price}</h1>
                    <button className="btn details-btn">View Details</button>
                </div>

            </div>
        </div>
    );
};

export default HouseRentCard;