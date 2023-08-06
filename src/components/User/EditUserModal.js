import React, {useState} from "react";
import './EditUserModal.css'
import SubmitButton from '../UI/Buttons/SubmitButton'
import UserModal from "./UserModal";
import InvalidInputMsg from './InvalidInputMsg' //fix
import { createPortal } from "react-dom";


const EditUserModal = props => {

    const [userInputData, setUserInputData] = useState({
        username: props.user[0].username,
        country: props.user[0].country,
        city: props.user[0].city,
        age: props.user[0].age
    }) 

    const [isFormValid, setIsFormValid] = useState(false)
    const [errorMessages, setErrorMessages] = useState({})

    const onInputChange = e => {

        setErrorMessages(prev => {
            return {
                ...prev,
                [e.target.name]: false
            }
        })

        setUserInputData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    } 

    console.log(userInputData)
    console.log(errorMessages)

    const editUser = (e) => {
        e.preventDefault()
        const isFormValid = checkIsFormValid()

        const userData  = {
            username: userInputData.username,
            country: userInputData.country,
            city: userInputData.city,
            age: userInputData.age,
            id: props.user[0].id,
            key: props.user[0].key
        }

        if (isFormValid)  {
            setUserInputData({
                username: '',
                country: 'Serbia',
                city: '',
                age: 0
            })
            props.editUser(userData, userData.id)
            props.closeUserModal()
        } 
    }

    const checkIsFormValid = () => {
        let formValid = false;
        let isSomethingWrong = false
        
        if (userInputData.username.trim() < 1) {
            setIsFormValid(formValid)
            setErrorMessages(prev => {
                return (
                    {
                        ...prev,
                        username: true
                    }
                )
            })
            isSomethingWrong = true
        }

        if(userInputData.country.trim() < 1) {
            setIsFormValid(formValid)
            setErrorMessages(prev => {
                return (
                    {
                        ...prev,
                        country: true
                    }
                )
            })
            isSomethingWrong = true
        }

        if(userInputData.city.trim() < 1) {
            setIsFormValid(formValid)
            setErrorMessages(prev => {
                return (
                    {
                        ...prev,
                        city: true
                    }
                )
            })
            isSomethingWrong = true
        }

        if(userInputData.age < 1) {
            setIsFormValid(formValid)
            setErrorMessages(prev => {
                return (
                    {
                        ...prev,
                        age: true
                    }
                )
            })
            isSomethingWrong = true
        }

        if (isSomethingWrong) {
            return formValid
        }

        setErrorMessages({})
        formValid = true
        setIsFormValid(formValid)
        return formValid;
    }

    
    return (
        createPortal(
                <UserModal classes="edit-user" closeUserModal={props.closeUserModal}>
                    <form className="edit-user-form" onSubmit={editUser}>
                        <div className="edit-user-form__inputs">
                            <label className="username-label" htmlFor="username">Name</label>
                            <input onChange={onInputChange} value={userInputData.username} type='text' name="username"></input>
                            {errorMessages['username'] ? <InvalidInputMsg inputName="username"/> : null}
                            <label className="country-label" htmlFor="country">Country</label>
                            <select name="country" onChange={onInputChange} value={userInputData.country}>
                                <option>Serbia</option>
                                <option>Croatia</option>
                                <option>USA</option>
                            </select>
                            {errorMessages['country'] ? <InvalidInputMsg inputName="country"/> : null}
                            <label className="city-label" htmlFor="city">City</label>
                            <input onChange={onInputChange} value={userInputData.city} type='text' name="city"></input>
                            {errorMessages['city'] ? <InvalidInputMsg inputName="city"/> : null}
                            <label className="age-label" htmlFor="age">Age</label>
                            <input onChange={onInputChange} value={userInputData.age} type='number' name="age"></input>
                            {errorMessages['age'] ? <InvalidInputMsg inputName="age"/> : null}
                            <SubmitButton text={'Submit'} />
                        </div>
                    </form>
                </UserModal> 
            , document.getElementById('modal-root')
        )
    ) 
}

export default EditUserModal