import {createSlice} from '@reduxjs/toolkit';

const photos = createSlice({
  name: 'photos',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {
    photosLoading: state => {
      state.loading = true;
    },
    photosReceived: (state, action) => {
      state.loading = false;
      state.data = action.payload
    },
    photosFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload
    },
  },
});

export default photos.reducer;

export const {photosLoading, photosReceived, photosFailed} = photos.actions;