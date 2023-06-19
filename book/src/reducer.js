import {handleActions} from "redux-actions";
import * as actions from "./actions";

const initialState = Object.freeze({
    list: [],
    searchTerm: ''
});

function setList(state, action) {
    return {
        ...state,
        list: action.payload
    };
}

function changeSearch(state, action) {
    return {
        ...state,
        searchTerm: action.payload
    };
}

export default handleActions({
        [actions.setList]: setList,
        [actions.changeSearch]: changeSearch
    },
    initialState
);