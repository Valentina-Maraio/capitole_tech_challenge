import React from 'react'
import '../style/loadingCircle.css'
import { useSelector } from 'react-redux'

const LoadingCircle = () => {
  const status = useSelector((state) => state.podcasts.status);

  return (
    <div className={`loading-circle ${status === 'succeeded' ? 'loaded' : ''}`}></div>
  )
}

export default LoadingCircle