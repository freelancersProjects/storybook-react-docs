import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

const Loader = ({
    loaderColor = '#6c63ff',
    backgroundColor = '#e0e0e0',
    animationType = 'spinner', // Types disponibles : spinner, pulse, dots, bars, ring
    imageSrc = null, // Image utilisée pour le loader (optionnel)
    size = '50px', // Taille du loader
}) => {
    // Si une image est fournie, utilisez-la comme loader
    if (imageSrc) {
        return (
            <div
                className="loader-image"
                style={{
                    width: size,
                    height: size,
                    backgroundColor,
                }}
            >
                <img
                    src={imageSrc}
                    alt="Loading"
                    className={`loader-image-spinner`}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
            </div>
        );
    }

    // Animations Bars et Dots nécessitent plusieurs éléments
    if (animationType === 'bars' || animationType === 'dots') {
        return (
            <div
                className={`loader loader-${animationType}`}
                style={{
                    '--loader-color': loaderColor,
                    '--background-color': backgroundColor,
                    width: size,
                    height: size,
                }}
            >
                {[...Array(4)].map((_, index) => (
                    <div key={index}></div>
                ))}
            </div>
        );
    }

    // Animations simples
    return (
        <div
            className={`loader loader-${animationType}`}
            style={{
                '--loader-color': loaderColor,
                '--background-color': backgroundColor,
                width: size,
                height: size,
            }}
        ></div>
    );
};

Loader.propTypes = {
    loaderColor: PropTypes.string, // Couleur de la partie active
    backgroundColor: PropTypes.string, // Couleur de la partie inactive
    animationType: PropTypes.oneOf(['spinner', 'pulse', 'dots', 'bars', 'ring']), // Type d'animation
    imageSrc: PropTypes.string, // URL de l'image à utiliser (optionnel)
    size: PropTypes.string, // Taille du loader
};

export default Loader;
