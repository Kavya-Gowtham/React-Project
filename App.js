import React from "react";
import { createRoot } from "react-dom/client";

//core react to create element
const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Namaste React"
);

console.log(heading)

//using jsx
const jsxheading = <h1 id="heading">"Namste jsx react"</h1>;

console.log(jsxheading)
const root = createRoot(document.getElementById("root"));
root.render(jsxheading);