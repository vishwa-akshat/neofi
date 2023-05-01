import { useState } from "react";

import Logo from "../../assets/logo.svg";

import "./style.scss";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("trade");

    const handleLinkActive = (event) => {
        setActiveLink(event.target.name);
    };

    return (
        <div className="navbar-wrapper">
            <div className="logo">
                <img src={Logo} alt="neofi" />
            </div>
            <div className="links-wrapper">
                <button
                    className={`nav-links ${
                        activeLink === "trade" && "active-nav-link"
                    }`}
                    onClick={handleLinkActive}
                    name="trade"
                >
                    Trade
                </button>
                <button
                    className={`nav-links ${
                        activeLink === "earn" && "active-nav-link"
                    }`}
                    onClick={handleLinkActive}
                    name="earn"
                >
                    Earn
                </button>
                <button
                    className={`nav-links ${
                        activeLink === "support" && "active-nav-link"
                    }`}
                    onClick={handleLinkActive}
                    name="support"
                >
                    Support
                </button>
                <button
                    className={`nav-links ${
                        activeLink === "about" && "active-nav-link"
                    }`}
                    onClick={handleLinkActive}
                    name="about"
                >
                    About
                </button>
            </div>
            <button className="connect-wallet-btn">Connect wallet</button>
        </div>
    );
}
