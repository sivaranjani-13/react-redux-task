import {craeteSlice} from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name:"temp",
    initialState:{
        name:"Im a Software engineer"
    },
    reducers:{
        update: (state,action)=>{
            state.name=action.payload.name;
        },
    },
});
export const {update}=userSlice.action;
export default userSlice.reducer;