import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../Slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = () => {
        dispatch(setUser({
            name: 'don',
            password: 1233
        }));
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-title">Login</div>
            <button className="login-button" onClick={login}>Click</button>
        </div>
    );
}

export default Login;
