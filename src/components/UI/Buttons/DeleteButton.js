import React from "react";
import './DeleteButton.css'
import './Button.css'

const DeleteButton = props => {
    return (
        <button className="delete-button btn" onClick={props.onClick}>{props.text}</button>
    )
}

export default DeleteButton