import React, { useState } from 'react'
import Fallback from './Fallback';
import { ErrorBoundary } from 'react-error-boundary';
import './ErrorComponent.css'

const ErrorFallbackComponent = ({error,resetErrorBoundary})=>{
    return(
        <>
        <div className='error-fallback'>
        <h3>OOPS! Something went wrong</h3>
        <h4>error : {error.message}</h4>
        <button onClick={resetErrorBoundary}>Try Again!</button>
        </div>
        </>
    )
}
const ErrorComponent = () => {
    

  return (
    <div className='errordiv'>
        <h1>ErrorComponent</h1>
        <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
        {/* we can use both FallbackComponent & FallbackRender as direct fallback UI into the FallbackRender */}
        <Fallback />
        </ErrorBoundary>
    </div>
  )
}

export default ErrorComponent;