// src/redux/reducers/configureStore.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './index';  // rootReducer burada combine edilmiş tüm reducer'larınız olmalı

const store = configureStore({
  reducer: rootReducer,
});

export default store;
