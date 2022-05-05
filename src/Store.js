
import {configureStore} from '@redux/toolkit';
import { useReducer } from '/userSlice';
export default configureStore({
    reducer:{
        temp: useReducer,
    },
})