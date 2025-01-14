import React from 'react';
import PropTypes from 'prop-types';
import './Timeline.css';

const Timeline = ({
    events,
    linear = true,
    completedSteps = 0,
    completedColor = '#28a745', // Couleur de la progression
    defaultColor = '#ccc',      // Couleur des étapes incomplètes
}) => {
    return (
        <div className={`timeline ${linear ? 'timeline-linear' : ''}`}>
            {/* Ligne horizontale */}
            {linear && (
                <div className="timeline-line">
                    <div
                        className="timeline-progress"
                        style={{
                            width: `${(completedSteps / (events.length - 1)) * 100}%`,
                            backgroundColor: completedColor,
                        }}
                    ></div>
                </div>
            )}

            {/* Étapes */}
            <div className="timeline-steps">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`timeline-step ${index <= completedSteps ? 'completed' : ''}`}
                    >
                        <div
                            className="timeline-circle"
                            style={{
                                backgroundColor: index <= completedSteps ? completedColor : defaultColor,
                            }}
                        >
                            {index + 1}
                        </div>
                        <div className="timeline-label">
                            <h3>{event.title}</h3>
                            {event.date && <span>{event.date}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

Timeline.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            date: PropTypes.string, // Date associée à l'étape
        })
    ).isRequired,
    linear: PropTypes.bool,
    completedSteps: PropTypes.number,
    completedColor: PropTypes.string,
    defaultColor: PropTypes.string,
};

export default Timeline;
