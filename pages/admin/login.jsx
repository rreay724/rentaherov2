import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const Login = () => {
  const router = useRouter()
  const [username, setUserName] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(null)

  const handleClick = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_HOST_URL}/api/login`, {
        username,
        password,
      })
      router.push('/admin')
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  return (
    <div className="mt-20 min-h-screen">
      <div className="mx-auto h-[20rem] w-[44rem] space-x-3 border p-20 shadow-lg">
        <h1 className="text-lg">Admin Dashboard</h1>
        <input
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
          className="pl-2"
        />
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="pl-2"
        />
        <button
          className="rounded-full border bg-blue-500 px-4 py-1 text-white"
          onClick={handleClick}
        >
          Sign In
        </button>
        {error && <span>Invalid username or password</span>}
      </div>
    </div>
  )
}

export default Login
