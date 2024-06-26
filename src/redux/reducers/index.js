import { combineReducers } from "redux";

const initialState = {
    counter: 0,
    multiplyCounter: 1
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1
            };
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
};

const multiplyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MULTIPLY":
            return {
                ...state,
                multiplyCounter: state.multiplyCounter * 2
            }
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    counter: counterReducer,
    multiplyCounter: multiplyReducer
})

export default rootReducer;