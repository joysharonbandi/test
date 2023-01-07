import React from "react";
import HigherOrder from "./HigherOrder";

function HoverComponent(props) {
  return (
    <div>
      <div onMouseOver={props.incre}>
        HoverComponent
        {props.count}
      </div>
    </div>
  );
}

export default HigherOrder(HoverComponent);
