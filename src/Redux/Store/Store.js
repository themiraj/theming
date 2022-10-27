import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Reducer/AuthReducer';
import cartReducer from '../Reducer/CartReducer';
import logger from 'redux-logger';
import { applyMiddleware } from '@reduxjs/toolkit';
const store = configureStore({
    reducer: {
        CartReducer:cartReducer,
        AuthReducer: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
export default store;