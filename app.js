import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading1  = React.createElement(
    "h1", 
    {id: "h1 tag"}, 
    "Welcome, I m using React💕"
)

//JSX
const jsxHeading = (<h2 className="head">"Hello from JSX😎"</h2>);


const Heading  = () => { 
    return <h2 id="heading1" >Welcome, I m using React💕</h2>
}

//functional component
const FuncComponent = () => (
    <div id="container">
        <Heading/>
        <h3 className="heading2">This is React Functional Component</h3>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(jsxHeading)
root.render(<FuncComponent/>)
