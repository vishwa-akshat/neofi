import Logo from "../../assets/logo.svg";

import "./style.scss";

export default function Navbar() {
    return (
        <div className="navbar-wrapper">
            <div className="logo">
                <img src={Logo} alt="neofi" />
            </div>
            <div className="links-wrapper">
                <button className="nav-links">Trade</button>
                <button className="nav-links">Earn</button>
                <button className="nav-links">Support</button>
                <button className="nav-links">About</button>
            </div>
            <button className="connect-wallet-btn">Connect wallet</button>
        </div>
    );
}
