
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import { getUser } from "../../Services/utilities";
import './Login.css'

export default function SignUp() {

const navigate = useNavigate

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = {
      username,
      password
    }
    await getUser(login)
  navigate('/Subscriptions')
  }


  return (
    <div id='signup-main-container'>
      <form id='sign-up-form'>
        <input
          className='form-fields input-fields'
          id = 'Username-Field'
          type='text'
          value='username'
          onChange={(e) => setUsername(e.target.value)}
          placeholder="USERNAME"
        />
        <input
          className='form-fields input-fields'
          id = 'Password-Field'
          type='text'
          value='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder="PASSWORD"
        />
        <div className='form-fields' id='create-account-button' onClick={handleSubmit}>LOGIN</div>
      </form>
    </div>
  )
}
