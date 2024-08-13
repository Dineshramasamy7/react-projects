import React, { useState } from 'react'

const Fallback = () => {
    const [state,setState] = useState(0);
    if (state===3) {
        throw new Error('Danger Zone!')
    }
  return (
    <div>
        <button onClick={()=>setState(state+1)}>Increase</button>
        <h3>{state}</h3>
    </div>
  )
}

export default Fallback;