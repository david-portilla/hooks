import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {

  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <h1>LoginScreen</h1>
      <hr />

      <button
        onClick={ () => {
          setUser({
            id: 1234,
            name: 'David',
            email: 'david_portilla@hotmail.com'
          })
        } }
        className="btn btn-primary">
        Login
      </button>

    </>
  )
}

export default LoginScreen
