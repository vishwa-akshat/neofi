import PropTypes from "prop-types";

import "./style.scss";

export default function GradientButton({ label }) {
    return <button className="gradient-button">{label}</button>;
}

GradientButton.propTypes = {
    label: PropTypes.string,
};
