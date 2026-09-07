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
            <img className="dosa-cafe" alt="dosa" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/12/2/2d2d3946-5d25-4f6f-9d50-0b9f31425454_445353.jpg"/>
            <h3>SA Dosa Cafe</h3>
            <h4>⭐4.2 .  25-30 mins</h4>
            <p>South Indian, Snacks, Behaverages...</p>
            <p>Kothrud</p>
        </div>
    )
}


const Appbody = () => {
    return (
        <div className="app-body">
            <div className="search-container"> <input className="search" type="text" placeholder="Search" /></div>
            <div className="res-container">
                <div className="card-container1">
                    <ResCard/>
                    <ResCard/>
                    <ResCard/>
                    <ResCard/>
                </div>
                <div className="card-container2">
                    <ResCard/>
                    <ResCard/>
                    <ResCard/>
                    <ResCard/>
                </div>
                
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
