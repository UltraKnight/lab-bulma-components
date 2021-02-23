import React from 'react';
// import 'bulma/css/bulma.css';
import './CoolButton.css';
import PropTypes from 'prop-types';

const CoolButton = ({children, isPrimary, isSuccess, isDanger, isSmall, isInfo, className}) => {
    let classes = className || '';
    classes += ' button';
    classes += isInfo ? ' is-info' : '';
    classes += isPrimary ? ' is-primary' : '';
    classes += isSuccess ? ' is-success' : '';
    classes += isDanger ? ' is-danger' : '';
    classes += isSmall ? ' is-small' : '';
    classes = classes.trim();

    return(
        <React.Fragment>
            <button className={classes}>{children}</button>
        </React.Fragment>
    )
}

export default CoolButton;

CoolButton.propTypes = {
    isPrimary: PropTypes.bool,
    isSuccess: PropTypes.bool,
    isDanger: PropTypes.bool,
    isSmall: PropTypes.bool,
    isInfo: PropTypes.bool
};