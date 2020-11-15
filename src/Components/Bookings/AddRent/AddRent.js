import React from 'react';

const AddRent = () => {
    const handleBlur= e =>{
        console.log(e)
    }

    const handleFileChange = (e) => {
        console.log(e)

    }

    const handleSubmit = (e) => {
        console.log(e)
    }


    return (
        <section id="order" className="p-4">
            <h3>Add Service</h3><br />
            <div className="container">                
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-8 col-lg-6">   
                            <label ><b>Service Title</b></label>               
                            <input  type="text" onBlur={handleBlur} name="service" placeholder="Enter title" className="form-control " required />  <br />
                            <label ><b>Location</b></label>                 
                            <input type="text" onBlur={handleBlur} name="service" placeholder="Enter Location" className="form-control" required /> <br />
                            <label ><b>No. of Bedrooms</b></label>                 
                            <input type="text" onBlur={handleBlur} name="service" placeholder="Enter Bedrooms" className="form-control" required />                          
                        </div>
                        <div className="col-md-4 col-lg-6">         

                            <label ><b>Price</b></label>               
                            <input  type="text" onBlur={handleBlur} name="service" placeholder="Enter Price" className="form-control" required />  <br />
                            <label ><b>No. of Bathrooms</b></label>               
                            <input  type="text" onBlur={handleBlur} name="service" placeholder="Enter Bathrooms" className="form-control" required /> <br />                                                      
                            <div className="col-6 my-1">
                                <label><b>Thumbnail</b></label>
                                <input type="file" onChange={handleFileChange} name="photo" />
                            </div> <br />                                                    
                                              
                        </div>
                    </div>                            
                </form>                        
            </div>
            <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <button  className="btn btn-success ml-3 px-4">Submit</button> 
                    </div>    
                </div>  
        </section>
    );
};

export default AddRent;