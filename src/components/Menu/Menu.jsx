import React, { useState } from 'react';

import Regions from '../Regions/Regions';
import Countries from '../Countries/Countries.jsx';

import './Menu.scss';

const Burger = () => {
    const [showMenu, toggleMenu] = useState(false);
    const onClickMenu = () => {
        toggleMenu(!showMenu);
    };

    const styles = showMenu ? 'show-menu' : null;
    return (
        <div className="col-sm-3 col-md-3 col-lg-2 bg-light sidebar">
            <label onClick={onClickMenu} className={styles}>
                <span></span>
                <span></span>
                <span></span>
            </label>
            <nav className={styles}>
                <div className="sidebar-sticky">
                    <Regions />
                    <Countries clicked={onClickMenu} />
                </div>
            </nav>
        </div>
    );
};

export default Burger;
