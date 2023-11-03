import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataDetail : []
    
}

const getDataSearchSlicer = createSlice({
    name : "dataDetail",
    initialState ,
    reducers :{
        setDataDetail: (state, action) => {
            state.dataDetail = action.payload;
          }
        
    }
})

export const { setDataDetail } = getDataSearchSlicer.actions;


export default getDataSearchSlicer.reducer;