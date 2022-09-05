import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Reducer/CountReducer";
// import CountReducer from "../Reducer/CountReducer";

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store