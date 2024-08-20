import { createSlice } from "@reduxjs/toolkit";

const todoSlice =  createSlice({
    initialState:{
        list: []
    },
    name: "filter",
    reducers:{
        filter: () => {},
        

    }
})

export const {addTodo,deleteTodo, } =todoSlice.actions
export default todoSlice.reducer