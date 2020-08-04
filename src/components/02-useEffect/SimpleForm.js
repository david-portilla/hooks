import React, { useEffect } from 'react'
import './form.css'
import { useState } from 'react'
import Message from './Message'

const SimpleForm = () => {

  const [ formState, setformState ] = useState({
    name: '',
    email: ''
  })

  const { name, email } = formState

  const handleInputChange = ({ target }) => {
    setformState({
      ...formState,
      [ target.name ]: target.value
    })
  }

  useEffect(() => {
    console.log('hey useEffect')
  }, [])

  useEffect(() => {
    console.log('updating state')
  }, [ formState ])

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <form action="#" className="form-group">
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          placeholder="your name"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChange }
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="email@email.com"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />

      </form>

      { name === '123' && <Message /> }

    </>
  )
}

export default SimpleForm
