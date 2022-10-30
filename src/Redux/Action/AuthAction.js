import { Construction } from "@mui/icons-material";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from 'src/firebase';

export const registerUser = createAsyncThunk(`auth/registerUser`,
    async (obj, {dipatch, getState}) => {
        onAuthStateChanged(auth, (user) => {
            console.log(user,'sdsd')
            dipatch(registerUser.fulfilled(payload))
        })
    }
)