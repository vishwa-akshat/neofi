// import React from "react";

import CryptoInfo from "../CryptoInfo";
import useGlobalStore from "../../store/GlobalStore";

import "./style.scss";

export default function CryptoList() {
    const searchedCurrencyList = useGlobalStore(
        (state) => state.searchedCurrencyList
    );
    return (
        <div className="crypto-list">
            {searchedCurrencyList.map((currency, index) => (
                <CryptoInfo key={index} currency={currency} />
            ))}
        </div>
    );
}
