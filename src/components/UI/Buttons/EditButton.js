import React from "react";
import './EditButton.css'
import './Button.css'

const EditButton = props => {
    return (
        <button className='edit-button btn' onClick={props.onClick}>{props.text}</button>
    )
}

export default EditButton