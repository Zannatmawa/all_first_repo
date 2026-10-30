import React from 'react'

import { Formik, useFormik } from 'formik';

function Sign_up() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm({value : ""});
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Name:</label>
        <input type='text' name='name' value={formik.values.name} onChange={formik.handleChange}/>
        <br/>

        <label>Email:</label>
        <input type='email' name='email' value={formik.values.email} onChange={formik.handleChange}/>
        <br/>

        <label>Password:</label>
        <input type='password' name='password' value={formik.values.password} onChange={formik.handleChange}/>
        <br/>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Sign_up;