import {LOGO_URL} from "../utils/constants";

const Appheader = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Appheader;