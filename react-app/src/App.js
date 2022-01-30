import Layout from './Components/Layout/Layout.jsx'
import Home from './Screens/Home/Home.jsx'
import Login from './Screens/Login/Login.jsx'
import ManageSub from './Screens/ManageSub/ManageSub.jsx'
import AddSub from './Screens/AddSub/AddSub.jsx'
import SignUp from './Screens/SignUp/SignUp.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {useState} from 'react'



function App() {

  const [captureUser, setCaptureUser] = useState([]);
  const [captureUserID, setCaptureUserID] = useState("");


  return (
    <div className='app'>
      <Layout>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setCaptureUser={setCaptureUser} setCaptureUserID={setCaptureUserID} captureUser={captureUser} captureUserID={captureUserID}/>} />
        <Route path='/Subscriptions/' element={<ManageSub />} />
        <Route path='/Add-Subscription' element={<AddSub />} />
        <Route path='/Sign-Up' element={<SignUp />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App;
