import {Color} from "./colorSearchSlice";

function containsName(color: Color, searchTerm: string) {
    return color.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
}

function filterList(list: Color[], searchTerm: string) {
    if (!searchTerm || searchTerm === '') {
        return list;
    }

    return list
        .filter(x => containsName(x, searchTerm));
}

export {filterList};