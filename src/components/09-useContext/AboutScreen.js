import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext)

  const handleClick = () => {
    setUser({})
  }

  return (
    <>
      <h1>AboutScreen</h1>
      <hr />


      <pre>
        { JSON.stringify(user, null, 3) }
      </pre>


      <button
        onClick={ handleClick }
        className="btn btn-warning">
        Logout
      </button>
    </>
  )
}

export default AboutScreen
