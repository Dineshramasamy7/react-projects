import React, { useState } from 'react'
import Modal from './Modal';
import './Portal.css'
const Portal = () => {
    const [show,setShow] = useState(false);
  return (
    <div className='portaldiv'>
        <h1>Create Portal</h1>
        <button onClick={()=>setShow(!show)}>Portal</button>
        <Modal show= {show} closeModal={()=>setShow(false)}/>
    </div>
  )
}

export default Portal