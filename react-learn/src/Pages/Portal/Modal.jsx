import React from 'react'
import ReactDOM from "react-dom"
const Modal = ({show,closeModal}) => {
    if (!show)  return null
    
  return ReactDOM.createPortal ( 
    <div className='modal'>
        <div className="overlay"></div>
        <div className="content" onClick={closeModal}>
        <h1>Modal</h1>
        <button onClick={closeModal}>Close!</button>
        </div>
        
    </div>,
document.getElementById('portal')
  )
}

export default Modal