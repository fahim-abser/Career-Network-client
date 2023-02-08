import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../AllStateSlice/StateManageSlice";
import employeReducer from "../EmployeSlice/EmployeSlice";
import ResumeReducer from "../EmployeSlice/ResumeSlice";


const store = configureStore({
    reducer:{
        state:counterReducer,
        counter:employeReducer,
        resumeData:ResumeReducer
    }
})
export default store