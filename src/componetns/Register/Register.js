import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { Header } from '../Header/Header';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [trueLogin, setTrueLogin] = useState({});
   
    const googleProvider = new GoogleAuthProvider();

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
    // google clicked
    const googleClicked = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setTrueLogin(user)
                navigate('/home')
            }).catch((error) => {

                console.log(error)
            })};
            console.log(trueLogin)
        return (
            <div>
                <Header trueLogin={trueLogin}></Header>
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
                    </Form>
                    <div className='d-flex justify-content-center'>
                        <button onClick={googleClicked} className='ms-4 bg-light rounded-3 border-white '><img width={80} src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" alt="" /></button>
                    </div>
                </div>
            </div>
        );
    };

export default Register;