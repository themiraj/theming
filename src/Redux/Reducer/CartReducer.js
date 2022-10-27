import { createSlice } from '@reduxjs/toolkit'
import { cartAction } from '../Action/CartAction'

const initialState = {
  value: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        ADD_CARD: (state) => {
            const Add = cartAction(state.value)
            state.value = Add;
        }
    }
})
export const { ADD_CARD } = cartSlice.actions 
export default cartSlice.reducer 