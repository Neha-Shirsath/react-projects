// Nested HTML --
// <div id="parent">
//     <div id="child1">
//         <h1>Hello h1</h1>
//         <h2>Welcome back!!</h2>
//     </div>
//     <div id="child2">
//         <h1>Hello h1</h1>
//         <h2>Welcome back!!</h2>
//     </div>
// </div>
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"}, 
        [React.createElement("div", {id:"child1"}, 
        [React.createElement("h1", {}, "Hello h1, I m using Parcel🚀"),
        React.createElement("h2", {}, "Welcome back!!")]),

        React.createElement("div", {id:"child2"}, 
        [React.createElement("h1", {}, "Hello h1"),
        React.createElement("h2", {}, "Welcome back!!"),]),
    ])


console.log(parent);//react Element => js obj

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)//convert obj into html tag