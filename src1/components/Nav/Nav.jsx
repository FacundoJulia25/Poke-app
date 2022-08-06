import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
class Nav extends Component {

    render() {
        return (
            <div>
                <Link to={'/'}>
                    <h2>Home</h2>
                </Link>
                <Link to={'/house/create'}><h2>Create House</h2></Link>
            </div>
        );
    };
};

export default Nav;
