import React from 'react'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom'
import SideCard from '../components/SideCard'
import EpisodeCard from '../components/EpisodeCard'
import { useSelector } from 'react-redux'

const PodDetails = () => {
  const { podcastId } = useParams();
  console.log('PodcastDetails received podcastId:', podcastId);

  const podcast = useSelector((state) => 
  state.podcasts.topPodcasts.find((pod) => pod.id.attributes['im:id'] === podcastId))

  if(!podcast) {
    return <div>I'm searching for a podcast with the selected id</div>
  }
  return (
    <>
    <Navbar/>
    <SideCard/>
    <EpisodeCard podcastId={podcastId}/>
    <Link to='/podcasts/:podcastId/episode/:episodeId'>to the selected episode details</Link>
    </>
  )
}

export default PodDetails