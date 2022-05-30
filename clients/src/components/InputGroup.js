import React from 'react'
import { useState } from 'react'

const InputGroup = ({onChangeHandler}) => {
    const [Email, setEmail] = useState('')
    const [Lastname, setLastname] = useState('')
    const [Firstname, setFirstname] = useState('')
    const [Age, setAge] = useState('')

    const onSubmit = (event) =>{
        event.preventDefault()

        onChangeHandler({Email, Lastname, Firstname, Age})

        setEmail('')
        setLastname('')
        setFirstname('')
        setAge('')
    }

  return (
    <form onSubmit={onSubmit}>
    <div className='mb-3'>
        <label htmlFor='Email' className='form-label'>
            Email
        </label>
        <input type='email'
        className='form-control' 
        name='Email'
        value={Email}
        onChange={(e)=>setEmail(e.target.value)} />
    </div>
    <div className='mb-3'>
        <label htmlFor='Lastname' className='form-label'>
            Lastname
        </label>
        <input type='text' 
        className='form-control' 
        name='Lastname'
        value={Lastname}
        onChange={(e)=>setLastname(e.target.value)} />
    </div>
    <div className='mb-3'>
        <label htmlFor='Firstname' className='form-label'>
            Firstname
        </label>
        <input type='text' 
        className='form-control' 
        name='Firstname'
        value={Firstname}
        onChange={(e)=>setFirstname(e.target.value)} />
    </div>
    <div className='mb-3'>
        <label htmlFor='Age' className='form-label'>
            Age
        </label>
        <input type='text' 
        className='form-control' 
        name='Age'
        value={Age}
        onChange={(e)=>setAge(e.target.value)} />
    </div>
    <button 
    className='btn btn-primary' type='submit'>Add User</button>
</form>
  )
}

export default InputGroup