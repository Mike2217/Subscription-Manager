


import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import React from 'react';
import { getUser } from "../../Services/utilities";
import './Login.css'

export default function SignUp() {

// const navigate = useNavigate

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [captureUser, setCaptureUser] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = {
      username,
      password
    }
    await getUser(login)
    //GET LOGIN WORKING (Display users in console) Grab ID from OBJECT and then id form the object will be displayed on the bottom
    console.log(login)
  // navigate('/Subscriptions')
  }


  return (
    <div id='signup-main-container'>
      <form id='sign-up-form'>
        <input
          className='form-fields input-fields'
          id = 'Username-Field'
          type='text'
          // value='username'
          onChange={(e) => setUsername(e.target.value)}
          placeholder="USERNAME"
        />
        <input
          className='form-fields input-fields'
          id = 'Password-Field'
          type='text'
          // value='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder="PASSWORD"
        />
        <button className='form-fields' id='create-account-button' onClick={handleSubmit}>LOGIN</button>
      </form>
      {
        password && username ? 
          <div>
            <Link to={`/Subscriptions/${captureUser.id}`}> </Link>
          </div>
          : null
      }
    </div>
  )
}
