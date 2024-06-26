import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Link to='/podcasts/:podcastId'>
    selected podcast</Link>
    </>
  )
}

export default Home