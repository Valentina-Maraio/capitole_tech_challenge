import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PodCard from '../components/PodCard'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Link to='/podcasts/:podcastId' className="link-text">
    <PodCard/>
    </Link>
    </>
  )
}

export default Home