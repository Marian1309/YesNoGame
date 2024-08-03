import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './features';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
