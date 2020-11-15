import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import google from '../../../logos/google.png';
import fb from '../../../logos/facebook.png';  
import NavBar from '../../Home/NavBar/NavBar';


const SignUp = () => {
    const handleBlur=(event) => {
        console.log(event);
    }
    const handleSubmit=(event) => {
        console.log(event);
    }

    return (

        <div id="page">
            <NavBar></NavBar>
            <div id="login">
                <Form onSubmit={handleSubmit}>
                    <h3>Create an account</h3>
                    <br />
                    <Form.Group >
                        <Form.Control type="text" name='firstName' required onBlur={handleBlur} placeholder="First name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        
                        <Form.Control type="text" name='lastName' required onBlur={handleBlur} placeholder="Last Email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        
                        <Form.Control type="email" onBlur={handleBlur} required name="email" placeholder="Username or Email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        
                        <Form.Control type="password" name='password' required onBlur={handleBlur} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" onBlur={handleBlur} name="confirmPassword" required placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="warning" type="submit">
                        <h5>Create an account</h5>
                    </Button> <br /> 
                    <p className="text-center">Already have an account? <a href='/login'> Login</a></p>   
                </Form>
                
            </div>
            
            <div id="anotherProcess">    
                <p className="text-center">Or</p>            
                <a>

                    <div className="google">
                        <img src={google} alt="Google"></img>
                        <h5 >Login with Google</h5>
                    </div>
                </a>
                <a>
                    <div className="fb">
                        <img src={fb} alt="Facebook"></img>
                        <h5>Login with Facebook</h5>
                    </div>
                </a>
            </div>
        </div>
    );
}
export default SignUp;
