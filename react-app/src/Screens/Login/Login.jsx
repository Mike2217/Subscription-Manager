import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import { getUsers } from "../../Services/utilities";
import "./Login.css";
import ManageSub from 'react-app/src/Screens/ManageSub/ManageSub.jsx'

export default function SignUp() {
  // const navigate = useNavigate

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captureUser, setCaptureUser] = useState([]);
  const [captureUserID, setCaptureUserID] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    captureUser.forEach((user) => {
      if (user.username == username && user.password == password) {
        setCaptureUserID(user.id)
      }
    })
  }
    // await getUser(login)
    //GET LOGIN WORKING (Display users in console) Grab ID from OBJECT and then id form the object will be displayed on the bottom
        useEffect(() => {
          const grabUsers = async () => {
            const res = await getUsers();
            console.log(res);
            setCaptureUser(res);
          };
          grabUsers();
        }, []);
  console.log(captureUser)
  
    

  return (
    <div id="signup-main-container">
      <form id="sign-up-form">
        <input
          className="form-fields input-fields"
          id="Username-Field"
          type="text"
          // value='username'
          onChange={(e) => setUsername(e.target.value)}
          placeholder="USERNAME"
        />
        <input
          className="form-fields input-fields"
          id="Password-Field"
          type="text"
          // value='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder="PASSWORD"
        />
        <button
          className="form-fields"
          id="create-account-button"
          onClick={handleSubmit}
        >
          LOGIN
        </button>
      </form>
      <ManageSub captureUserID={captureUserID} />
      {password && username ? (
        <div>
          <Link to={`/Subscriptions/`}> </Link>
        </div>
      ) : null}
    </div>
  );
}
