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

const ResCard = (props) => {
    const {resImage,resName, ratingNtime, cuisine, location} = props
    return (
        <div className="res-card">
            <img className="dosa-cafe" alt="cuisine" src={resImage}/>
            <h3>{resName}</h3>
            <h4>{ratingNtime}</h4>
            <p>{cuisine}</p>
            <p>{location}</p>
        </div>
    )
}


const Appbody = () => {
    return (
        <div className="app-body">
            <div className="search-container"> <input className="search" type="text" placeholder="Search" /></div>
            <div className="res-container">
                <div className="card-container1">
                    <ResCard resImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/12/2/2d2d3946-5d25-4f6f-9d50-0b9f31425454_445353.jpg"
                            resName="SA Dosa Cafe" 
                            ratingNtime="⭐4.2 .  25-30 mins" 
                            cuisine="South Indian, Snacks, Behaverages"
                            location="Kothrud"/>
                    <ResCard resImage = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jiiy0xlkxs9zmt8nqbbp"
                            resName="Le Plaisir" 
                            ratingNtime="⭐4.6 .  30-40 mins"
                            cuisine="European"
                            location="Kothrud"/>
                    <ResCard resImage = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/29/10f70927-6a89-4ecc-9504-d8547af1cbd1_21895%20(1).jpg"
                            resName="Abhishek Veg Restaurant" 
                            ratingNtime="⭐4.5 .  40-50 mins"
                            cuisine="Biryani, North Indian, South Indian"
                            location="Erandwane"/>
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
