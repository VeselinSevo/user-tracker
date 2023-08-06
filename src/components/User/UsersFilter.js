import React from "react";
import './UsersFilter.css'
import UserModal from "./UserModal";

const UsersFilter = props => {

    const selectCountryToFilterBy = (selectedCountry) => {
        props.changeFilteredCountry(selectedCountry)
    }

    const checkShowAdults = (e) => {
        console.log(e.target.checked)
        props.changeShowAdults(e.target.checked)
    }

    return (
        <div className="users-filter-section">
            <div className="users-filter-container">
                <div className="users-filter-adult">
                    <label htmlFor="isAdult">Show just users over 18</label>
                    <input onChange={checkShowAdults} type="checkbox" name="isAdult"></input>
                </div>
                
                <select className="users-filter-country" value={props.selectedCountry} onChange={(e) => selectCountryToFilterBy(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Croatia">Croatia</option>
                    <option value="USA">USA</option>
                </select>
            </div>
        </div>  
    )
}

export default UsersFilter