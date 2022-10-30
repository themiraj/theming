import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { registerUser, userLogedIn } from "../Action/AuthAction";
import { auth } from 'src/firebase';

// export const registerUser = createAsyncThunk(`${'auth'}`/registerUser,
//     async (obj, {dipatch, getState}) => {
//         onAuthStateChanged(auth, (user) => {
//             console.log(user)
//         })
//     }
// )

const initialState = {
    loading: false,
    isLogin: false,
    user: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers:{
        [registerUser.pending](state) {
            state.loading = true 
        },
        [registerUser.fulfilled](state, {payload}){
            state.isLogin = true    
            // state.user = payload.user  
            console.log(payload,'sdsd')  
        },
        [registerUser.rejected](state,  {error}){

        }
    }
    //     USER_LOGIN: (state, actions) => {  
    //         state.isLogin = actions.payload
    //     },
    //     LOADING_VARI: (stata) => {

    //     }
    // }
})

export const { ADD_CARD, USER_LOGIN } = authSlice.actions;
export default authSlice.reducer