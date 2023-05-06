import { configureStore, createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0, isMinusDisabled: true},
    reducers: {
        increment(state, action) {
            return {isMinusDisabled: false, counter: state.counter + 1}
        },
        decrement(state, action) {
            if(state.counter !== 0) {
                return {...state, counter: state.counter - 1}
            } else {
                return {isMinusDisabled: true, counter: 0}
            }
        }
    }
})
export const actions = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer
})

export default store