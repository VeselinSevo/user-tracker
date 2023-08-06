import React from "react";
import User from "./User";
import './UserList.css'

const UserList = props => {

    const users = props.users.map(user => {
        return <li key={user.key}><User openEditUserModal={props.openEditUserModal} openDeleteUserModal={props.openDeleteUserModal} userData={user} deleteUser={props.deleteUser} /></li>
    })

    return (
        <ul>
            {users.length ? users : <div className="no-users-msg">None of the users come from selected country!</div>}
        </ul>
    )
}

export default UserList


