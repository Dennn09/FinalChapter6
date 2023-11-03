import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataSearch : []
    
}

const getDataSearchSlicer = createSlice({
    name : "dataMovie",
    initialState ,
    reducers :{
        setDataSearch: (state, action) => {
            state.dataSearch = action.payload;
          }
        
    }
})

export const { setDataSearch } = getDataSearchSlicer.actions;


export default getDataSearchSlicer.reducer;