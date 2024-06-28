// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import podcastsReducer from './slices/podcastsSlice'
import episodesReducer from './slices/episodesSlice';
import selectedPodcastReducer from './slices/selectedPodcastSlice';
import searchReducer from './slices/searchSlice'

const rootReducer = combineReducers({
  podcasts: podcastsReducer,
  episodes: episodesReducer,
  selectedPodcast: selectedPodcastReducer,
  search: searchReducer
});

export default rootReducer;