import React from 'react';
import {Link} from "react-router-dom";

import img from "../assets/Home.png"

const Header = () => {

    return (
        <div className="nav-bar">
            <Link to="/"><img src={img} /></Link>
        </div>
    );
};

export default Header;