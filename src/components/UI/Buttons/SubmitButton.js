import React from "react";
import './SubmitButton.css'
import './Button.css'

const SubmitButton = props => {
    return (
        <button type="submit" disabled={props.disabled} className='submit-button btn' onClick={props.onClick}>{props.text}</button>
    )
}

export default SubmitButton