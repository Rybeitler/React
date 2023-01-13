import React, {useState} from 'react';

const Form = (props)=>{
    const[firstName, setFirstName] = useState("")
    const[firstNameEr, setFirstNameEr] = useState("")
    const[lastName, setLastName] = useState("")
    const[lastNameEr, setLastNameEr] = useState("")
    const[email, setEmail] = useState("")
    const[emailEr, setEmailEr] = useState("")
    const[password, setPassword] = useState("")
    const[passwordEr, setPasswordEr] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")
    const[confirmPasswordEr, setConfirmPasswordEr] = useState("")

    const firstNameVal = (e) =>{
        setFirstName(e.target.value);
        {e.target.value.length !==0 && e.target.value.length<2 ?
            setFirstNameEr("First Name must be at least 2 char!"):
            setFirstNameEr("")}
    }
    const lastNameVal = (e)=>{
        setLastName(e.target.value);
        {e.target.value.length!==0 && e.target.value.length<2 ?
            setLastNameEr("Last Name must be at least 2 char!"):
            setLastNameEr("")}
    }
    const emailVal = (e)=>{
        setEmail(e.target.value);
        {e.target.value.length!==0 && e.target.value.length<5 ?
            setEmailEr("Email must be at least 5 char!"):
            setEmailEr("")}
    }
    const passwordVal = (e)=>{
        setPassword(e.target.value);
        {e.target.value.length!==0 && e.target.value.length<8 ?
            setPasswordEr("Password must be at least 8 char!"):
            setPasswordEr("")}
    }
    const confirmPasswordVal = (e)=>{
        setConfirmPassword(e.target.value);
        if(e.target.value.length!==0 && e.target.value.length<8){
            setConfirmPasswordEr("Password must be at least 8 char")
        }else if(e.target.value!==password){
            setConfirmPasswordEr("Passwords must match!")
        }else{
            setConfirmPasswordEr("")
        }
    }


    const createUser = (e)=>{
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword}
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }
    return(
        <div>
            <form onSubmit= {createUser}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={firstNameVal}/>
                    {firstNameEr ? <p>{firstNameEr}</p>:''}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={lastNameVal}/>
                    {lastNameEr ? <p>{lastNameEr}</p>:''}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={emailVal}/>
                    {emailEr ? <p>{emailEr}</p>:''}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={passwordVal}/>
                    {passwordEr? <p>{passwordEr}</p>:''}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={confirmPasswordVal}/>
                    {confirmPasswordEr? <p>{confirmPasswordEr}</p>:null}
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h2>Entered Data</h2>
                <p>First name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    )
}

export default Form;