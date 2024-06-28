import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPodcast: null,
};

const selectedPodcastSlice = createSlice({
  name: "selectedPodcast",
  initialState,
  reducers: {
    setSelectedPodcast: (state, action) => {
      state.selectedPodcast = action.payload;
    },
  },
});

export const { setSelectedPodcast } = selectedPodcastSlice.actions;

export default selectedPodcastSlice.reducer;
