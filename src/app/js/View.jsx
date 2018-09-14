import React from 'react';
import {Link} from "react-router-dom"



const View = (props) => {

    const img1 = props.img
    return (
        <div>
            <div className="image-container">
            <img src={props.img}/>
            </div>
            <div className="content-container">
            <h1><Link to={props.link}>{props.title}</Link></h1>
            <p>{props.caption}</p>
            <hr className="line"/>
            </div>
        </div>
    );
};

export default View;