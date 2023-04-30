import Navbar from "../../components/Navbar";
import CryptoRateCard from "../../components/CryptoRateCard";
import SearchModal from "../../components/SearchModal";

import useGlobalStore from "../../store/GlobalStore";

import "./style.scss";

export default function Home() {
    const isModalOpen = useGlobalStore((state) => state.isModalOpen);

    return (
        <div className="container">
            <Navbar />
            <div className="content-wrapper">
                <CryptoRateCard />
            </div>
            {isModalOpen ? (
                <div className="modal-container">
                    <SearchModal />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
