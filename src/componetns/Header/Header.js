import { Button } from 'bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';



const Header = ({ trueLogin }) => {
    console.log(trueLogin)
    return (
        <div>
            <div className='d-flex align-items-center justify-content-around bg-light'>
                <div>
                    <h1>Practising</h1>
                </div>
                <div className='d-flex '>
                    <NavLink className={({ isActive }) => isActive ? 'text-danger me-5 text-decoration-none' : 'me-5 text-black text-decoration-none'} to='/home'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-danger me-5 text-decoration-none' : 'me-5 text-black text-decoration-none'} to='/register'>Register</NavLink>
                    {trueLogin?.uid ? <button>Log Out</button>: <NavLink className={({ isActive }) => isActive ? 'text-danger me-5 text-decoration-none' : 'me-5 text-black text-decoration-none'} to='/login'>Login</NavLink>}
                </div>
            </div>

        </div>
    );
};

export { Header };