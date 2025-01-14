import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

const Carousel = ({
    items,
    autoPlay = true,
    interval = 3000,
    showDots = false,
    showArrows = true,
    swipeEnabled = true,
    mode = 'single', // 'single' ou 'peek'
    slidesToShow = 1,
    onImageClick,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [fullScreenImage, setFullScreenImage] = useState(null);

    const totalSlides = items.length;

    // Gestion de l'auto-play
    useEffect(() => {
        if (autoPlay) {
            const timer = setInterval(() => {
                goToNextSlide();
            }, interval);
            return () => clearInterval(timer);
        }
    }, [autoPlay, interval, currentIndex]);

    // Aller à la diapositive suivante
    const goToNextSlide = () => {
        setCurrentIndex((currentIndex + 1) % totalSlides);
    };

    // Aller à la diapositive précédente
    const goToPrevSlide = () => {
        setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
    };

    // Glissement avec la souris
    const handleSwipe = (e) => {
        if (!swipeEnabled) return;
        const { movementX } = e;
        if (movementX > 50) goToPrevSlide();
        if (movementX < -50) goToNextSlide();
    };

    // Mode plein écran pour les images
    const handleImageClick = (image) => {
        if (onImageClick) {
            onImageClick(image);
        } else {
            setFullScreenImage(image);
            setIsFullScreen(true);
        }
    };

    const closeFullScreen = () => {
        setIsFullScreen(false);
        setFullScreenImage(null);
    };

    // Calcul pour afficher plusieurs diapositives ou un aperçu
    const getSlideStyle = () => {
        if (mode === 'peek') {
            return {
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                width: `${100 / slidesToShow}%`,
            };
        }
        return {
            transform: `translateX(-${currentIndex * 100}%)`,
            width: '100%',
        };
    };

    return (
        <div className="carousel" onMouseUp={handleSwipe}>
            <div className="carousel-track" style={getSlideStyle()}>
                {items.map((item, index) => (
                    <div key={index} className="carousel-item">
                        {typeof item === 'string' ? (
                            <img
                                src={item}
                                alt={`Slide ${index}`}
                                className="carousel-image"
                                onClick={() => handleImageClick(item)}
                            />
                        ) : (
                            <div
                                style={{ backgroundColor: item }}
                                className="carousel-color"
                            ></div>
                        )}
                    </div>
                ))}
            </div>

            {/* Flèches */}
            {showArrows && (
                <>
                    <button className="carousel-arrow prev" onClick={goToPrevSlide}>
                        ‹
                    </button>
                    <button className="carousel-arrow next" onClick={goToNextSlide}>
                        ›
                    </button>
                </>
            )}

            {/* Points */}
            {showDots && (
                <div className="carousel-dots">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        ></button>
                    ))}
                </div>
            )}

            {/* Mode plein écran */}
            {isFullScreen && (
                <div className="carousel-fullscreen" onClick={closeFullScreen}>
                    <img src={fullScreenImage} alt="Full Screen" />
                </div>
            )}
        </div>
    );
};

Carousel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])).isRequired,
    autoPlay: PropTypes.bool,
    interval: PropTypes.number,
    showDots: PropTypes.bool,
    showArrows: PropTypes.bool,
    swipeEnabled: PropTypes.bool,
    mode: PropTypes.oneOf(['single', 'peek']),
    slidesToShow: PropTypes.number,
    onImageClick: PropTypes.func,
};

export default Carousel;
