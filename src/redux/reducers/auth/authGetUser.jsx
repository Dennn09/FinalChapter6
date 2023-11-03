import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   dataUser : [],
   name : "",
}

const getUserSlice = createSlice({
    name : "GetUser",
    initialState ,
    reducers :{
        setDataUser: (state, action) => {
            state.dataUser = action.payload;
          },
          setNama: (state, action) => {
            state.name = action.payload;
          },
    
    }
})

export const { setDataUser, setNama } = getUserSlice.actions;


export default getUserSlice.reducer;