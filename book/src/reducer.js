import * as actions from "./actions";
import {handleActions} from "redux-actions";

const initialState = 0;

function decrement(state){
    return state - 1;
}

function increment(state){
    return state + 1;
}

export default handleActions({
        [actions.increment] : increment,
        [actions.decrement] : decrement
    },
    initialState
);