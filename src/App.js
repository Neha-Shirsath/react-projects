import React from "react";
import ReactDOM from "react-dom/client";
import Appheader from "./components/Header";
import Appbody from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const AppLayout = () => {
    return (
        <div className="app">
            <Appheader/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/",
                element : <Appbody/>
            },
            {
            path : "/about",
            element : <About/>,
            },
            {
            path : "/contact",
            element : <Contact/>,
            }
        ]
    }
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<RouterProvider router={appRouter}/>)
