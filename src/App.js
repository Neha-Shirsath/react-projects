import React from "react";
import ReactDOM from "react-dom/client";
import Appheader from "./components/Header";
import Appbody from "./components/Body";


const AppLayout = () => {
    return (
        <div className="app">
            <Appheader/>
            <Appbody/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(jsxHeading)
root.render(<AppLayout/>)
