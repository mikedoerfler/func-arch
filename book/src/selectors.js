function containsName(color, searchTerm) {
    return color.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
}

function filterList({list, searchTerm}) {
    return list
        .filter(x => containsName(x, searchTerm));
}

export {filterList};