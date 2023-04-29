import Navbar from "../../components/Navbar";
import CryptoRateCard from "../../components/CryptoRateCard";

import "./style.scss";

export default function Home() {
    return (
        <div className="container">
            <Navbar />
            <div className="content-wrapper">
                <CryptoRateCard />
            </div>
        </div>
    );
}
