import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../Slices/UserSlice';
const Navbar = () => {
    const navigate = useNavigate()
    const user = useSelector((state)=> state.userInfo.user);
    const dispatch = useDispatch();
    const logout = ()=>{
        dispatch(removeUser());
        navigate('/')
        
    }
  return (
    <>
    <nav>
    <h2>Bumble beee</h2>
    <ul>
    { !user &&
            (
               
                <Link to='/login'><li>Login</li></Link>
            )}
        { user && (
        <>
                <Link to='/settings'><li>Settings</li></Link>
                <li onClick={logout}>Logout</li>
        </>
            )}
        {/* <Link to='/login'><li>Login</li></Link>
        <Link to='/settings'><li>Settings</li></Link>
        <li>Logout</li> */}
    </ul>
    </nav>
    </>
  )
}

export default Navbar