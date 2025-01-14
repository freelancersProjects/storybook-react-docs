import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

const Dropdown = ({
    options,
    placeholder = 'Select an option',
    onSelect,
    withAnimation = false,
    backgroundColor = '#fff',
    textColor = '#333',
    hoverColor = '#f1f1f1',
    border = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('');

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        onSelect(option);
    };

    return (
        <div
            className={`dropdown ${border ? 'dropdown-border' : ''}`}
            style={{
                backgroundColor,
                color: textColor,
            }}
        >
            <button
                className="dropdown-button"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    backgroundColor,
                    color: textColor,
                    borderColor: border ? textColor : 'transparent',
                }}
            >
                {selected || placeholder}
                <span className="dropdown-icon">
                    {isOpen ? '▲' : '▼'}
                </span>
            </button>
            {isOpen && (
                <ul
                    className={`dropdown-menu ${withAnimation ? 'dropdown-slide-in' : ''}`}
                    style={{
                        backgroundColor,
                        borderColor: border ? textColor : 'transparent',
                    }}
                >
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(option)}
                            className="dropdown-item"
                            style={{
                                '--hover-color': hoverColor, // Ajout direct du hoverColor
                                backgroundColor,
                                color: textColor,
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    placeholder: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    withAnimation: PropTypes.bool,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    hoverColor: PropTypes.string,
    border: PropTypes.bool,
};

export default Dropdown;
