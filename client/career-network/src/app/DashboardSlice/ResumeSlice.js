import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const resumeFetch = createAsyncThunk("/resume/data", async(email)=>{
    const res = await fetch(`http://localhost:5000/resumefind?email=${email}`)
    const data = await res.json()
    return data
})
const ResumeSlice = createSlice({
    name:"resume",
    initialState:{
        isLoding:false,
        resumeData:{},
        error:null
    },
    extraReducers(builder){
        builder.addCase(resumeFetch.pending,(state)=>{
            state.isLoding = true
        })
        builder.addCase(resumeFetch.fulfilled,(state,action)=>{
            state.isLoding = false
            state.resumeData = action.payload
        })
        builder.addCase(resumeFetch.rejected,(state,action)=>{
            state.isLoding = false
            state.resumeData = {}
            state.error = action.payload.error.message
        })
    }
})

 export default ResumeSlice.reducer 