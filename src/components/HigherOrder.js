import React from "react";
import { useState } from "react";

export default function HigherOrder(OriginalComponent) {
  function NewComponent(props) {
    const [count, setCount] = useState(0);
    const func = () => {
      setCount((prev) => {
        return prev + 1;
      });
    };
    return <OriginalComponent count={count} incre={func} {...props} />;
  }

  return NewComponent;
}
