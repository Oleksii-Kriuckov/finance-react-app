import { createStore } from "redux";

const defaultState = {array: []}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "Change_Array":
        return {...state, array: action.payload}

        default: return state;
    }
}

export const store = createStore(reducer)