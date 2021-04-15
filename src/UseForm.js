import {useState, useEffect} from 'react'

const UseForm = ()=>{
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  })
  const [errors, setErrors] = useState({

  })

  const handleChange = e =>{
    const {name,value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
    console.log(setValues);
  }

  const handleSubmit = e =>{
    e.preventDefault();
  }

  return {handleChange, values, handleSubmit};
}

export default UseForm