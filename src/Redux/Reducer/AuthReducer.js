import { createSlice } from "@reduxjs/toolkit";
import { userLogedIn } from "../Action/AuthAction";

const initialState = {
    loading: false,
    login: false,
    user: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        USER_LOGIN: (state, actions) => {  
            state.login = actions.payload
        },
        LOADING_VARI: (stata) => {

        }
    }
})

export const { ADD_CARD, USER_LOGIN } = authSlice.actions;
export default authSlice.reducer