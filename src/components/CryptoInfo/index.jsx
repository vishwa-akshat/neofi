// import React from 'react'
import PropTypes from "prop-types";

import useGlobalStore from "../../store/GlobalStore";
import checkIcon from "../../assets/checkIcon.svg";

import "./style.scss";

export default function CryptoInfo({ currency }) {
    const globalCurrency = useGlobalStore((state) => state.globalCurrency);
    const setGlobalCurrency = useGlobalStore(
        (state) => state.setGlobalCurrency
    );
    const setIsModalOpen = useGlobalStore((state) => state.setIsModalOpen);

    const isActive = globalCurrency[0].name === currency.name;

    const handleOnClick = () => {
        setGlobalCurrency(currency.name);
        setIsModalOpen(false);
    };

    return (
        <div
            className={`crypto-info-wrapper ${
                isActive && "crypto-info-active"
            }`}
            onClick={handleOnClick}
        >
            <div className="crypto-info">
                <img
                    src={currency.image}
                    alt={currency.name}
                    className="image"
                />
                <p className="crypto-name">{currency.name}</p>
            </div>
            {isActive && (
                <img src={checkIcon} alt="check icon" className="check-icon" />
            )}
        </div>
    );
}

CryptoInfo.propTypes = {
    currency: PropTypes.object,
};
