import React from 'react'
import CircularProgress from "@mui/material/CircularProgress";
import './LoadingPage.scss';

const LoadingPage = () => {
  return (
    <div className="loading-div"><CircularProgress className='spinner'/></div>
  )
}

export default LoadingPage