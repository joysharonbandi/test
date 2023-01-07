import React from "react";
import ClickComponent from "./components/ClickComponent";
import HoverComponent from "./components/HoverComponent";

export default function App() {
  return (
    <div>
      <ClickComponent name="joy" />
      <HoverComponent />
    </div>
  );
}
