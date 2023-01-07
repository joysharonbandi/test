import React from "react";
import { useState } from "react";
import HigherOrder from "./HigherOrder";

function ClickComponent(props) {
  return (
    <div>
      <button onClick={props.incre}>ClickComponent</button>
      {props.count}
      {props.name}
    </div>
  );
}

export default HigherOrder(ClickComponent);
