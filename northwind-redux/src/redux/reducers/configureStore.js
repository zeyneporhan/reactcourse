import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './index';
import { thunk } from 'redux-thunk'; // Doğru import: thunk doğrudan 'redux-thunk'dan geliyor

export default function createAppStore() {
    return configureStore({
        reducer: rootReducer, // root reducer burada tanımlı
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(thunk), // thunk middleware ekleniyor
    });
}
