import React from "react";
import { createRoot } from "react-dom/client";

//react element
const title = (
    <h1 id="heading">"Namaste React"
    <Title1/> 
    </h1>  
);
//React component
const Title1 = () =>(
    <h1>Hello namaste</h1>
)
//react component
const HeadingComponent = () =>( 
<div id= "componentHeading">
{title}
<Title1/>
<Title1></Title1>
{Title1()}
<h1 id="heading">"Namste jsx react"</h1>
</div>
);

const root = createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);