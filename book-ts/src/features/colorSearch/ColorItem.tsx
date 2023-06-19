import React from "react";
import {Color} from "./colorSearchSlice";

interface ColorItemProps {
    color: Color
}
function ColorItem(props: ColorItemProps){
    return (
      <div>
          <div>{props.color.name}</div>
          <div>{props.color.hexString}</div>
      </div>
    );
}

export default ColorItem;