import React from "react";

import {changeSearchTerm} from "./colorSearchSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";

function ColorSearch() {

    const {searchTerm} = useAppSelector(selector => {
        return selector.colorSearch;
    });

    const dispatch = useAppDispatch();

    return (
        <form>
            <input
                type="text"
                value={searchTerm}
                onChange={e => dispatch(changeSearchTerm(e.target.value))}
            />
        </form>
    );
}

export default ColorSearch;