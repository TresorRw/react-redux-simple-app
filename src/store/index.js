import { createStore } from "redux";

const reducer = (state = { counter: 0, isMinusDisabled: false }, action) => {
    switch (action.type) {
        case "decrement":
            if(state.counter !== 0) {
                return { ...state, counter: state.counter - 1 }
            } else {
                return { isMinusDisabled: state.isMinusDisabled= true, counter: state.counter}
            }
        case "increment":
            return {isMinusDisabled: state.isMinusDisabled= false, counter: state.counter + 1 }
        default:
            break;
    }
    return state
}

const store = createStore(reducer);

export default store