import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Screens/Home/Home.jsx";
import Login from "./Screens/Login/Login.jsx";
import ManageSub from "./Screens/ManageSub/ManageSub.jsx";
import AddSub from "./Screens/AddSub/AddSub.jsx";
import SignUp from "./Screens/SignUp/SignUp.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { verifyUser } from "./Services/userlogin.js";
import { getSubscriptions } from "./Services/utilities.js";

function App() {
  const [captureUser, setCaptureUser] = useState([]);
  const [captureUserID, setCaptureUserID] = useState(0);
  const [subList, setSubList] = useState([]);
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });

  useEffect(() => {
    const handleVerify = async () => {
      const res = await verifyUser();
      console.log(res);
      setCaptureUser(res);
    };
    handleVerify();
  }, []);

  useEffect(() => {
    const grabSubscriptions = async () => {
      const res = await getSubscriptions();
      console.log(res);
      setSubList(res);
    };
    grabSubscriptions();
  }, []);

  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login
                setCaptureUser={setCaptureUser}
                setCaptureUserID={setCaptureUserID}
                captureUser={captureUser}
                captureUserID={captureUserID}
                setUserInfo={setUserInfo}
                userInfo={userInfo}
              />
            }
          />
          <Route
            path="/Subscriptions/"
            element={<ManageSub captureUserID={captureUserID} username={userInfo.username} />}
          />
          <Route path="/Add-Subscription" element={<AddSub />} />
          {/* <Route path='/Sign-Up' element={<SignUp />} /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
