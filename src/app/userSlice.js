import {createSlice} from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name:"temp",
    initialState:{
        name:'Im a Software engineer',
    },
    reducers:{
        update:(state,action)=>{
            state.name=action.payload.name;
        },
    },
});
export const {update}=userSlice.actions;
export default userSlice.reducer;