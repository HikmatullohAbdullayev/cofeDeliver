import { createSlice } from "@reduxjs/toolkit";

const todoSlice =  createSlice({
    initialState:{
        list: []
    },
    name: "todo",
    reducers:{
        addTodo: () => {},
        deleteTodo: ( ) => { },
        editTodo: ( ) => {},
        chekTodo: ( ) => {},

    }
})

export const {addTodo,deleteTodo, } =todoSlice.actions
export default todoSlice.reducer