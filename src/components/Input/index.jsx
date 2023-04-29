// import React from 'react'

import "./style.scss";

export default function Input({ label, disabled }) {
    return (
        <div className="amount-details-wrapper">
            <p className="label">{label}</p>
            <div className={`input-wrapper ${disabled && "disabled-wrapper"}`}>
                <input
                    disabled={disabled}
                    type="text"
                    className="input"
                    placeholder="0.00"
                />
                {!disabled && <span className="rupee">INR</span>}
            </div>
        </div>
    );
}
