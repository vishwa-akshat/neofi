import { create } from "zustand";

import EthereumImage from "../assets/ethereum.svg";
import BitcoinImage from "../assets/bitcoin.svg";
import MaticImage from "../assets/matic.svg";
import SolanaImage from "../assets/solana.svg";
import xrpImage from "../assets/xrp.svg";
import BinanceImage from "../assets/binance.svg";

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
    searchedCurrencyList: defaultCurrencyList,
    isModalOpen: false,
    currencyInfo: null,
    globalCurrency: [
        {
            name: "Ethereum",
            image: EthereumImage,
            token: "ETHUSDT",
        },
    ],
    setCurrencyInfo: (value) => set({ currencyInfo: value }),
    setIsModalOpen: (value) => set({ isModalOpen: value }),
    setGlobalCurrency: (value) =>
        set({
            globalCurrency: get().currencyList.filter(
                (cur) => cur.name === value
            ),
        }),
    setSearchedCurrencyList: (value) =>
        set({
            searchedCurrencyList: get().currencyList.filter((cur) =>
                cur.name.toLowerCase().includes(value.toLowerCase())
            ),
        }),
}));

export default useGlobalStore;
