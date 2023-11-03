import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    setdata : []
    
}

const dataMoviePopulerSlice = createSlice({
    name : "dataMovie",
    initialState ,
    reducers :{
        setData: (state, action) => {
            state.setdata = action.payload;
          }
        
    }
})

export const { setData } = dataMoviePopulerSlice.actions;


export default dataMoviePopulerSlice.reducer;