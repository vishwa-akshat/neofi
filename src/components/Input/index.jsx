// import React from 'react'
import PropTypes from "prop-types";

import "./style.scss";

export default function Input({
    label,
    disabled,
    handleOnChange = () => null,
    coinNumber,
}) {
    return (
        <div className="amount-details-wrapper">
            <p className="label">{label}</p>
            <div className={`input-wrapper ${disabled && "disabled-wrapper"}`}>
                <input
                    disabled={disabled}
                    type="text"
                    className="input"
                    placeholder="0.00"
                    onChange={handleOnChange}
                    value={disabled && coinNumber}
                />
                {!disabled && <span className="rupee">INR</span>}
            </div>
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    handleOnChange: PropTypes.func,
    coinNumber: PropTypes.number,
};
