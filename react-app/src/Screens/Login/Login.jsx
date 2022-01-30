import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import { getUsers } from "../../Services/utilities";
import "./Login.css";
import ManageSub from "../ManageSub/ManageSub.jsx";
import { logIn } from "../../Services/userlogin";

export default function SignUp({setCaptureUser, setCaptureUserID, captureUser, captureUserID}) {
  const navigate = useNavigate

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    captureUser.forEach((user) => {
      if (user.username == username && user.password == password) {
        setCaptureUserID(user.id);
      }
    });
    await logIn({
      username,
      password
    })
    navigate('/Subscriptions')
  };
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
  // console.log(captureUser);

  return (
    <div id="signup-main-container">
      <form onSubmit={handleSubmit} id="sign-up-form">
        <input
          className="form-fields input-fields"
          id="Username-Field"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="USERNAME"
        />
        <input
          className="form-fields input-fields"
          id="Password-Field"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="PASSWORD"
        />
        <button
          className="form-fields"
          id="create-account-button"
          type='submit'
        >
          LOGIN
        </button>
      </form>
      {/* <ManageSub captureUserID={captureUserID} /> */}
      {/* {password && username ? (
        <div>
          <Link to={`/Subscriptions/`}> </Link>
        </div>
      ) : null} */}
    </div>
  );
}
