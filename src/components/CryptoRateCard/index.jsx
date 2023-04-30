import { useEffect, useState } from "react";

import useWebSocket from "react-use-websocket";

import CryptoDropdownCard from "../CryptoDropdownCard";
import Input from "../Input";
import GradientButton from "../GradientButton";

import useGlobalStore from "../../store/GlobalStore";

import "./style.scss";

export default function CryptoRateCard() {
    const [coinNumber, setCoinNumber] = useState(0.0);

    const globalCurrency = useGlobalStore((state) => state.globalCurrency);
    const currencyInfo = useGlobalStore((state) => state.currencyInfo);
    const setCurrencyInfo = useGlobalStore((state) => state.setCurrencyInfo);

    const socketUrl = `wss://stream.binance.com:9443/ws/${globalCurrency[0].token.toLowerCase()}@trade`;

    const { lastJsonMessage } = useWebSocket(socketUrl);

    useEffect(() => {
        setCurrencyInfo(lastJsonMessage);
    }, [lastJsonMessage, setCurrencyInfo]);

    const handleOnChange = (event) => {
        const inputValue = event.target.value;
        const usdPrice = inputValue / 80;
        const quantityPerUSD = currencyInfo.q / currencyInfo.p;
        setCoinNumber(Number(quantityPerUSD * usdPrice).toFixed(5));
    };

    return (
        <div className="card-wrapper">
            <div className="header">
                <p className="tag">Current Value</p>
                <p className="value">
                    ₹{" "}
                    {currencyInfo ? Number(currencyInfo.p).toFixed(3) : "WAIT"}
                </p>
            </div>
            <CryptoDropdownCard />
            <Input
                label="Amount you want to invest"
                handleOnChange={handleOnChange}
            />
            <Input
                label={`Estimate Number of ${globalCurrency[0].name} You will Get`}
                disabled
                coinNumber={coinNumber}
            />
            <GradientButton label="Buy" />
        </div>
    );
}
