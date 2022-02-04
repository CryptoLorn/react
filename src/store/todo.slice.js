import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    all: 0,
    completed: 0
}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({id: new Date().getTime(), name: action.payload.todo, status: false});
        },
        changeStatus: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            todo.status = !todo.status;

            if (todo.status) {
                state.completed += 1;
                return;
            }
            state.completed -= 1;
        },
        deleteTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            state.todos.splice(index, 1);
            state.all -= 1;
        },
        countAll: (state, action) => {
            state.all += 1;
        },
    }
});

const todoReducer = todoSlice.reducer;
export const {addTodo, changeStatus, deleteTodo, countAll} = todoSlice.actions;

export default todoReducer;