import React from "react";
import {decrement, increment} from "./actions";
import {connect} from "react-redux";

function Counter(props) {
    return (
        <div>
            <div>{props.counter}</div>
            <button
                type="button"
                onClick={props.decrement}>
                -
            </button>
            <button
                type="button"
                onClick={props.increment}>
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

export default connect(mapStateToProps, {increment, decrement})(Counter);