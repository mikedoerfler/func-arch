import '@testing-library/jest-dom';
import {filterList} from "./selectors";
import colors from "./colors.json";

test('filterList', () => {

    const list = colors;

    const searchTerm = 'black';

    const actual = filterList(list, searchTerm);
    expect(actual.length).toEqual(1);
    expect(actual[0].id).toEqual(0);
    expect(actual[0].name).toEqual('Black');
});