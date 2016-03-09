import React, { PropTypes } from 'react'

const Button = ({ label, disabled, onClick }) => {
    return (
        <button onClick={e => {
            e.preventDefault();
            onClick();
       }} disabled={disabled}>
            {label}
        </button>
    )
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: React.PropTypes.bool
};

export default Button;
