import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allIds: [],
    byIds: {},
}

let nextTodoId = 0

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const id = ++nextTodoId

            state.allIds.push(id)

            state.byIds[id] = {
                content: action.payload,
                complete: false,
            }
        },

        toggleCompleteness: (state, { payload }) => {
            const { id } = payload
            const targetTodo = state.byIds[id]

            targetTodo.completed = !targetTodo.completed
        },
    },
})

export const { addTodo, toggleCompleteness } = todoSlice.actions

export default todoSlice.reducer
