import { create } from "zustand";

import EthereumImage from "../assets/ethereum.png";
import BitcoinImage from "../assets/bitcoin.png";
import MaticImage from "../assets/matic.png";
import SolanaImage from "../assets/Solana.png";
import xrpImage from "../assets/xrp.png";
import BinanceImage from "../assets/binance.png";

const defaultCurrencyList = [
    {
        name: "Ethereum",
        image: EthereumImage,
        token: "ETHUSDT",
    },
    {
        name: "Bitcoin",
        image: BitcoinImage,
        token: "BTCUSDT",
    },
    {
        name: "Matic",
        image: MaticImage,
        token: "MATICUSDT",
    },
    {
        name: "Binance",
        image: BinanceImage,
        token: "BNBUSDT",
    },
    {
        name: "XRP",
        image: xrpImage,
        token: "XRPUSDT",
    },
    {
        name: "Solana",
        image: SolanaImage,
        token: "SOLUSDT",
    },
];

const useGlobalStore = create((set, get) => ({
    currencyList: defaultCurrencyList,
    globalCurrency: [
        {
            name: "Ethereum",
            image: EthereumImage,
            token: "ETHUSDT",
        },
    ],
    setGlobalCurrency: (value) =>
        set({
            globalCurrency: get().currencyList.filter(
                (cur) => cur.name === value
            ),
        }),
}));

export default useGlobalStore;
