import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import { getUsers } from "../../Services/utilities";
import "./Login.css";
import { logIn } from "../../Services/userlogin";

export default function SignIn({
  captureUser,
  setCaptureUser,
  captureUserID,
  setCaptureUserID,
  userInfo,
  setUserInfo
}) {
  const navigate = useNavigate();

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  // const [captureUser, setCaptureUser] = useState([]);
  // const [captureUserID, setCaptureUserID] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    // console.log(userInfo)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(captureUser[0].username)
    // console.log(userInfo.username)
    // console.log(userInfo.password)
    // captureUser.forEach((user) => {
    //   // console.log(user.username)
    //   // console.log(user.password)
    //   if ((user.username == userInfo.username) && (user.password == userInfo.password)) {
    //     console.log('It WORKED!')
    //     setCaptureUserID(user.id)
    //     console.log(captureUserID)
    //   } else {
    //     console.log('Error')
    //   }
    // });
    const userData = await logIn(userInfo);
    console.log(userInfo)
    setCaptureUser(userData);
    console.log(captureUser)
    // await logIn({
    //   username,
    //   password
    // })
    navigate("/Subscriptions");
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

  return (
    <div id="signup-main-container">
      <form onSubmit={handleSubmit} id="sign-up-form">
        <input
          name="username"
          className="form-fields input-fields"
          id="Username-Field"
          type="text"
          value={userInfo.username}
          onChange={(e) => handleChange(e)}
          // onChange={(e) => setUsername(e.target.value)}
          placeholder="USERNAME"
        />
        <input
          name="password"
          className="form-fields input-fields"
          id="Password-Field"
          type="text"
          value={userInfo.password}
          onChange={(e) => handleChange(e)}
          // onChange={(e) => setPassword(e.target.value)}
          placeholder="PASSWORD"
        />
        <button
          className="form-fields"
          id="create-account-button"
          type="submit"
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
