// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import podcastsReducer from './slices/podcastsSlice'
import episodesReducer from './slices/episodesSlice';

const rootReducer = combineReducers({
  podcasts: podcastsReducer,
  episodes: episodesReducer,
});

export default rootReducer;