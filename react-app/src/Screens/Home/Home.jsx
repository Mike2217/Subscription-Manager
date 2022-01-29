import { useNavigate } from 'react-router-dom'


export default function Home() {

  const navigate = useNavigate()

  return (
    <div>
      <div id='welcome-message'>
        Welcome to the subscription manager web-app.
        This web-app will allow you to track all of your current subscriptions, cost per month, and total spent. To get started, select log in, or sign up.
      </div>
      <div id='link-container'>
        <div onClick={navigate('/Login')}>Login</div>
        <div onClick={navigate('/Sign-Up')}>Sign Up</div>
      </div>
    </div>
  )
}



// Welcome to the subscription manager web-app.
// This web-app will allow you to track all of your current subscriptions, cost per month, and total spent. To get started, select log in, or sign up.