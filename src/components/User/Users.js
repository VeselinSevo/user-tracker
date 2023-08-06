import React, { useState } from "react";
import User from "./User"
import UsersFilter from "./UsersFilter";
import UserList from './UserList'
import './Users.css'

const Users = props => {

    const [filteredCountry, setFilteredCountry] = useState('All')
    const [showAdults, setShowAdults] = useState(false)

    const changeFilteredCountry = (selectedCounry) => {
        setFilteredCountry(selectedCounry)
    }

    const changeShowAdults = (shouldShow) => {
        setShowAdults(shouldShow)
    }

    let filteredUsers = props.users

    if (filteredCountry !==  'All') {
        filteredUsers = props.users.filter(user => user.country == filteredCountry)
    }

    if (showAdults ===  true)  {
        filteredUsers = filteredUsers.filter(user => Number(user.age) > 17)
        console.log(filteredUsers)
    }

    return (
        <div className="users-section">
            <UsersFilter changeShowAdults={changeShowAdults} changeFilteredCountry={changeFilteredCountry} selectedCountry={filteredCountry}/>
            <UserList openEditUserModal={props.openEditUserModal} openDeleteUserModal={props.openDeleteUserModal} deleteUser={props.deleteUser} users={filteredUsers} />
        </div>
    )
}

export default Users