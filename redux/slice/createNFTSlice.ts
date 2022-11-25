
import { createSlice } from '@reduxjs/toolkit';
const createNFTSlice = createSlice({
    name: "icon",
    initialState: {
        step: 0,
        result: {}
    },
    reducers: {
        setStep: (state, action) => {
            state.step = action.payload;
        },
        setResult: (state, action) => {
            state.result = action.payload;
        },
    }
})

export const { setStep, setResult } = createNFTSlice.actions;
export const selectStep = (state: any) => state.nft.step;

const createNFTReducers = createNFTSlice.reducer;
export default createNFTReducers;