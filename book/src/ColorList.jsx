import ColorItem from "./ColorItem";
import {filterList} from "./selectors";
import {connect} from "react-redux";

function ColorList(props) {
    return (
        <div>
            {props.list.map(color =>
                <ColorItem
                    color={color}
                    ke={color.id}
                />
            )}
        </div>
    );
}

function mapState(state){
    return {
        list: filterList(state)
    }
}
export default connect(mapState)(ColorList);