import React, { useState } from 'react'

const ControlledForm = () => {
    const [name,setName]  = useState("")
    const [email,setEmail]  = useState("")
    const [password,setPassword]  = useState("")
        const handleNameChange = (e)=>{
            setName( e.target.value)
        }
    const handleEmailChange = (e)=>{
        setEmail( e.target.value)
        }
    const  handlePasswordChange = (e)=>{
        setPassword( e.target.value)
        }
        const  handleSubmit = (e)=>{
            e.preventDefault()
            console.log(name, email, password)
        }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' name='name' value={name} onChange={handleNameChange} />
            </div>
            <div>
                <label>Email</label>
                <input type='email' name='email' value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label>Password</label>
                <input type='password' name='password' value={password} onChange={handlePasswordChange} />
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default ControlledForm