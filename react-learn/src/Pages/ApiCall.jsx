import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { json } from 'react-router';

const ApiCall = () => {
   const [joke,setJoke] = useState('')
//   async function apiCall() {
//     const res = await fetch('https://official-joke-api.appspot.com/jokes/random');
//     const data = await res.json();
//     setJoke(data)
//     console.log(data)
//   }
  async function apiCall() {
    const res = await axios.get('https://official-joke-api.appspot.com/jokes/random');
    const data = res.data;
    setJoke(data)
    console.log(data)
  }
  useEffect(()=>{
    apiCall()
  },[])
  return (
    <>
    <div>
    <h1>Api-call</h1>
    <button onClick={apiCall}>GET A JOKE 😂🤣</button>
    {
        joke && (<>
         <h3>{joke.setup}</h3>
         <h3>{joke.punchline}</h3></>
  )
    }
   
    </div>
    </>
    
  )
}

export default ApiCall;