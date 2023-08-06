import React from "react";
import './Card.css'

const Card = props => {
    return (
        <div className={`card ${props.classes}`} onClick={props.onClick}>{props.children}</div>
    )
}

export default Card