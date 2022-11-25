import { configureStore } from '@reduxjs/toolkit';
import createNFTReducers from '../slice/createNFTSlice';

export const store = configureStore({
    reducer: {
        nft: createNFTReducers
    }
})

