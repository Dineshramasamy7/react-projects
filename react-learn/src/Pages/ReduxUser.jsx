import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers } from '../Slice/userSlice';
import './ReduxUser.css'
function ReduxUser() {
    const users = useSelector((state)=> state.userInfo.users);
    const dispatch = useDispatch();
    console.log(users)
 const deleteUserInfo =(index)=>{
    dispatch(deleteUsers(index))
 }
  return (
    <>
    <h1>Redux-User</h1>
    <div>
      {users?.map((user,index)=>{
        return (<div className="container" key={index}>
        <h2>{user.name}</h2>
        <h2>{user.age}</h2>
        <h2>{user.email}</h2>
        <h2>{user.contact}</h2>
        <button onClick={()=>deleteUserInfo(index)}>Delete User!</button>
      </div>)
   
      })}
       </div>
    </>
  )
}

export default ReduxUser;
