import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../AllStateSlice/StateManageSlice";
import ResumeReducer from "../DashboardSlice/DashboardSlice";
import DashboardReducer from "../DashboardSlice/DashboardSlice";



const store = configureStore({
    reducer:{
        state:counterReducer,
        counter:DashboardReducer,
        resumeData:ResumeReducer
    }
})
export default store