import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {

  const navigate = useNavigate()

  return (
    <div id='home-container'>
      <div id='message-container'>
      <div id='welcome-message'>
          Welcome to the subscription manager web-app.
          </div>
      <div id='content-description'>
        This web-app will allow you to track all of your current subscriptions, cost per month, and total spent. To get started, select log in, or sign up.
      </div>
      <div id='link-container'>
        <div id='home-login' onClick={navigate('/Login')}>Login</div>
        <div id='home-sign-up' onClick={navigate('/Sign-Up')}>Sign Up</div>
      </div>
      </div>
      </div>
  )
}



// Welcome to the subscription manager web-app.
// This web-app will allow you to track all of your current subscriptions, cost per month, and total spent. To get started, select log in, or sign up.