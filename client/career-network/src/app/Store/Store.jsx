import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../AllStateSlice/StateManageSlice";


const store = configureStore({
    reducer:{
        state:counterReducer
    }
})
export default store