import React from "react";
import {DECREMENT, INCREMENT} from "./actions";
import {connect} from "react-redux";

function Counter(props) {
    return (
        <div>
            <div>{props.counter}</div>
            <button
                type="button"
                onClick={props.onDecrement}>
                -
            </button>
            <button
                type="button"
                onClick={props.onIncrement}>
                +
            </button>
        </div>

    );
}

function mapStateToProps(state){
    return {
        counter: state
    };
}

function mapDispatchToProps(dispatch){
    return {
        onIncrement() {
            dispatch({type: INCREMENT});
        },
        onDecrement() {
            dispatch({type: DECREMENT});
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);