import { createStore, combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'

const defaultState = {
    currentArray: [],
    prevArray:[]
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "Change_Current_Array":
        return {...state, currentArray: action.payload}
        
        case "Change_Prev_Array":
        return {...state, prevArray: action.payload}
        
        default: return state;
    }
}

export const store = createStore(reducer, composeWithDevTools())