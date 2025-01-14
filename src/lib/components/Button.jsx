import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
    label = 'Button',
    backgroundColor = '#6c63ff',
    hoverColor = '#4e4fcf',
    textColor = '#fff',
    borderRadius = '8px',
    fontSize = '1rem', // Taille de la police par défaut
    disabled = false, // État désactivé
    onClick,
}) => {
    return (
        <button
            className="custom-button"
            style={{
                '--background-color': backgroundColor,
                '--hover-color': hoverColor,
                '--text-color': textColor,
                '--border-radius': borderRadius,
                '--font-size': fontSize,
            }}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    hoverColor: PropTypes.string,
    textColor: PropTypes.string,
    borderRadius: PropTypes.string,
    fontSize: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
