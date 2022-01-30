
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import { newUser } from "../../Services/utilities";

export default function SignUp() {

const navigate = useNavigate

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    const createUser = {
      username,
      password
    }
    await newUser(createUser)
  navigate('/Subscriptions')
  }


  return (
    <div id='signup-main-container'>
      <form id='sign-up-form'>
        <input
          id = 'Username Field'
          type='text'
          value='username'
          onChange={(e) => setUsername(e.target.value)}
          placeholder="NEW USERNAME"
        />
        <input
          id = 'Password Field'
          type='text'
          value='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder="NEW PASSWORD"
        />
        <button id='create-account-button' onClick={handleSubmit}>Create New Account</button>
      </form>
    </div>
  )
}
