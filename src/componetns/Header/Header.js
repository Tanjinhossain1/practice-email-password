import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='d-flex align-items-center justify-content-around bg-light'>
            <div>
                <h1>Practising</h1>
            </div>
            <div className='text'>
                <NavLink className={({isActive})=>isActive? 'text-danger me-5' : 'me-5 text-black'} to='/'>Home</NavLink>
                <NavLink className={({isActive})=>isActive? 'text-danger me-5' : 'me-5 text-black'} to='/register'>Register</NavLink>
                <NavLink className={({isActive})=>isActive? 'text-danger me-5' : 'me-5 text-black'} to='/login'>Login</NavLink>
            </div>
        </div>
    );
};

export default Header;