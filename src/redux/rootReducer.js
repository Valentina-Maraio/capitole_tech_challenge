// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import podcastsReducer from './slices/podcastsSlice'
import episodesReducer from './slices/episodesSlice';
import selectedPodcastReducer from './slices/selectedPodcastSlice';

const rootReducer = combineReducers({
  podcasts: podcastsReducer,
  episodes: episodesReducer,
  selectedPodcast: selectedPodcastReducer,
});

export default rootReducer;