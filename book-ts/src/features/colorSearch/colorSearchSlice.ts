import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {filterList} from "./selectors";
import colors from './colors.json';

export interface Color {
    id: number,
    name: string,
    hexString: string
}

export interface ColorSearchState {
    list: Color[],
    searchTerm: string
}

const initialState: ColorSearchState = {
    list: colors,
    searchTerm: ''
};

export const colorSearchSlice = createSlice({
    name: 'colorSearch',
    initialState,
    reducers: {
        setList: (state: ColorSearchState, action: PayloadAction<Color[]>) => {
            state.list = action.payload;
            return state;
        },
        changeSearchTerm: (state: ColorSearchState, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
            state.list = filterList(colors, state.searchTerm);
            return state;
        }
    }
});

export const {
    setList,
    changeSearchTerm
} = colorSearchSlice.actions;

export default colorSearchSlice.reducer;
