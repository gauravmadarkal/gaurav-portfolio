import React from 'react'
import PropTypes from 'prop-types';

const Toast = ({toastData, className}) => {
    return(
        <div className={`toastContainer ${className} show`}>
            <p className="toastTitle">
                {toastData.title}
            </p>
            <p className="toastMessage">
                {toastData.message}   
            </p>
        </div>
    )
}

export default Toast;

Toast.propTypes = {
    toastData: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired
}