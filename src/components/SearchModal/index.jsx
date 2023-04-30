// import React from 'react'

import CryptoList from "../CryptoList";
import SearchInput from "../SearchInput";

import CloseIcon from "../../assets/closeIcon.svg";
import useGlobalStore from "../../store/GlobalStore";

import "./style.scss";

export default function SearchModal() {
    const setIsModalOpen = useGlobalStore((state) => state.setIsModalOpen);

    return (
        <div className="modal-wrapper">
            <SearchInput />
            <CryptoList />
            <div
                className="close-icon-wrapper"
                onClick={() => setIsModalOpen(false)}
            >
                <img src={CloseIcon} alt="close icon" className="close-icon" />
            </div>
        </div>
    );
}
