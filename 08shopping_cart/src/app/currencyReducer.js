import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
    name: "currency",
    initialState: "INR",
    reducers: {
        currencyValue: (state, action) => {
            state = action.payload
            console.log(state)
            return state;
        }
    }
})

export const {currencyValue} = currencySlice.actions;
export default currencySlice.reducer;