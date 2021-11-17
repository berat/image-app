import {createSlice} from '@reduxjs/toolkit';
import {apiCallBegan} from './api';

const photos = createSlice({
  name: 'photos',
  initialState: {
    loading: false,
    error: null,
    data: [],
    photo: {},
  },
  reducers: {
    photosLoading: state => {
      state.loading = true;
    },
    photosReceived: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    searchedPhotosReceived: (state, action) => {
      state.loading = false;
      state.data = action.payload.results;
    },
    photosFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    photoReceived: (state, action) => {
      state.loading = false;
      state.photo = action.payload;
    },
  },
});

export default photos.reducer;

export const {
  photosLoading,
  photosReceived,
  searchedPhotosReceived,
  photosFailed,
  photoReceived,
} = photos.actions;

export const fetchAllPhoto =
  (search = '') =>
  dispatch => {
    if (search.length > 0) {
      dispatch(
        apiCallBegan({
          url: `search/photos?query=${search}`,
          method: 'GET',
          onStart: photosLoading.type,
          onSuccess: searchedPhotosReceived.type,
          onError: photosFailed.type,
        }),
      );
    } else {
      dispatch(
        apiCallBegan({
          url: 'photos',
          method: 'GET',
          onStart: photosLoading.type,
          onSuccess: photosReceived.type,
          onError: photosFailed.type,
        }),
      );
    }
  };

export const getPhotoById = id => dispatch => {
  dispatch(
    apiCallBegan({
      url: `photos/${id}`,
      method: 'GET',
      onSuccess: photoReceived.type,
      onStart: photosLoading.type,
      onError: photosFailed.type,
    }),
  );
};
