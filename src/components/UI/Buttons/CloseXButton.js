import React from "react";
import './CloseXButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const CloseXButton = props => {
    return (
        <FontAwesomeIcon className={'close-x-button'} icon={faXmark} onClick={props.onClick}/>
    )
}

export default CloseXButton