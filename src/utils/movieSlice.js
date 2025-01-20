import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        trailerVideo:null  
    },
    reducers:{
        addNowPlayingMovie:(state, action) =>{
            state.addNowPlayingMovie = action.payload;
        },

        addTrailerVideo:(state , action) =>{
            state.trailerVideo = action.payload;
        },
    }
})

export const {addNowPlayingMovie , addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;