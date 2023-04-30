// import React from 'react'

import SearchIcon from "../../assets/searchIcon.svg";

import useGlobalStore from "../../store/GlobalStore";

import "./style.scss";

export default function SearchInput() {
    const setSearchedCurrencyList = useGlobalStore(
        (state) => state.setSearchedCurrencyList
    );

    const handleOnChange = (event) => {
        const inputValue = event.target.value;
        setSearchedCurrencyList(inputValue);
    };

    return (
        <div className="search-input-wrapper">
            <img className="search-icon" src={SearchIcon} alt="search icon" />
            <input
                className="search-input"
                type="text"
                placeholder="Search chains"
                onChange={handleOnChange}
            />
        </div>
    );
}
