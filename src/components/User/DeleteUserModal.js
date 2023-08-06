import React from "react";
import './EditUserModal.css'
import DeleteButton from '../UI/Buttons/DeleteButton'
import UserModal from "./UserModal";
import { createPortal } from "react-dom";


const DeleteUserModal = props => {

    const deleteUser = (id) => {
        props.deleteUser(id)
        props.closeUserModal()
    }

    return (
        createPortal(
            <UserModal classes="delete-user" closeUserModal={props.closeUserModal}>
                <div>Are you sure that you want to delete this record?</div>
                <DeleteButton text="Delete" onClick={() => deleteUser(props.user[0].id)} />
            </UserModal>, document.getElementById('modal-root')  
        )           
    )
}

export default DeleteUserModal