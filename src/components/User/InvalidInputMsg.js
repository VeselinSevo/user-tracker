import React from "react";
import './InvalidInputMsg.css'

const InvalidInputMsg = props => {
    return (
        <div className="invalid-input-msg">
            <div className="invalid-input-msg__text">Please enter valid {props.inputName}!</div>
        </div>
    )
}

export default InvalidInputMsg