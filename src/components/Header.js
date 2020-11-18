import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="header">
            <p className="header-text">"One stop for all your books."</p>
            <hr/>
            <NavLink to="/shop" exact activeClassName="selected" className="btn">
                    Shop Now
            </NavLink>
        </div>
    )
}

export default Header