import React from "react";
import ReactDom from "react-dom/client";

function Greeting() {
  return <h3>Hello</h3>;
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Greeting></Greeting>);
