// episodesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPodcastEpisodes = createAsyncThunk(
  'episodes/fetchPodcastEpisodes',
  async (podcastId) => {
    const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`));
    const data = await response.json();
    const parseData = JSON.parse(data.contents);
    console.log('Fetched episodes:', parseData.results);
    return parseData.results;
  }
);

const episodesSlice = createSlice({
  name: 'episodes',
  initialState: {
    episodes: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPodcastEpisodes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPodcastEpisodes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log('Updating state with fetched episodes:', action.payload);
        state.episodes = action.payload.results;
      })
      .addCase(fetchPodcastEpisodes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default episodesSlice.reducer;