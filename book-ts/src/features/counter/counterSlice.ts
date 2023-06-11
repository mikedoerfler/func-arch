import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CounterState {
    value: number,
    clickCount: number
}

const initialState: CounterState = {
    value: 2,
    clickCount: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            state.clickCount++;
        },
        decrement: (state) => {
            state.value += -1;
            state.clickCount++;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
            state.clickCount++;
        }
    }
});

export const {
    increment,
    decrement,
    incrementByAmount
} = counterSlice.actions;

export default counterSlice.reducer;