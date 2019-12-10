import React from 'react';
import PropTypes from 'prop-types';

import './ListItem.scss';

const ListItem = ({ name, isActive, onClick }) => {
    const handleClick = React.useCallback(() => onClick(name), [name, onClick]);

    return (
        <div
            onClick={handleClick}
            className={`list-group-item list-group-item-action region ${isActive ? ' active-region' : ''}`}
        >
            {name}
        </div>
    );
};

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ListItem;
