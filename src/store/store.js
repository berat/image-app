import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import reducer from './reducer'
import api from './middleware'

export default configureStore({
  reducer,
  middleware: [thunk, api],
  devTools: process.env.NODE_ENV !== 'production'
})
