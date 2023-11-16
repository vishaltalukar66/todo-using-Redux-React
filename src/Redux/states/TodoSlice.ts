import { createSlice, nanoid } from "@reduxjs/toolkit";

interface todoState {

    id: string;
    value: string;
    mark: boolean;

}

interface todoList {
    todo: todoState[]
}

const initialState: todoList = {
    todo: []
}


const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //add new data to state
        addTodo: (state, action) => {
            const data = {
                id: nanoid(),
                value: action.payload,
                mark: false,
            }
            state.todo.unshift(data);
            localStorage.setItem('todo', JSON.stringify(state));


        },
        removeTodo: (state, action) => {
            state.todo = state.todo.filter((val) => val.id != action.payload);
            localStorage.setItem('todo', JSON.stringify(state));


        },

        setState: (state, action) => {
            state.todo.push(action.payload);


        },
        setMark: (state, action) => {

            state.todo.forEach((elements, index) => {
                if (elements.id === action.payload) {

                    state.todo[index].mark = !state.todo[index].mark;
                }
            })
            localStorage.setItem('todo', JSON.stringify(state));

        },
    },
})


export const { addTodo, removeTodo, setState, setMark } = TodoSlice.actions;

export default TodoSlice.reducer;