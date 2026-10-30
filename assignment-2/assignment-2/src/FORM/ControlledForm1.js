import React, { useState } from 'react'

const ControlledForm1 = () => {
    const [user,setUser]  = useState(
        {name : " ", 
        email : " ", 
        password : "",})

    const {name, email, password} = user;

        const handleChange = (e) =>{
            setUser( {...user, [e.target.name]: e.target.value })
        }
        const  handleSubmit = (e)=>{
            e.preventDefault();
            console.log(user)
        }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' name='name' value={name} onChange={handleChange} />
            </div>
            <div>
                <label>Email</label>
                <input type='email' name='email' value={email} onChange={handleChange} />
            </div>
            <div>
                <label>Password</label>
                <input type='password' name='password' value={password} onChange={handleChange} />
            </div>

            <button>Submit</button>
        </form>
    </div>
  )
}

export default ControlledForm1