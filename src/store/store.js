// store.js
import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './courseSlice';
import  userReducer  from '../features/userSlice';

const store = configureStore({
  reducer: {
    course: courseReducer,
    user:userReducer
  },
});

export default store;
