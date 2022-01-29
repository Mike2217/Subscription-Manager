import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate



  export const signIn = async (credentials) => {
    try {
      const res = await api.post('/sign-in', credentials)
      localStorage.setItem('token', res.data.token)
      const user = jwtDecode(res.data.token)
      return user 
    } catch (error) {
      throw error
    }
  }


  const [form, setForm] = useState({
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
  })
  }

  const onSignIn = async (e) => {
    e.preventDefault()
    const { setUser } = props
    if (checkSpCharacters(form.username)) {
      setForm({
        isError: true,
        errorMsg: 'Username contains unapproved special characters',
        username: '',
        password: '',
      })
    } else if (checkSpCharacters(form.password)) {
      setForm({
        isError: true,
        errorMsg: 'Password contains unapproved special characters',
        username: '',
        password: '',
      })
    } else {
      try {
        const user = await signIn(form)
        setUser(user)
        navigate('/Subscriptions')
      } catch (error) {
        console.log(error)
        setForm({
          isError: true,
          errorMsg: 'invalid credentials',
          password: '',
        })
      }
    }
  }

  return (
    <div id='Login-Form-Container'>
      <form id='Login-Form' onSubmit={onSignIn}>
      <p className='sign-in-form-text'>Username</p>
      <input name='username' type="text" value={form.username} onChange={handleChange} />
      <p className='sign-in-form-text'>Password</p>
      <input name='password' type="password"  value={form.password} onChange={handleChange} />
      </form>
    </div>
  )
}
