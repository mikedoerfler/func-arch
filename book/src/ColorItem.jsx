import React from "react";

function ColorItem({color}){
    return (
      <div>
          <div>{color.name}</div>
          <div>{color.hexString}</div>
      </div>
    );
}

export default ColorItem;