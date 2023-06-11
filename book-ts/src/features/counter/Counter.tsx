import {decrement, increment} from "./counterSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";

export function Counter() {
    const state = useAppSelector(state => {
        return {
            count: state.counter.value,
            clickCount: state.counter.clickCount
        };
    });
    const dispatch = useAppDispatch();

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{state.count} from {state.clickCount} clicks</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>

    );
}