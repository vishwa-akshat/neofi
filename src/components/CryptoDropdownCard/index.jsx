// import React from 'react'

import useGlobalStore from "../../store/GlobalStore";

import "./style.scss";

export default function CryptoDropdownCard() {
    const globalCurrency = useGlobalStore((state) => state.globalCurrency);
    const setIsModalOpen = useGlobalStore((state) => state.setIsModalOpen);

    return (
        <div
            className="crypto-dropdown-card-wrapper"
            onClick={() => setIsModalOpen(true)}
        >
            <div className="currency-info-wrapper">
                <img
                    className="currency-icon"
                    src={globalCurrency[0].image}
                    alt="down arrow"
                />
                <p className="currency-name">{globalCurrency[0].name}</p>
            </div>
            <img
                className="down-icon"
                src="/src/assets/down-arrow.png"
                alt="down arrow"
            />
        </div>
    );
}
