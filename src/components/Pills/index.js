import React from "react";
import '../Pills/styles.css';
import PropTypes from 'prop-types'

const Pills = ({ local, onClick, selected }) => {
    return (
        <div onClick={onClick} className={`pills__container ${selected ? 'pills__container--active' : ''}`}>
            {local}
        </div>
    )
}
Pills.propType = {
    local: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    selected: PropTypes.bool
}

export default Pills