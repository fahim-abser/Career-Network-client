import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../AllStateSlice/StateManageSlice";
import ResumeReducer from "../DashboardSlice/DashboardSlice";
import DashboardReducer from "../DashboardSlice/DashboardSlice";
import { taskApi } from "../SomeApi/taskApi";



const store = configureStore({
    reducer:{
        state:counterReducer,
        counter:DashboardReducer,
        resumeData:ResumeReducer,
        [taskApi.reducerPath]:taskApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
       return getDefaultMiddleware().concat(taskApi.middleware)
    }
})
export default store