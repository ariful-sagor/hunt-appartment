import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddRentHouse.css';
const AddRentHouse = () => {
    const { register, errors } = useForm();
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('location', info.location);
        formData.append('bathroom', info.bathroom);
        formData.append('price', info.price);
        formData.append('bedroom', info.bedroom);

        fetch('/addRentHouse', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Service Added successfully!');
            })
            .catch(error => {
                console.error(error);
                alert('Fill all fields properly.');
            })
        e.preventDefault();
        e.target.reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="" className="form pl-5 pt-5 add-service-container" >
                <div className="include-btn">

                    <div className="in-container mr-5 ">
                        <div className="">
                            <h6 className="des-label">Service Title</h6>
                            <input onBlur={handleBlur} name="title" required placeholder="Enter title" className="in-block" />
                            {errors.name && <span className="error">Event title is required</span>}

                            <h6 className="des-label">Location</h6>
                            <input onBlur={handleBlur} name="location" required placeholder="Enter location" className="in-block" />
                            {errors.name && <span className="error">Location is required</span>}

                            <h6 className="des-label">No of Bathroom</h6>
                            <input onBlur={handleBlur} name="bathroom" required placeholder="Enter title" className="in-block" />
                            {errors.name && <span className="error">No of Bathroom is required</span>}

                        </div>
                        <div className="ml-5">
                        <h6 className="des-label">Price</h6>
                            <input onBlur={handleBlur} name="price" required placeholder="Enter price" className="in-block" />
                            {errors.name && <span className="error">Price is required</span>}

                            <h6 className="des-label">No of Bedroom</h6>
                            <input onBlur={handleBlur} name="bedroom" required placeholder="Enter title" className="in-block" />
                            {errors.name && <span className="error">No of Bedroom is required</span>}

                            <h6 className="des-label">Thumbnail</h6>
                            <input type="file" onChange={handleFileChange} className="file-block" required placeholder="Choose a Image" />
                            {errors.name && <span className="error">Image is required</span>}
                        </div>
                    </div>
                    <input type="submit" className="submit-btn mr-5" />
                </div>
            </form>
        </div>
    );
};

export default AddRentHouse;