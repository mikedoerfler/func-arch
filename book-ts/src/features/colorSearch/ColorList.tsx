import ColorItem from "./ColorItem";
import {useAppSelector} from "../../app/hooks";

function ColorList() {
    const {list} = useAppSelector(selector => {
        return selector.colorSearch;
    });

    return (
        <div>
            {list.map(color =>
                <ColorItem
                    color={color}
                    key={color.id}
                />
            )}
        </div>
    );
}

export default ColorList;