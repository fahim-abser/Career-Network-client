
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const taskApi = createApi({
    reducerPath:"taskApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:5000/" 
    }),
    tagTypes:['user'],
    endpoints:(builder)=>({
        tasks:builder.query({
            query:()=>"collectartical",
            providesTags:['user']
        }),
        comment:builder.query({
            query:()=>"teamdetails"
        }),
    }) 

})
 
export const {useTasksQuery,useCommentQuery}=taskApi