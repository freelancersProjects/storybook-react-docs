import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, onClick, type = 'button', disabled = false, theme = 'primary', className = '' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn btn-${theme} ${className}`}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
    theme: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    className: PropTypes.string,
};

Button.defaultProps = {
    onClick: () => { },
    disabled: false,
    theme: 'primary',
    className: '',
};

export default Button;
