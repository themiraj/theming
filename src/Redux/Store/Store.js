import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Reducer/AuthReducer';
import cartReducer from '../Reducer/CartReducer';
const store = configureStore({
    reducer: {
        CartReducer:cartReducer ,
        AuthReducer: authReducer
    },
})
export default store;