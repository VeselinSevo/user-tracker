import React, { useEffect, useReducer, useRef } from "react";
import { useState } from "react";      
import SubmitButton from "../UI/Buttons/SubmitButton";
import './AddUser.css'
import InvalidInputMsg from './InvalidInputMsg'

const formReducer = (prev, action) => {
    switch (action.type) {
        case 'username_INPUT' : {
            return {
                ...prev,
                username: action.value,
                usernameIsValid: action.value.trim().length > 5,
            }  
        }
        case 'country_INPUT' : {
            return {
                ...prev,
                country: action.value,
                countryIsValid: action.value.trim().length > 1,
            } 
        }


        case 'city_INPUT' : {
            return {
                ...prev,
                city: action.value,
                cityIsValid: action.value.trim().length > 5,
            } 
        }

        case 'age_INPUT' : {
        return {
            ...prev,
            age: action.value,
            ageIsValid: Number(action.value) > 5,
        }    
        }

        case 'CHECK_FORM' : {
            return {
                ...prev,
                formIsValid: action.value
            } 
        }
        

        case 'RESET_FORM' : {
            return {
                username: '',
                usernameIsValid: null,
                country: 'Serbia',
                countryIsValid: null,
                city: '',
                cityIsValid: null,
                age: '',
                ageIsValid: null,
                formIsValid:  false
            }
        }
    

        default:
            return {
                ...prev
            }    
        }
    
    
} 

const AddUser = props => {
    const timeout = useRef(null);
    const [form, dispachForm] = useReducer(formReducer, {
        username: null,
        usernameIsValid: null,
        country: 'Serbia',
        countryIsValid: true,
        city: '',
        cityIsValid: null,
        age: '',
        ageIsValid: null,
        formIsValid:  false
    })

    const [isTyping, setIsTyping] = useState(false);

    const { usernameIsValid } = form
    const { countryIsValid } = form
    const { cityIsValid } = form
    const { ageIsValid } = form
    const { formIsValid } = form;


    useEffect(() => {
        dispachForm({ type: 'CHECK_FORM', value: (usernameIsValid && countryIsValid && cityIsValid && ageIsValid)})
    }, [usernameIsValid, countryIsValid, cityIsValid, ageIsValid])


    const onInputChange = e => {
        if (timeout.current) {
            clearInterval(timeout.current);
            timeout.current = null;
        }
        setIsTyping(true);
        
        timeout.current = setTimeout(() => {
            setIsTyping(false);
        }, 1000);
        dispachForm({ type: `${e.target.name}_INPUT`, value: e.target.value })
    } 

    const addUser = (e) => {
        console.log(123)
        e.preventDefault();
        const userData  = {
            username: form.username,
            country: form.country,
            city: form.city,
            age: form.age,
            id: Math.random(),
            key: Math.random()
        }
        
        dispachForm({ type: 'RESET_FORM' })

        if (form.formIsValid) {
            props.addNewUser(userData)
        } 
    }

    console.log(cityIsValid && ageIsValid)
    

    return (
        <form className="add-user-form" onSubmit={addUser}>
            <div className="add-user-form__inputs">
                <label className="username-label" htmlFor="username">Name</label>
                <input onChange={onInputChange} value={form.username || ''} type='text' name="username"></input>
                {form.username != null && !usernameIsValid && !isTyping ? <InvalidInputMsg inputName="username"/> : null}
                <label className="country-label" htmlFor="country">Country</label>
                <select name="country" onChange={onInputChange} value={form.country}>
                    <option>Serbia</option>
                    <option>Croatia</option>
                    <option>USA</option>
                </select>
                {/* {errorMessages['country'] ? <InvalidInputMsg inputName="country"/> : null} */}
                <label className="city-label" htmlFor="city">City</label>
                <input onChange={onInputChange} value={form.city} type='text' name="city"></input>
                {/* {errorMessages['city'] ? <InvalidInputMsg inputName="city"/> : null} */}
                <label className="age-label" htmlFor="age">Age</label>
                <input onChange={onInputChange} value={form.age} type='number' name="age"></input>
                {/* {errorMessages['age'] ? <InvalidInputMsg inputName="age"/> : null} */}
                {<SubmitButton disabled={!formIsValid} text={'Submit'}/>}
            </div>
        </form>
    )
}

export default AddUser




// import React, { useEffect, useRef } from "react";
// import { useState } from "react";      
// import SubmitButton from "../UI/Buttons/SubmitButton";
// import './AddUser.css'
// import InvalidInputMsg from './InvalidInputMsg'

// const AddUser = props => {

//     const [errorMessages, setErrorMessages] = useState({})
//     const isPristine = useRef({
//         username: true,
//         country: true,
//         city: true,
//         age: true
//     });

//     const isValid = useRef({
//         username: false,
//         country: true,
//         city: false,
//         age: false
//     });

//     const timeout = useRef(null);

//     const [userInputData, setUserInputData] = useState({
//         username: '',
//         country: 'Serbia',
//         city: '',
//         age: 0
//     }) 

//     const validateInput = (name, value) => {
//         if(typeof value === 'string') {
//             const check = value.length < 1;
//             isValid.current[name] = !check
//             setErrorMessages(prev => {
//                 return (
//                     {
//                         ...prev,
//                         [name]: check
//                     }
//                 )
//             })
//         }

//         //dodati za age logic
//     }


//     const onInputChange = e => {

//         isPristine.current[e.target.name] = false
//         validateInput(e.target.name, e.target.value);

//         setUserInputData(prev => {
//             return {
//                 ...prev,
//                 [e.target.name]: e.target.value
//             }
//         })
//     } 

//     const addUser = (e) => {
//         e.preventDefault()

//         for (let prop in isValid.current) {
//             validateInput(prop, userInputData[prop]);
//         }

//         let isFormValid = Object.values(isValid.current).every(prop => prop);

//         console.log(isFormValid)

//         for (let prop in isPristine.current) {
//             isPristine.current[prop] = false;
//         }

//         if(!isFormValid) {
//             return
//         }

//         const userData  = {
//             username: userInputData.username,
//             country: userInputData.country,
//             city: userInputData.city,
//             age: userInputData.age,
//             id: Math.random(),
//             key: Math.random()
//         }

        
//         setUserInputData({
//             username: '',
//             country: 'Serbia',
//             city: '',
//             age: 0
//         })
//         props.addNewUser(userData)
        

//         isFormValid = false
//         for (let prop in isValid.current) {
//             isValid.current[prop] = false;
//         }
//     }

//     return (
//         <form className="add-user-form" onSubmit={addUser}>
//             <div className="add-user-form__inputs">
//                 <label className="username-label" htmlFor="username">Name</label>
//                 <input onChange={onInputChange} value={userInputData.username} type='text' name="username"></input>
//                 {errorMessages['username'] ? <InvalidInputMsg inputName="username"/> : null}
//                 <label className="country-label" htmlFor="country">Country</label>
//                 <select name="country" onChange={onInputChange} value={userInputData.country}>
//                     <option>Serbia</option>
//                     <option>Croatia</option>
//                     <option>USA</option>
//                 </select>
//                 {errorMessages['country'] ? <InvalidInputMsg inputName="country"/> : null}
//                 <label className="city-label" htmlFor="city">City</label>
//                 <input onChange={onInputChange} value={userInputData.city} type='text' name="city"></input>
//                 {errorMessages['city'] ? <InvalidInputMsg inputName="city"/> : null}
//                 <label className="age-label" htmlFor="age">Age</label>
//                 <input onChange={onInputChange} value={userInputData.age} type='number' name="age"></input>
//                 {errorMessages['age'] ? <InvalidInputMsg inputName="age"/> : null}
//                 <SubmitButton text={'Submit'} />
//             </div>
//         </form>
//     )
// }

// export default AddUser