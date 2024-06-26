import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const EpisodeDetails = () => {
  return (
    <>
    <Navbar/>
    <h1>EPISODE DETAILS PAGE</h1>
    <Link to='/podcasts/:podcastId'>
    <h2>This sould be the card that allows the user to go back to the list of the episodes and choose another one</h2>
    </Link>
    </>
  )
}

export default EpisodeDetails