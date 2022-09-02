import { createSlice } from "@reduxjs/toolkit";

const initial = {

}

export const CountReducer = createSlice({
    name:'counter',
    initialState:initial,
    reducers: {
        addCount: (state, action) => {
            state.push('state');
        }

    }
})
export default CountReducer.actions;