
import {configureStore} from "@reduxjs/toolkit";
import useReducer from "./userSlice";
export default configureStore({
    reducer:{
        temp: useReducer,
    },
});
