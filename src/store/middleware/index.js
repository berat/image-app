/* eslint-disable no-undef */
import axios from 'axios';
import * as actions from '../api';

const api =
  ({dispatch}) =>
  next =>
  async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const {url, method, data, onStart, onSuccess, onError} = action.payload;

    if (onStart) dispatch({type: onStart});
    next(action);

    try {
      const key = 'EEp9nPmNJe9ZVENaC2HF9WWhDeJVtngpOYinNs0N1Bk';
      const response = await axios.request({
        baseURL: 'https://api.unsplash.com/',
        url,
        headers: {
          Authorization: `Client-ID ${key}`,
        },
        method,
        data,
      });
      dispatch(actions.apiCallSuccess(response.data));

      if (onSuccess) dispatch({type: onSuccess, payload: response.data});
    } catch (error) {
      dispatch(actions.apiCallFailed(error.message));

      if (onError) dispatch({type: onError, payload: error.message});
    }
  };

export default api;
