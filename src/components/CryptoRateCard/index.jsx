// import React, { useState, useCallback, useEffect } from "react";

// import useWebSocket, { ReadyState } from "react-use-websocket";

import CryptoDropdownCard from "../CryptoDropdownCard";
import Input from "../Input";
import GradientButton from "../GradientButton";

import useGlobalStore from "../../store/GlobalStore";

import "./style.scss";

export default function CryptoRateCard() {
    // const socketUrl = "wss://stream.binance.com:9443/ws/ethusdt@trade";

    const globalCurrency = useGlobalStore((state) => state.globalCurrency);

    // const { lastJsonMessage } = useWebSocket(socketUrl);

    console.log(globalCurrency);
    return (
        <div className="card-wrapper">
            <div className="header">
                <p className="tag">Current Value</p>
                <p className="value">₹ 24882</p>
            </div>
            <CryptoDropdownCard />
            <Input label="Amount you want to invest" />
            <Input
                label={`Estimate Number of ${globalCurrency.name} You will Get`}
                disabled
            />
            <GradientButton label="Buy" />
        </div>
    );
}
