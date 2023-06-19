import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import colorSearchReducer from '../features/colorSearch/colorSearchSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        colorSearch: colorSearchReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;