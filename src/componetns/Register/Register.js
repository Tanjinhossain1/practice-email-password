import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import {useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const emailBlur = (e) => {
        setEmail(e.target.value)
    }
    const passwordBlur = (e) => {
        setPassword(e.target.value)
    }
    const onSubmitStop = (e) => {
        e.preventDefault();
    }

    const creatRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user)
                
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        // Email verification sent!
                        // ...
                        navigate('/login');
                        console.log('email valid');
                    });
                // ...
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    return (
        <div>
            <div className='w-50 mx-auto mt-5'>
                <Form onSubmit={onSubmitStop}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={emailBlur} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={passwordBlur} type="password" placeholder="Password" required />
                    </Form.Group>

                    <h6 className='text-danger'>{error}</h6>
                   <Button onClick={creatRegister} variant="primary" type="submit">
                        Register
                    </Button>
                    <button className='ms-4 bg-light rounded-3 border-white '><img width={80} src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" alt="" /></button>
                </Form>

            </div>
        </div>
    );
};

export default Register;