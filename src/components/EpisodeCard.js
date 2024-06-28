import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPodcastEpisodes } from '../redux/slices/episodesSlice'
import { Link } from 'react-router-dom'
import '../style/episodeList.css'

const EpisodeCard = ({ podcastId }) => {
  const dispatch = useDispatch();
  const { episodes, status, error } = useSelector((state) => state.episodes);
  console.log("From Episode Card" + episodes)

  useEffect(() => {
    if (status === "idle" && podcastId) {
      console.log('Dispatching fetchPodcastEpisodes with podcastId:', podcastId);
      dispatch(fetchPodcastEpisodes(podcastId));
    }
  }, [status, dispatch, podcastId]);

  useEffect(() => {
    if (status === "succeeded") {
      console.log('Episodes fetched successfully:', episodes);
      localStorage.setItem("episodes", JSON.stringify(episodes));
    }
  }, [status, episodes]);


  return (
    <>
     <div className="epi_container">
      <div className="epi_number">Episodes: {episodes?.length} </div>
     </div>
     <div className="epi_list">
      <div>
        <ul>
          {episodes?.map((epi) => {
            return (
              <>
              <li>{epi.trackName}</li>
              </>
            )
          })}
        </ul>
      </div>
     </div>
    </>
  )
}

export default EpisodeCard