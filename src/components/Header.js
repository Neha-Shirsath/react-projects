import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Appheader = () => {

    
    const [loginBtn, setLoginBtn] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="burger" />
                <h3 className="name">CraveLy</h3>
            </div>
            <div className="items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li className="cart-logo">🛒Cart</li>
                    <li><button className="login-btn" 
                        onClick = { () => {
                            loginBtn === "Login" 
                                    ? setLoginBtn("Logout")
                                    : setLoginBtn("Login");
                    }}>
                    {loginBtn}</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Appheader;