import { configureStore } from '@reduxjs/toolkit';
import mustReducer from '../features/must/mustSlice';

export default configureStore({
  reducer: {
    must: mustReducer,
  },
});
