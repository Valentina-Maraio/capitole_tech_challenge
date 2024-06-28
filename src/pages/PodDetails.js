import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import SideCard from '../components/SideCard'

const PodDetails = () => {
  return (
    <>
    <Navbar/>
    <SideCard/>
    <Link to='/podcasts/:podcastId/episode/:episodeId'>to the selected episode details</Link>
    </>
  )
}

export default PodDetails