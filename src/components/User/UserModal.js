import React from "react";
import './UserModal.css'
import CloseXButton from '../UI/Buttons/CloseXButton'


const UserModal = props => {
    return (
        <div className="user-modal" onClick={props.closeUserModal}>
            <div className={`user-modal-card ${props.classes}`} onClick={(e) => e.stopPropagation()}>
                <CloseXButton onClick={props.closeUserModal} />
                {props.children}
            </div>
        </div>
    )
}

export default UserModal