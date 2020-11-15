import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Login.css';
import google from '../../../logos/google.png';
import fb from '../../../logos/facebook.png';  
import NavBar from '../../Home/NavBar/NavBar';

const Login = () => {

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
            <Form >
                <h3>Login</h3>
                <br />
                <Form.Group controlId="formBasicEmail">
                    
                    <Form.Control name="email" onBlur={handleBlur} type="email" placeholder="Username or Email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    
                    <Form.Control name='password' onBlur={handleBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Row>
                    <Col >
                        <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                    </Col>
                    <Col></Col>
                    <Col>
                    <a href="#forgot">Forgot Password</a>
                    </Col>

                </Row>
                <Button variant="warning" type="submit" onClick={handleSubmit}>
                    <h5>Login</h5>
                </Button>
                <p className="text-center">Don't have an account? <a name='newUser' href="/signup" >Create an account</a></p>
                </Form>
                
            </div>
            <p className="text-center">Or</p>
            <div id="anotherProcess">                
                <a>
                    <div className="fb">
                        <img src={fb} alt="Facebook"></img>
                        <h5>Login with Facebook</h5>
                    </div>
                </a>
                <a>
                    <div className="google">
                        <img src={google} alt="Google"></img>
                        <h5>Login with Google</h5>
                    </div>
                </a>
                
            </div>
        </div>
    );
};

export default Login;
