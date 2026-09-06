import React from "react";
import ReactDOM from "react-dom/client";

//Header
//-logo
//-items(Home,About us, cart)
//Body
//-search
//-rest cards(img, restName,cuisine, price,time)
//Footer
//-contact
//-links

const Appheader = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/burger-vector-illustration-flat-hamburger-icon-logo-design_1058532-20232.jpg" alt="burger" />
                <h3 className="name">CraveLy</h3>
            </div>
            <div className="items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li className="cart-logo">🛒Cart</li>
                </ul>
            </div>
        </div>
    );
};

const ResCard = () => {
    return (
        <div className="res-card">
            <h3>Rajmata Foods</h3>
        </div>
    )
}


const Appbody = () => {
    return (
        <div className="app-body">
            <div className="search-container"> <input className="search" type="text" placeholder="Search" /></div>
            <div className="res-container">
                <ResCard/>
            </div>
        </div>
    )
}

// const Appfooter = () => {
//     return ()
// }

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
