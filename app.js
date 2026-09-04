import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => React element => JS object =>render => HTML element
const heading  = React.createElement("h1", {id: "h1 tag"}, "Welcome, I m using React💕")

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"))

//JSX => It is not HTML => JSX is HTML like Syntax
//JSX => compiled/transpiled by BABEL(managed by PARCEL) => React.createElement => Js obj => render => HTMLelemt
const jsxHeading = <h1>"Hello from JSX😎"</h1>

console.log(jsxHeading);

root.render(heading)
root.render(jsxHeading)//creates HTML element

