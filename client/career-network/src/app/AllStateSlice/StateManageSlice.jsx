import { createSlice } from "@reduxjs/toolkit";


const StateMenageSlice = createSlice({
    name:"stateManagment",
    initialState:{
        menu:true
    },
    reducers:({
        setMenu:(state)=>{
            state.menu = !state.menu
        },
        setOnlyMenuTrue:(state)=>{
            state.menu = true
        }
    })
})

const {reducer,actions}=StateMenageSlice
export const { setMenu,setOnlyMenuTrue }=actions
export default reducer