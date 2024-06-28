import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import SideCard from '../components/SideCard'

const PodDetails = () => {
  return (
    <>
    <Navbar/>
    <h2>Podcast details page</h2>
    <p>Details of the selected podcast</p>
    <SideCard/>
    <Link to='/podcasts/:podcastId/episode/:episodeId'>to the selected episode details</Link>
    </>
  )
}

export default PodDetails