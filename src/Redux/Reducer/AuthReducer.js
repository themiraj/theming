import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLogin: (state) => {

        }
    }
})

export const { userLogin } = authSlice.actions;
export default authSlice.reducer