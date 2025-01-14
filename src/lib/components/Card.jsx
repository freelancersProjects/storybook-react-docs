import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
    image,
    title,
    description,
    fullWidth = false,
    height = 'auto',
    borderRadius = '8px',
    showButton = false,
    buttonLabel = 'Voir plus',
    buttonAlign = 'left',
    centerText = false, // Centre verticalement le texte dans le format horizontal
    onClick,
    onButtonClick,
}) => {
    return (
        <div
            className={`card ${fullWidth ? 'card-full-width' : ''}`}
            onClick={onClick}
            style={{ borderRadius, height }}
        >
            {/* Image */}
            {image && (
                <img
                    src={image}
                    alt={title}
                    className={`card-image ${fullWidth ? 'card-image-full-width' : ''}`}
                />
            )}

            {/* Contenu */}
            <div
                className={`card-content ${fullWidth ? (centerText ? 'card-content-center' : 'card-content-top') : ''
                    }`}
            >
                <h3 className={`card-title ${centerText ? 'card-title-center' : ''}`}>
                    {title}
                </h3>
                <p className={`card-description ${centerText ? 'card-description-center' : ''}`}>
                    {description}
                </p>

                {/* Bouton Voir Plus */}
                {!fullWidth && showButton && (
                    <button
                        className={`card-button card-button-${buttonAlign}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onButtonClick();
                        }}
                    >
                        {buttonAlign === 'center' ? buttonLabel : `${buttonLabel} →`}
                    </button>
                )}
            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool,
    height: PropTypes.string,
    borderRadius: PropTypes.string,
    showButton: PropTypes.bool,
    buttonLabel: PropTypes.string,
    buttonAlign: PropTypes.oneOf(['left', 'right', 'center']),
    centerText: PropTypes.bool,
    onClick: PropTypes.func,
    onButtonClick: PropTypes.func,
};

export default Card;
