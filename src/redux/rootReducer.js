import { combineReducers } from "redux";
import { ADD_ITEM, ADD_ITEM_HISTORY, REMOVE_HISTORY, REMOVE_ITEM, UPDATE_TIMER } from "./action_type";

function addReducer(state = [], action) {
    switch (action.type) {
        case ADD_ITEM: 
            return [...state, action.data]
        case REMOVE_ITEM:
            return state.filter(item => item.id !== action.id)
        // case UPDATE_TIMER:
        //     return state
        default: 
            return state
    }

}

function addToHistoryReducer(state = [], action) {
    switch (action.type) {
        case ADD_ITEM_HISTORY:
            return [...state, action.data]
        case REMOVE_HISTORY:
            return []
        default: 
            return state
    }

}
export const rootReducer = combineReducers({
    todoItems: addReducer,
    history: addToHistoryReducer
})



