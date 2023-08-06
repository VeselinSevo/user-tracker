import React from "react";
import DeleteButton from '../UI/Buttons/DeleteButton'
import EditButton from "../UI/Buttons/EditButton";
import Card from '../UI/Card'
import './User.css'

const User = props => {
    return (
        <Card classes="user-card">
            <div className="user-card__data">
                <p>{props.userData.username}</p>
                <p>{props.userData.country}</p>
                <p>{props.userData.city}</p>
                <p>{props.userData.age}</p>
            </div> 
            <div className="user-card__buttons">
                <DeleteButton text='Delete' onClick={() => props.openDeleteUserModal(props.userData.id)} />
                <EditButton text='Edit' onClick={() => props.openEditUserModal(props.userData.id)} />
            </div>  
        </Card>
    )
}

export default User