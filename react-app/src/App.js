import Layout from 'react-app/src/Components/Layout/Layout.jsx'
import Home from 'react-app/src/Screens/Home'
import Login from 'react-app/src/Screens/Login'
import ManageSub from 'react-app/src/Screens/ManageSub'
import AddSub from 'react-app/src/Screens/AddSub'
import SignUp from 'react-app/src/Screens/SignUp'
import './App.css'

function App() {



  return (
    <div className='app'>
      <Layout>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Subscriptions' element={<ManageSub />} />
        <Route path='/Add-Subscription' element={<AddSub />} />
          <Route path='/Sign-Up' element={<SignUp />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App;
