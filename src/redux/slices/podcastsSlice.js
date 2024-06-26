// podcastsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTopPodcasts = createAsyncThunk(
  'podcasts/fetchTopPodcasts',
  async () => {
    const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'));
    const data = await response.json();
    return JSON.parse(data.contents);
  }
);

const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState: {
    topPodcasts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopPodcasts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTopPodcasts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.topPodcasts = action.payload.feed.entry;
      })
      .addCase(fetchTopPodcasts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default podcastsSlice.reducer;